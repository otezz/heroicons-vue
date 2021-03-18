# heroicons-vue

Vue component for [Heroicons](https://heroicons.com/) aimed for flexibility.

## Install

```
npm i @otezz/heroicons-vue
```

## Usage

```vue
<template>
  <Heroicons class="w-5 h-5" icon="home" />
</template>

<script>
import Heroicons from '@otezz/heroicons-vue';

export default {
  components: {
    Heroicons,
  },
};
</script>
```

## Props

| Name   | Description | Required | Default value |
| ------ | ----------- | -------- | ------------- |
| `name` | Icon name   | yes      | -             |
| `type` | Icon type   | no       | `medium`      |
