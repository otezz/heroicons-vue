<template>
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    v-html="path"
  ></svg>
</template>

<script>
import HeroiconsOutline from '@/assets/icons/outline.json';
import HeroiconsSolid from '@/assets/icons/solid.json';

export default {
  props: {
    type: {
      type: String,
      default: () => 'medium',
    },
    icon: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      heroiconsOutline: HeroiconsOutline,
      heroiconsSolid: HeroiconsSolid,
    };
  },
  computed: {
    path() {
      if (this.type === 'medium') {
        return this.heroiconsOutline[this.icon];
      }

      return this.heroiconsSolid[this.icon];
    },
  },
};
</script>
