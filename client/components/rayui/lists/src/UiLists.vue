<template>
  <div class="ui-lists-container">
    <div class="ui-lists">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * 최초 선택 되어져야 할 List index값 설정한다
     * @type {String}
     */
    // selectedIndex: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      // key: 0,
      // listKey: '',
      // g_listsStatusValue: window.$nuxt.$rayui.listsStatusValue,
    };
  },
  beforeMount() {
    // Lists 초기 생성시 초기화
    this.init();
  },
  beforeDestroy() {
    this.removeListsKey();
  },
  methods: {
    init() {
      // list 의 key생성.
      this.setSlot();
      this.createListsKey();
    },
    setSlot() {
      // const s = this.$slots.default;
      // const arrList = [];
      // s.forEach((element) => {
      //   if (RegExp('ui-list', 'g').test(element.tag)) {
      //     element.data.attrs = {
      //       listIdx: arrList.length,
      //       listsKey: this.g_listsStatusValue.key,
      //     };
      //     arrList.push(element);
      //   }
      // });
    },
    createListsKey() {
      // this.key = this.g_listsStatusValue.key;
      // this.listKey = `ui_lists_key_${this.g_listsStatusValue.key++}`;
      // this.g_listsStatusValue.list.push({
      //   listKey: this.listKey,
      //   selectedIndex: this.selectedIndex,
      // });
    },
    removeListsKey() {
      // this.g_listsStatusValue.list.some((item, index) => {
      //   if (this.listKey === this.g_listsStatusValue.list[index].listKey) {
      //     this.g_listsStatusValue.list.splice(index, 1);
      //     this.g_listsStatusValue.key--;
      //   }
      // });
    },
  },
};
</script>
<style lang="scss" scoped>
.ui-lists-container {
  .ui-lists {
    display: flex;
    flex-flow: column wrap;
    /deep/.ui-lists-title {
      // padding: 3px 3px;
    }
    /deep/.ui-lists-box {
      .ui-lists-item {
        // padding: 3px 3px;
      }
    }
  }
}
</style>
