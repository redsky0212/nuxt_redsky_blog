<template>
  <div ref="refAccordionBody" :style="bodyStyle" class="ui-accordion-collapse" :class="changeActive">
    <div class="ui-accordion-collapse-body" :arial-labelledby="headerId" :id="contentId" style="padding: 1.25rem;">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * content부분의 배경색을 지정한다.
     * @type {String}
     */
    backgroundColor: {
      type: String,
      default: '#fff',
    },
  },
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
    bodyStyle: function () {
      const obj = {};

      obj['backgroundColor'] = this.backgroundColor;

      return obj;
    },
    changeActive: function () {
      const obj = {};

      if (window.$nuxt.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx] !== undefined) {
        if (String(this.accordionIndex) === window.$nuxt.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].selectedIndex) {
          obj['ui-accordion-content-active'] = true;
          this.changeHeight(true);
        } else {
          obj['ui-accordion-content-active'] = false;
          this.changeHeight(false);
        }
      }
      return obj;
    },
  },
  methods: {
    // accordion body의 height값을 셋팅하기 위한 메서드
    changeHeight(isShow) {
      const body = this.$refs.refAccordionBody;
      if (body) {
        if (isShow) {
          body.style.height = body.scrollHeight + 'px';
        } else {
          body.style.height = '0';
        }
      }
    },
  },
};
</script>
