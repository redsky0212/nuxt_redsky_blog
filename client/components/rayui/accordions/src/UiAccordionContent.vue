<template>
  <div ref="refAccordionBody" :style="bodyStyle" class="ui-accordion-collapse" :class="changeActive">
    <div class="ui-accordion-collapse-body" :arial-labelledby="headerId" role="region" :id="contentId" style="padding: 1.25rem;">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  // TODO: content로 html tag가 들어올경우 닫혀 있는데도 focus가 이동 되는 이슈가 있음.
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
      if (this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx] === undefined) {
        return obj;
      }
      // if (String(this.accordionIndex) === this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].selectedIndex) {
      //   const h = this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].contentHeight;
      //   obj['height'] = `${h}px`;
      // } else {
      //   obj['height'] = 0;
      // }

      return obj;
    },
    changeActive: function () {
      const obj = {};
      if (this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx] !== undefined) {
        if (String(this.accordionIndex) === this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].selectedIndex) {
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
  mounted() {
    this.currentSelectHeight();
    this.observeSize();
  },
  methods: {
    // TODO: 최초 selectedIndex값을 셋팅할때는 펼쳐지지 않는 버그가 있음.
    // accordion body의 height값을 셋팅하기 위한 메서드
    changeHeight(isShow) {
      const body = this.$refs.refAccordionBody;
      if (body) {
        if (isShow) {
          console.log(body.scrollHeight);
          body.style.height = body.scrollHeight + 'px';
        } else {
          body.style.height = '0';
        }
      }
    },
    currentSelectHeight() {
      if (this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx] !== undefined) {
        if (String(this.accordionIndex) === this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].selectedIndex) {
          this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].contentHeight = this.$refs.refAccordionBody.scrollHeight;
        }
      }
    },
    observeSize() {
      const ro = new ResizeObserver((entries) => {
        console.log(entries);
        entries.some((entry) => {
          console.log(`accordion content height : ${entry.target.scrollHeight}`);
          if (entry.target.scrollHeight > 0) {
            this.currentSelectHeight();
          }
        });
      });

      ro.observe(this.$refs.refAccordionBody);
    },
  },
};
</script>
