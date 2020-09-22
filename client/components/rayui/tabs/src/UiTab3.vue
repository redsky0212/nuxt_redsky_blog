<template>
  <div class="ui-tabs-item" :class="changeActive" :id="tabpanelId" role="tabpanel" :aria-labelledby="tabId">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      tabId: '',
      tabpanelId: '',
      tabKey: '',
    };
  },
  computed: {
    changeActive: function () {
      const obj = {};

      if (this.isActive) {
        obj['ui-tabs-item-active'] = true;
      } else {
        obj['ui-tabs-item-active'] = false;
      }

      return obj;
    },
  },
};
</script>
