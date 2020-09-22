<template>
  <div class="ui-lists-container">
    <div class="ui-lists" :id="listsid">
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
    listsid: {
      type: String,
      default: '',
    },
    listdata: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {},
    },
  },
  data() {
    return {
      key: 0,
      listsKey: '',
      arrList: [],
      g_listsStatusValue: window.$nuxt.$rayui.listsStatusValue,
    };
  },
  beforeMount() {
    // Lists 초기 생성시 초기화
    this.init();
  },
  beforeDestroy() {
    this.removeListsKey();
  },
  mounted() {
    // 기본값 셋팅
    this.setDefaultValue();
  },
  methods: {
    init() {
      // lists 의 key생성.
      this.setSlot();
      this.createListsKey();
    },
    setSlot() {
      const s = this.$slots.default;
      this.arrList = [];
      s.forEach((element) => {
        if (RegExp('ui-lists-item', 'g').test(element.tag)) {
          element.data.attrs = {
            listsIdx: this.arrList.length,
            listsKey: this.g_listsStatusValue.key,
            listsId: this.listsid,
          };
          this.arrList.push(element);
        }
      });
    },
    createListsKey() {
      this.key = this.g_listsStatusValue.key;
      this.listsKey = `ui_lists_key_${this.g_listsStatusValue.key++}`;
      this.g_listsStatusValue.list.push({
        listsKey: this.listsKey,
        listsId: this.listsid,
        selectedIndexs: this.selectedIndexs,
        selectedValues: this.selectedValues,
        contentList: this.arrList,
      });
    },
    removeListsKey() {
      this.g_listsStatusValue.list.some((item, index) => {
        if (this.listsKey === this.g_listsStatusValue.list[index].listsKey) {
          this.g_listsStatusValue.list.splice(index, 1);
          this.g_listsStatusValue.key--;
        }
      });
    },
    setDefaultValue() {
      // TODO: checkbox 등 관리 안하는 방향으로...
      // 로딩시 기본값 셋팅
      if (this.listdata && this.listdata.type === 'checkbox' && this.listdata.content) {
        const selectedIndexs = [];
        const selectedValues = [];
        this.listdata.content.forEach((item, index) => {
          if (item.checked === true) {
            selectedValues.push(item.value);
            selectedIndexs.push(index);
          }
        });
        window.$nuxt.$rayui.listsStatusValue.list.forEach((item, index) => {
          if (item.listsId === this.listsid) {
            item.selectedValues = selectedValues;
            item.selectedIndexs = selectedIndexs;
          }
        });
      }
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
