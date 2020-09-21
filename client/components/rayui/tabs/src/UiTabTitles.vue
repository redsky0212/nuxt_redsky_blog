<template>
  <div class="ui-tabs-bar ui-tabs-bar-slide-group" role="tablist" style="background-color: #e0e5e8 !important; color: #42474e;">
    <div class="ui-tabs-bar-slide-group-prev">prev</div>
    <div class="ui-tabs-bar-slide-group-wrapper">
      <div :class="{ 'ui-tabs-bar-slide-group-content': true, 'ui-tabs-bar-slide-group-content-fixed': fixedTabs }">
        <div class="ui-tabs-bar-slide-wrapper" :style="changeSliderStyle" style="background-color: #39b689 !important; border: 0 solid #39b689; height: 3px; top: 0;">
          <div class="ui-tabs-bar-slider"></div>
        </div>
        <slot></slot>
      </div>
    </div>
    <div class="ui-tabs-bar-slide-group-next">next</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fixedTabs: this.$attrs.fixedTabs,
      selectedIndex: this.$attrs.selectedIndex,
      key: this.$attrs.key,
      tabKey: this.$attrs.tabKey,
      g_tabsStatusValue: this.$rayui.tabsStatusValue,
    };
  },
  computed: {
    changeSliderStyle: function () {
      const obj = {};
      if (this.$rayui.tabsStatusValue.list[this.key] === undefined) {
        return obj;
      }
      const w = this.$rayui.tabsStatusValue.list[this.key].tabWidth;
      const l = this.$rayui.tabsStatusValue.list[this.key].offsetLeft;
      obj['width'] = w ? `${w}px` : '90px';
      obj['left'] = `${l}px`;
      return obj;
    },
  },
  beforeMount() {
    // tabs 초기 생성시 초기화
    this.init();
  },
  methods: {
    init() {
      // tab, tabpanel 의 slot위치 조정.
      this.changeSlot();
    },
    changeSlot() {
      const s = this.$slots.default;
      const arrTab = [];
      s.forEach((element) => {
        if (RegExp('ui-tab', 'g').test(element.tag)) {
          element.data.attrs = {
            tabIdx: arrTab.length,
            tabsIdx: this.key,
            fixedTabs: this.fixedTabs,
            tabKey: this.tabKey,
          };
          arrTab.push(element);
        }
      });
    },
  },
};
</script>
