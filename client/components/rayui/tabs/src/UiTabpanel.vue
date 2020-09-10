<template>
  <div class="ui-tabs-item ui-tabs-item-active" :id="tabpanelId" role="tabpanel" :aria-labelledby="tabId">
    <slot></slot>
  </div>
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
