<template>
  <div class="ui-tabs" style="font-size: 1em !important;">
    <div class="ui-tabs-bar ui-tabs-bar-slide-group" role="tablist" style="background-color: #e0e5e8 !important; color: #42474e;">
      <div class="ui-tabs-bar-slide-group-prev">prev</div>
      <div class="ui-tabs-bar-slide-group-wrapper">
        <div class="ui-tabs-bar-slide-group-content">
          <div class="ui-tabs-bar-slide-wrapper" style="background-color: #39b689 !important; border: 0 solid #39b689; height: 3px; top: 0; left: 0px; width: 90px;">
            <div class="ui-tabs-bar-slider"></div>
          </div>
          <slot name="tabs"></slot>
          <a href="#tab-1" id="tab1" aria-selected="true" role="tab" aria-controls="tab-1" class="ui-tab ui-tab-active">Home</a>
          <a href="#tab-2" id="tab2" aria-selected="false" role="tab" aria-controls="tab-2" class="ui-tab">Profile</a>
          <a href="#tab-3" id="tab3" aria-selected="false" role="tab" aria-controls="tab-3" class="ui-tab">More</a>
        </div>
      </div>
      <div class="ui-tabs-bar-slide-group-next">next</div>
    </div>
    <div class="ui-tabs-items">
      <div class="ui-tabs-items-container" style="padding: 1.25rem !important;">
        <slot name="tabpanel"></slot>
        <div class="ui-tabs-item ui-tabs-item-active" id="tab-1" role="tabpanel" aria-labelledby="tab1">tab 1 item</div>
        <div class="ui-tabs-item" id="tab-2" role="tabpanel" aria-labelledby="tab2">tab 2 item</div>
        <div class="ui-tabs-item" id="tab-3" role="tabpanel" aria-labelledby="tab3">tab 3 item</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabKey: '',
      g_tabsStatusValue: window.$nuxt.$rayui.tabsStatusValue,
    };
  },
  beforeMount() {
    // tab, tabpanel 의 slot위치 조정.
    this.changeSlot();
    this.createTabsKey();
  },
  mounted() {
    document.getElementById('tab1').setAttribute('tabindex', '0');
  },
  beforeDestroy() {
    this.removeTabsKey();
  },
  methods: {
    changeSlot() {
      const s = this.$slots.default;
      const arrTab = [];
      const arrTabpanel = [];
      s.forEach((element) => {
        if (RegExp('ui-tab', 'g').test(element.tag) && !RegExp('ui-tabpanel', 'g').test(element.tag)) {
          element.data.attrs = { tabIndex: arrTab.length };
          arrTab.push(element);
        }
        if (RegExp('ui-tabpanel', 'g').test(element.tag)) {
          element.data.attrs = { tabIndex: arrTabpanel.length };
          arrTabpanel.push(element);
        }
      });
      this.$slots['tabs'] = arrTab;
      this.$slots['tabpanel'] = arrTabpanel;
      delete this.$slots.default;
    },
    createTabsKey() {
      this.tabKey = `ui_tabs_key_${this.g_tabsStatusValue.key++}`;
      this.g_tabsStatusValue.list.push(this.tabKey);
    },
    removeTabsKey() {
      this.g_tabsStatusValue.list.some((item, index) => {
        if (this.tabKey === this.g_tabsStatusValue.list[index]) {
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
      margin-bottom: -1px;
      .ui-tabs-bar-slide-group-content {
        display: flex;
        flex: 1 0 auto;
        position: relative;
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        white-space: nowrap;
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
          max-width: 360px;
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
