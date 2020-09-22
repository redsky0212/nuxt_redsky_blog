<template>
  <div class="ui-lists-item" :id="contentId" role="item" @click="onClick">
    <slot :contentId="contentId"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listsIndex: this.$attrs.listsIdx,
      listsKey: this.$attrs.listsKey,
    };
  },
  computed: {
    contentId: function () {
      return `ui-lists-content-${this.listsKey}-${this.listsIndex}`;
    },
    // TODO: aria-expanded 작업 처리 해야함
  },
  methods: {
    onClick(event) {
      // TODO: checkbox 등 관리 안하는 방향으로...
      const listsid = event.currentTarget.getAttribute('listsid');
      if (!listsid || !document.getElementById(listsid)) {
        return;
      }
      const selectedIndexs = [];
      const selectedValues = [];
      const cbxList = document.getElementById(listsid).querySelectorAll('input[role="checkbox"]');
      if (cbxList.length === 0) {
        return;
      }
      cbxList.forEach((item, index) => {
        if (item.checked === true) {
          selectedValues.push(item.getAttribute('item-value'));
          selectedIndexs.push(index);
        }
      });
      window.$nuxt.$rayui.listsStatusValue.list.forEach((item, index) => {
        if (item.listsId === listsid) {
          item.selectedValues = selectedValues;
          item.selectedIndexs = selectedIndexs;
        }
      });
    },
  },
};
</script>
