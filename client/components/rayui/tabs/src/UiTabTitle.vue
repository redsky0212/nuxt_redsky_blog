<template>
  <a ref="tabRef" :href="`#${tabpanelId}`" :id="tabId" :aria-selected="isSelected" role="tab" :aria-controls="tabpanelId" class="ui-tab" :class="changeClass" :idx="idx" @click.prevent="onClick">
    {{ tabData }}
  </a>
</template>
<script>
export default {
  props: ['fixedTabs', 'tabsIdx', 'tabKey', 'tabData', 'idx'],
  data() {
    return {
      tabId: '',
      tabpanelId: '',
      selectedIndex: this.$rayui.tabsStatusValue.list[this.tabsIdx].selectedIndex,
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
      if (this.$rayui.tabsStatusValue.list[this.tabsIdx] !== undefined) {
        if (String(this.idx) === this.$rayui.tabsStatusValue.list[this.tabsIdx].selectedIndex) {
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
    this.tabId = `tab-${this.tabKey + this.idx}`;
    this.tabpanelId = `tabpanel-${this.tabKey + this.idx}`;
    this.currentSelectWidth();
    this.observeSize();
  },
  methods: {
    currentSelectWidth() {
      if (this.$rayui.tabsStatusValue.list[this.tabsIdx] !== undefined) {
        if (String(this.index) === this.$rayui.tabsStatusValue.list[this.tabsIdx].selectedIndex) {
          this.$rayui.tabsStatusValue.list[this.tabsIdx].tabWidth = this.$refs.tabRef.clientWidth;
          this.$rayui.tabsStatusValue.list[this.tabsIdx].offsetLeft = this.$refs.tabRef.offsetLeft;
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
      this.$rayui.tabsStatusValue.list[this.tabsIdx].selectedIndex = idx;
      this.selectedIndex = idx;
      this.$nextTick(() => {
        this.currentSelectWidth();
      });
    },
  },
};
</script>
