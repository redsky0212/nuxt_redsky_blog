<template>
  <div class="ui-tabs-item" :class="changeActive" :id="tabpanelId" role="tabpanel" :aria-labelledby="tabId">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabId: '',
      tabpanelId: '',
      index: this.$attrs.tabIdx,
      tabKey: this.$parent.tabKey,
      selectedIndex: 0,
    };
  },
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
  mounted() {
    this.tabId = `tab-${this.$parent.tabKey + this.$attrs.tabIdx}`;
    this.tabpanelId = `tabpanel-${this.$parent.tabKey + this.$attrs.tabIdx}`;
  },
};
</script>
