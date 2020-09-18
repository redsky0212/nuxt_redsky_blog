<template>
  <a ref="tabRef" :href="`#${tabpanelId}`" :id="tabId" :aria-selected="isSelected" role="tab" :aria-controls="tabpanelId" class="ui-tab" :class="changeClass" :idx="index" @click.prevent="onClick">
    <slot></slot>
  </a>
</template>
<script>
export default {
  data() {
    return {
      tabId: '',
      tabpanelId: '',
      fixedTabs: this.$attrs.fixedTabs,
      index: this.$attrs.tabIdx,
      tabKey: this.$parent.tabKey,
      selectedIndex: window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].selectedIndex,
    };
  },
  computed: {
    changeClass: function () {
      const obj = {};
      // fixedTabs 선택여부에 따른 flex값 바꾸기
      if (this.fixedTabs) {
        obj['ui-tab-fixed'] = true;
      }

      // active여부 선택
      if (window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx] !== undefined) {
        if (String(this.index) === window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].selectedIndex) {
          obj['ui-tab-active'] = true;
          return obj;
        } else {
          obj['ui-tab-active'] = false;
        }
      }

      return obj;
    },
    isSelected: function () {
      if (this.changeClass['ui-tab-active']) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.tabId = `tab-${this.$parent.tabKey + this.$attrs.tabIdx}`;
    this.tabpanelId = `tabpanel-${this.$parent.tabKey + this.$attrs.tabIdx}`;
    this.currentSelectWidth();
    this.observeSize();
  },
  methods: {
    currentSelectWidth() {
      if (window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx] !== undefined) {
        if (String(this.index) === window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].selectedIndex) {
          window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].tabWidth = this.$refs.tabRef.clientWidth;
          window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].offsetLeft = this.$refs.tabRef.offsetLeft;
        }
      }
    },
    observeSize() {
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
    },
    onClick(event) {
      const idx = event.currentTarget.getAttribute('idx');
      window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].selectedIndex = idx;
      this.selectedIndex = idx;
      this.$nextTick(() => {
        this.currentSelectWidth();
      });
    },
  },
};
</script>
