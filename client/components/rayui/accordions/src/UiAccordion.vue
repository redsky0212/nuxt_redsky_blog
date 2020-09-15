<template>
  <div class="ui-accordion">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accordionIndex: this.$attrs.accordionIdx,
      accordionsKey: this.$attrs.accordionsKey,
    };
  },
  beforeMount() {
    // Accordion 초기 생성시 초기화
    this.init();
  },
  methods: {
    init() {
      // tab, tabpanel 의 slot위치 조정.
      this.setSlot();
    },
    setSlot() {
      const s = this.$slots.default;
      s.forEach((element) => {
        if (RegExp('ui-accordion-header', 'g').test(element.tag) || RegExp('ui-accordion-content', 'g').test(element.tag)) {
          element.data.attrs = {
            accordionIdx: this.accordionIndex,
            accordionsIdx: this.accordionsKey,
          };
        }
      });
    },
  },
};
</script>
