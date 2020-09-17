<template>
  <div class="ui-accordions-container">
    <div class="ui-accordions">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * Accordion 이 펼쳐질때 하나가 아닌 여러개 펼쳐지게 해주는 옵션.
     * @type {Boolean}
     */
    multiSelect: {
      type: Boolean,
      default: false,
    },
    /**
     * 최초 선택 되어져야 할 Accordion index값 설정한다
     * @type {String||Array}
     */
    selectedIndex: {
      type: [String, Array],
      default: '',
    },
  },
  data() {
    return {
      key: 0,
      accordionKey: '',
      arrAccordion: [],
      g_accordionsStatusValue: window.$nuxt.$rayui.accordionsStatusValue,
    };
  },
  beforeMount() {
    // Accordions 초기 생성시 초기화
    this.init();
  },
  beforeDestroy() {
    this.removeAccordionsKey();
  },
  methods: {
    init() {
      // accordion 의 key생성.
      this.setSlot();
      this.createAccordionsKey();
      this.setContentExpanded();
    },
    setSlot() {
      const s = this.$slots.default;
      this.arrAccordion = [];
      s.forEach((element) => {
        if (RegExp('ui-accordion', 'g').test(element.tag)) {
          element.data.attrs = {
            accordionIdx: this.arrAccordion.length,
            accordionsKey: this.g_accordionsStatusValue.key,
          };
          this.arrAccordion.push({
            contentHeight: 0,
            expanded: false,
          });
        }
      });
    },
    // 멀티선택 옵션을 적용했을때를 위하여 전역에 contentList값을 셋팅해서 관리한다.
    setContentExpanded() {
      const list = this.g_accordionsStatusValue.list[this.g_accordionsStatusValue.key - 1].contentList;

      if (this.multiSelect) {
        if (this.$rayui.utils.isArray(this.selectedIndex)) {
          this.selectedIndex.forEach((item) => {
            const idx = Number(item);
            if (this.$rayui.utils.isNumber(idx)) {
              if (list[idx]) {
                list[idx].expanded = true;
              }
            }
          });
        } else {
          const idx = Number(this.selectedIndex);
          if (this.$rayui.utils.isNumber(idx)) {
            if (list[idx]) {
              list[idx].expanded = true;
            }
          }
        }
      }
    },
    createAccordionsKey() {
      this.key = this.g_accordionsStatusValue.key;
      this.accordionKey = `ui_accordions_key_${this.g_accordionsStatusValue.key++}`;
      this.g_accordionsStatusValue.list.push({
        accordionKey: this.accordionKey,
        selectedIndex: this.selectedIndex,
        multiSelect: this.multiSelect,
        contentHeight: 0, // TODO: contentList 안쪽으로 옮겨야함
        contentList: this.arrAccordion,
      });
    },
    removeAccordionsKey() {
      this.g_accordionsStatusValue.list.some((item, index) => {
        if (this.accordionKey === this.g_accordionsStatusValue.list[index].accordionKey) {
          this.g_accordionsStatusValue.list.splice(index, 1);
          this.g_accordionsStatusValue.key--;
        }
      });
    },
  },
};
</script>
