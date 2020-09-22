<template>
  <div class="ui-tabs-item" :class="changeActive" id="tabpanelId" role="tabpanel" aria-labelledby="tabId">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['type'],
  computed: {
    changeActive: function () {
      const obj = {};

      if (window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx] !== undefined) {
        if (String(this.index) === window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].selectedIndex) {
          obj['ui-tabs-item-active'] = true;
        } else {
          obj['ui-tabs-item-active'] = false;
        }
      }
      return obj;
    },
  },
};
</script>
