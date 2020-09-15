<template>
  <div class="ui-accordion-collapse" style="display: none;">
    <div class="ui-accordion-collapse-body" :arial-labelledby="headerId" :id="contentId">내용 들어갈 부분</div>
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
  },
};
</script>
