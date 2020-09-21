<template>
  <div class="ui-tabs" style="font-size: 1em !important;">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * 각각의 탭 간격을 균등하게 채워 표현
     * @type {Boolean}
     */
    fixedTabs: {
      type: Boolean,
      default: false,
    },
    /**
     * 최초 선택 되어져야 할 탭 index값 설정한다
     * @type {String}
     */
    selectedIndex: {
      type: String,
      default: '0',
    },
  },
  data() {
    return {
      key: 0,
      tabKey: '',
      g_tabsStatusValue: this.$rayui.tabsStatusValue,
    };
  },
  beforeMount() {
    // tabs 초기 생성시 초기화
    this.init();
  },
  beforeDestroy() {
    this.removeTabsKey();
  },
  methods: {
    init() {
      this.createTabsKey();
      this.changeSlot();
    },
    changeSlot() {
      const s = this.$slots.default;
      s.forEach((element) => {
        if (RegExp('ui-tab-titles', 'g').test(element.tag)) {
          element.data.attrs = {
            fixedTabs: this.fixedTabs,
            selectedIndex: this.selectedIndex,
            key: this.key,
            tabKey: this.tabKey,
          };
        }
        if (RegExp('ui-tab-contents', 'g').test(element.tag)) {
          element.data.attrs = {
            fixedTabs: this.fixedTabs,
            selectedIndex: this.selectedIndex,
            key: this.key,
            tabKey: this.tabKey,
          };
        }
      });
    },
    createTabsKey() {
      this.key = this.g_tabsStatusValue.key;
      this.tabKey = `ui_tabs_key_${this.g_tabsStatusValue.key}`;
      this.g_tabsStatusValue.list.push({
        tabKey: this.tabKey,
        selectedIndex: this.selectedIndex,
        tabWidth: 0,
        offsetLeft: 0,
      });
      this.g_tabsStatusValue.key++;
    },
    removeTabsKey() {
      this.g_tabsStatusValue.list.some((item, index) => {
        if (this.tabKey === this.g_tabsStatusValue.list[index].tabKey) {
          this.g_tabsStatusValue.list.splice(index, 1);
          this.g_tabsStatusValue.key--;
        }
      });
    },
  },
};
</script>
