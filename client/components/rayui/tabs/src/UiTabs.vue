<template>
  <div class="ui-tabs" style="font-size: 1em !important;">
    <div class="ui-tabs-bar ui-tabs-bar-slide-group" role="tablist" style="background-color: #e0e5e8 !important; color: #42474e;">
      <div class="ui-tabs-bar-slide-group-prev">prev</div>
      <div class="ui-tabs-bar-slide-group-wrapper">
        <div :class="{ 'ui-tabs-bar-slide-group-content': true, 'ui-tabs-bar-slide-group-content-fixed': fixedTabs }">
          <div class="ui-tabs-bar-slide-wrapper" :style="changeSliderStyle" style="background-color: #39b689 !important; border: 0 solid #39b689; height: 3px; top: 0;">
            <div class="ui-tabs-bar-slider"></div>
          </div>
          <slot name="tabs"></slot>
        </div>
      </div>
      <div class="ui-tabs-bar-slide-group-next">next</div>
    </div>
    <div class="ui-tabs-items">
      <div class="ui-tabs-items-container" style="padding: 1.25rem !important;">
        <slot name="tabpanel"></slot>
      </div>
    </div>
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
      g_tabsStatusValue: window.$nuxt.$rayui.tabsStatusValue,
    };
  },
  computed: {
    changeSliderStyle: function () {
      const obj = {};

      if (window.$nuxt.$rayui.tabsStatusValue.list[this.key] === undefined) {
        return obj;
      }
      const w = window.$nuxt.$rayui.tabsStatusValue.list[this.key].tabWidth;
      const l = window.$nuxt.$rayui.tabsStatusValue.list[this.key].offsetLeft;
      obj['width'] = w ? `${w}px` : '90px';
      obj['left'] = `${l}px`;
      return obj;
    },
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
      // tab, tabpanel 의 slot위치 조정.
      this.changeSlot();
      this.createTabsKey();
    },
    changeSlot() {
      const s = this.$slots.default;
      const arrTab = [];
      const arrTabpanel = [];
      s.forEach((element) => {
        if (RegExp('ui-tab', 'g').test(element.tag) && !RegExp('ui-tabpanel', 'g').test(element.tag)) {
          element.data.attrs = {
            tabIdx: arrTab.length,
            tabsIdx: this.g_tabsStatusValue.key,
            fixedTabs: this.fixedTabs,
          };
          arrTab.push(element);
        }
        if (RegExp('ui-tabpanel', 'g').test(element.tag)) {
          element.data.attrs = {
            tabIdx: arrTabpanel.length,
            tabsIdx: this.g_tabsStatusValue.key,
            fixedTabs: this.fixedTabs,
          };
          arrTabpanel.push(element);
        }
      });

      this.$slots['tabs'] = arrTab;
      this.$slots['tabpanel'] = arrTabpanel;
      delete this.$slots.default;
    },
    createTabsKey() {
      this.key = this.g_tabsStatusValue.key;
      this.tabKey = `ui_tabs_key_${this.g_tabsStatusValue.key++}`;
      this.g_tabsStatusValue.list.push({
        tabKey: this.tabKey,
        selectedIndex: this.selectedIndex,
        tabWidth: 0,
        offsetLeft: 0,
      });
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
<style lang="scss" scoped>
.ui-tabs {
  flex: 1 1 auto;
  width: 100%;
  .ui-tabs-bar {
    border-radius: inherit;
    height: 48px;
    .ui-tabs-bar-slide-group-wrapper {
      contain: content;
      display: flex;
      flex: 1 1 auto;
      overflow: hidden;
      touch-action: none;
      // margin-bottom: -1px;
      .ui-tabs-bar-slide-group-content {
        display: flex;
        flex: 1 0 auto;
        position: relative;
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        white-space: nowrap;
        &.ui-tabs-bar-slide-group-content-fixed {
          flex: 1 0 auto;
        }
        .ui-tabs-bar-slide-wrapper {
          bottom: 0;
          margin: 0 !important;
          position: absolute;
          transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
          z-index: 1;
          .ui-tabs-bar-slider {
            background-color: inherit;
            height: 100%;
            width: 100%;
          }
        }
        .ui-tab {
          cursor: pointer;
          color: inherit;
          align-items: center;
          display: flex;
          flex: 0 1 auto;
          font-size: 0.95em;
          font-weight: 500;
          justify-content: center;
          letter-spacing: 0.0892857143em;
          line-height: normal;
          min-width: 90px;
          // max-width: 360px;
          outline: none;
          padding: 0 16px;
          position: relative;
          text-align: center;
          text-decoration: none;
          // text-transform: uppercase;
          transition: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          margin-right: 2px;
          border-bottom: 1px solid #e0e5e8;
          &:last-child {
            margin-right: 0;
          }
          &:before {
            background-color: currentColor;
            bottom: 0;
            content: '';
            left: 0;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            right: 0;
            top: 0;
            transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
          }
          &:hover:not(.ui-tab-active) {
            background-color: #fff;
            transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
          }
          &.ui-tab-active {
            margin-top: -2px;
            height: calc(100% + 2px);
            border-top-width: 3px;
            font-weight: 600;
            border-bottom: 0;
          }
          &.ui-tab-active:not(:disabled) {
            color: #606060;
            background-color: #fff;
            border-color: #c5c5c5;
          }
          &.ui-tab-fixed {
            flex: 1 1 auto;
            width: 100%;
          }
        }
      }
    }
    .ui-tabs-bar-slide-group-prev {
      align-items: center;
      // display: flex;
      display: none;
      flex: 0 1 52px;
      justify-content: center;
      min-width: 52px;
    }
    .ui-tabs-bar-slide-group-next {
      align-items: center;
      // display: flex;
      display: none;
      flex: 0 1 52px;
      justify-content: center;
      min-width: 52px;
    }
  }
  .ui-tabs-bar-slide-group {
    display: flex;
  }
  /* tabs items */
  .ui-tabs-items {
    background-color: #fff;
    flex: 0 1 auto;
    position: relative;
    max-width: 100%;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    .ui-tabs-items-container {
      height: inherit;
      position: relative;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      .ui-tabs-item {
        display: none;
        &.ui-tabs-item-active {
          display: block;
        }
      }
    }
  }
}
</style>
