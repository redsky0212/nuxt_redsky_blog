<template>
  <a ref="tabRef" :href="`#${tabpanelId}`" :id="tabId" :aria-selected="isSelected" role="tab" :aria-controls="tabpanelId" class="ui-tab" :class="changeActive" :idx="index" @click.prevent="onClick">
    <slot></slot>
  </a>
</template>
<script>
export default {
  data() {
    return {
      tabId: '',
      tabpanelId: '',
      index: this.$attrs.tabIdx,
      tabKey: this.$parent.tabKey,
      selectedIndex: window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].selectedIndex,
    };
  },
  computed: {
    changeActive: function () {
      const obj = {};
      if (String(this.index) === window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].selectedIndex) {
        obj['ui-tab-active'] = true;
        return obj;
      } else {
        obj['ui-tab-active'] = false;
      }
      return obj;
    },
    isSelected: function () {
      if (this.changeActive['ui-tab-active']) {
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
  },
  methods: {
    currentSelectWidth() {
      if (String(this.index) === window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].selectedIndex) {
        window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].tabWidth = this.$refs.tabRef.clientWidth;
        window.$nuxt.$rayui.tabsStatusValue.list[this.$attrs.tabsIdx].offsetLeft = this.$refs.tabRef.offsetLeft;
      }
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
