<template>
  <a :href="`#${tabpanelId}`" :id="tabId" aria-selected="true" role="tab" :aria-controls="tabpanelId" class="ui-tab ui-tab-active">
    <slot></slot>
  </a>
</template>
<script>
export default {
  data() {
    return {
      tabId: '',
      tabpanelId: '',
      index: 0,
      tabKey: '',
    };
  },
  mounted() {
    this.index = this.$attrs.tabIndex;
    this.tabKey = this.$parent.tabKey;
    this.tabId = `tab-${this.$parent.tabKey + this.$attrs.tabIndex}`;
    this.tabpanelId = `tabpanel-${this.$parent.tabKey + this.$attrs.tabIndex}`;
  },
};
</script>
