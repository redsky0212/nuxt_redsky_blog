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
     * @type {Boolean||String}
     */
    multiSelect: {
      type: [Boolean, String],
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
    },
    setSlot() {
      const s = this.$slots.default;
      const arrAccordion = [];
      s.forEach((element) => {
        if (RegExp('ui-accordion', 'g').test(element.tag)) {
          element.data.attrs = {
            accordionIdx: arrAccordion.length,
            accordionsKey: this.g_accordionsStatusValue.key,
          };
          arrAccordion.push(element);
        }
      });
    },
    createAccordionsKey() {
      this.key = this.g_accordionsStatusValue.key;
      this.accordionKey = `ui_accordions_key_${this.g_accordionsStatusValue.key++}`;
      this.g_accordionsStatusValue.list.push({
        accordionKey: this.accordionKey,
        selectedIndex: this.selectedIndex,
        contentHeight: 0,
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
