<template>
  <div class="ui-accordion-collapse" :class="changeActive">
    <div class="ui-accordion-collapse-body" :arial-labelledby="headerId" :id="contentId" style="padding: 1.25rem;">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      g_accordionsStatusValue: window.$nuxt.$rayui.accordionsStatusValue,
      accordionIndex: this.$attrs.accordionIdx,
    };
  },
  computed: {
    headerId: function () {
      return `ui-accordion-header-${this.g_accordionsStatusValue.key}-${this.accordionIndex}`;
    },
    contentId: function () {
      return `ui-accordion-content-${this.g_accordionsStatusValue.key}-${this.accordionIndex}`;
    },
    changeActive: function () {
      const obj = {};

      if (window.$nuxt.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx] !== undefined) {
        if (String(this.accordionIndex) === window.$nuxt.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].selectedIndex) {
          obj['ui-accordion-content-active'] = true;
        } else {
          obj['ui-accordion-content-active'] = false;
        }
      }
      return obj;
    },
  },
};
</script>
