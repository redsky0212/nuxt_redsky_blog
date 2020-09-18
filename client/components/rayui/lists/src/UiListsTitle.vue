<template>
  <div class="ui-lists-title">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // g_listsStatusValue: window.$nuxt.$rayui.listsStatusValue,
      // listIndex: this.$attrs.listIdx,
      // selectedIndex: window.$nuxt.$rayui.listsStatusValue.list[this.$attrs.listsIdx].selectedIndex,
    };
  },
  computed: {
    // headerId: function () {
    //   return `ui-list-header-${this.g_listsStatusValue.key}-${this.listIndex}`;
    // },
    // contentId: function () {
    //   return `ui-list-content-${this.g_listsStatusValue.key}-${this.listIndex}`;
    // },
    // TODO: aria-expanded 작업 처리 해야함
  },
  methods: {
    onClick(event) {
      // const idx = event.currentTarget.getAttribute('idx');
      // window.$nuxt.$rayui.listsStatusValue.list[this.$attrs.listsIdx].selectedIndex = idx;
      // this.selectedIndex = idx;
    },
  },
};
</script>
