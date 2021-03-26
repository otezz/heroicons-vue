# heroicons-vue

Vue component for [Heroicons](https://heroicons.com/) aimed for flexibility.

[![GitHub license](https://img.shields.io/github/license/otezz/heroicons-vue)](https://github.com/otezz/heroicons-vue/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@otezz/heroicons-vue)](https://www.npmjs.com/package/@otezz/heroicons-vue)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/otezz/heroicons-vue/test)
![nycrc config on GitHub](https://img.shields.io/nycrc/otezz/heroicons-vue)

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
