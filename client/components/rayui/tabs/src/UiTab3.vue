<template>
  <a ref="tabRef" :href="`#${tabpanelId}`" :id="tabId" :aria-selected="isSelected" role="tab" :aria-controls="tabpanelId" class="ui-tab" :class="changeClass" :idx="index" @click.prevent="onClick">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: ['type'],
  computed: {
    loader() {
      if (!this.type) {
        return null;
      }
      return () => {};
    },
  },
  mounted() {
    this.loader();
  },
};
</script>
