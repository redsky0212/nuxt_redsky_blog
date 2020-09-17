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
    // 전역 accordion 변수의 selectedIndex값 가져오기
    selectedIndex: function () {
      return this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].selectedIndex;
    },
    // 전역 accordion 변수의 multiSelect값 가져오기
    multiSelect: function () {
      return this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].multiSelect;
    },
    // 전역 accordion 변수의 contentList값 가져오기
    contentList: function () {
      return this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].contentList;
    },
    bodyStyle: function () {
      const obj = {};

      obj['backgroundColor'] = this.backgroundColor;
      if (this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx] === undefined) {
        return obj;
      }

      if (this.multiSelect) {
        if (this.contentList[this.accordionIndex].expanded) {
          obj['height'] = `${this.contentList[this.accordionIndex].contentHeight}px`;
        } else {
          obj['height'] = 0;
        }
      }

      return obj;
    },
    changeActive: function () {
      const obj = {};
      if (this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx] !== undefined) {
        if (String(this.accordionIndex) === this.selectedIndex) {
          obj['ui-accordion-content-active'] = true;
          if (!this.multiSelect) {
            this.changeHeight(true);
          }
        } else {
          obj['ui-accordion-content-active'] = false;
          if (!this.multiSelect) {
            this.changeHeight(false);
          }
        }
      }
      return obj;
    },
  },
  mounted() {
    this.currentSelectHeight(this.$refs.refAccordionBody.scrollHeight);
    this.observeSize();
  },
  methods: {
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
    currentSelectHeight(height) {
      if (this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx] !== undefined) {
        this.contentList[this.$attrs.accordionIdx].contentHeight = height;
      }
    },
    // display none 되었을때 dom 감지를 위한 함수
    observeSize() {
      const ro = new this.$rayui.ResizeObserver((entries) => {
        entries.some((entry) => {
          console.log(`accordion content height : ${entry.target.scrollHeight}`);
          if (entry.target.scrollHeight > 0) {
            this.currentSelectHeight(entry.target.scrollHeight);
            if (String(this.accordionIndex) === this.selectedIndex) {
              this.changeHeight(true);
            } else {
              this.changeHeight(false);
            }
            ro.disconnect();
          }
        });
      });

      ro.observe(this.$refs.refAccordionBody);
    },
  },
};
</script>
