<template>
  <div class="ui-tabs-items">
    <div class="ui-tabs-items-container" style="padding: 1.25rem !important;">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      key: this.$rayui.tabsStatusValue.key - 1,
      fixedTabs: false,
      selectedIndex: 0,
      tabKey: '',
      g_tabsStatusValue: null,
    };
  },
  beforeMount() {
    // tabs 초기 생성시 초기화
    this.init();
  },
  methods: {
    init() {
      // tab, tabpanel 의 slot위치 조정.
      this.changeSlot();

      this.fixedTabs = this.$rayui.tabsStatusValue.list[this.key].fixedTabs;
      this.selectedIndex = this.$rayui.tabsStatusValue.list[this.key].selectedIndex;
      this.tabKey = this.$rayui.tabsStatusValue.list[this.key].tabKey;
      this.g_tabsStatusValue = this.$rayui.tabsStatusValue;
    },
    changeSlot() {
      const s = this.$slots.default;
      const arrTabpanel = [];
      s.forEach((element) => {
        if (RegExp('ui-tabpanel', 'g').test(element.tag)) {
          element.data.attrs = {
            tabIdx: arrTabpanel.length,
            tabsIdx: this.key,
            fixedTabs: this.fixedTabs,
          };
          arrTabpanel.push(element);
        }
      });
    },
  },
};
</script>
