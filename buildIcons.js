const outlineIcons = './node_modules/heroicons/outline';
const solidIcons = './node_modules/heroicons/solid';

const fs = require('fs');
const cheerio = require('cheerio');

const generateIcon = (path, output) => {
  const icons = {};
  fs.readdir(path, (err, files) => {
    files.forEach((file) => {
      const iconName = file.replace('.svg', '');
      const content = fs.readFileSync(`${path}/${file}`, 'utf8');
      const $ = cheerio.load(content);
      icons[iconName] = $('svg')
        .html()
        .trim();
    });

    fs.writeFile(
      `./src/assets/icons/${output}.json`,
      JSON.stringify(icons, null, 2),
      'utf8',
      () => {
        if (err) {
          console.log('An error occurred while writing JSON Object to File.');
          return console.log(err);
        }

        console.log(`${output}.json file has been saved.`);
        return null;
      }
    );
  });
};

generateIcon(outlineIcons, 'outline');
generateIcon(solidIcons, 'solid');
