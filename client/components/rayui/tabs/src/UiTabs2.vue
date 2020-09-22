<template>
  <div class="ui-tabs" style="font-size: 1em !important;">
    <div class="ui-tabs-bar ui-tabs-bar-slide-group" role="tablist" style="background-color: #e0e5e8 !important; color: #42474e;">
      <div class="ui-tabs-bar-slide-group-prev">prev</div>
      <div class="ui-tabs-bar-slide-group-wrapper">
        <div :class="{ 'ui-tabs-bar-slide-group-content': true, 'ui-tabs-bar-slide-group-content-fixed': fixedTabs }">
          <div class="ui-tabs-bar-slide-wrapper" :style="changeSliderStyle" style="background-color: #39b689 !important; border: 0 solid #39b689; height: 3px; top: 0;">
            <div class="ui-tabs-bar-slider"></div>
          </div>
          <a
            ref="tabRef"
            v-for="(tab, index) in tabs"
            :key="index"
            :href="`#tabpanel-${tabKey}${index}`"
            :id="`tab-${tabKey}${index}`"
            :aria-selected="g_selectedIndex === index ? 'true' : 'false'"
            role="tab"
            :aria-controls="`tabpanel-${tabKey}${index}`"
            class="ui-tab"
            :class="{ 'ui-tab-fixed': fixedTabs, 'ui-tab-active': g_selectedIndex === index }"
            :idx="index"
            @click.prevent="onTabClick"
          >
            {{ tab.$attrs.title }}
          </a>
        </div>
      </div>
      <div class="ui-tabs-bar-slide-group-next">next</div>
    </div>
    <div class="ui-tabs-items">
      <div class="ui-tabs-items-container" style="padding: 1.25rem !important;">
        <slot></slot>
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
      tabs: [],
      key: 0,
      tabKey: '',
      g_tabsStatusValue: this.$rayui.tabsStatusValue,
      tabId: '',
    };
  },
  computed: {
    g_selectedIndex() {
      return Number(this.$rayui.tabsStatusValue.list[this.key].selectedIndex);
    },
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
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    // tabs 초기 생성시 초기화
    this.init();
    this.$nextTick(() => {
      this.currentSelectWidth();
      this.observeSize();

      this.createTabData();
      this.selectTab(this.$rayui.tabsStatusValue.list[this.key].selectedIndex);
    });
  },
  beforeDestroy() {
    this.removeTabsKey();
  },
  methods: {
    init() {
      this.createTabsKey();
      // this.changeSlot();
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
      this.tabKey = `ui_tabs_key_${this.g_tabsStatusValue.key++}`;
      this.g_tabsStatusValue.list.push({
        tabKey: this.tabKey,
        key: this.key,
        selectedIndex: this.selectedIndex,
        fixedTabs: this.fixedTabs,
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
    currentSelectWidth() {
      const selectIdx = this.$rayui.tabsStatusValue.list[this.key].selectedIndex;
      if (this.$rayui.tabsStatusValue.list[this.key] !== undefined && this.$refs.tabRef) {
        this.$rayui.tabsStatusValue.list[this.key].tabWidth = this.$refs.tabRef[selectIdx].clientWidth;
        this.$rayui.tabsStatusValue.list[this.key].offsetLeft = this.$refs.tabRef[selectIdx].offsetLeft;
      }
    },
    observeSize() {
      if (this.$refs.tabRef.length > 0) {
        this.$refs.tabRef.forEach((elem) => {
          const ro = new this.$rayui.ResizeObserver((entries) => {
            entries.some((entry) => {
              console.log(entry.target.clientWidth);
              if (entry.target.clientWidth > 0) {
                this.currentSelectWidth();
                ro.disconnect();
              }
            });
          });
          ro.observe(elem);
        });
      } else {
        const ro = new this.$rayui.ResizeObserver((entries) => {
          entries.some((entry) => {
            console.log(entry.target.clientWidth);
            if (entry.target.clientWidth > 0) {
              this.currentSelectWidth();
              ro.disconnect();
            }
          });
        });

        ro.observe(this.$refs.tabRef);
      }
    },
    createTabData() {
      const tabKey = window.$nuxt.$rayui.tabsStatusValue.list[this.key].tabKey;
      this.tabs.forEach((tab, index) => {
        tab.tabId = `tab-${tabKey + index}`;
        tab.tabpanelId = `tabpanel-${tabKey + index}`;
      });
    },
    selectTab(idx) {
      this.tabs.forEach((tab, index) => {
        tab.isActive = Number(idx) === index;
      });
    },
    onTabClick(event) {
      const idx = event.currentTarget.getAttribute('idx');
      window.$nuxt.$rayui.tabsStatusValue.list[this.key].selectedIndex = idx;
      this.$nextTick(() => {
        this.currentSelectWidth();
        this.selectTab(idx);
      });
    },
  },
};
</script>
