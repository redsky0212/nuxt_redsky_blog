<template>
  <div class="item-container" @click="onClickContainer">
    <div class="item-checkbox"><input type="checkbox" role="checkbox" :item-title="item.title" :item-value="item.value" :checked="item.checked" @click.stop="onClickCheckbox" /></div>
    <div class="item-title">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      //
    };
  },
  mounted() {
    //
  },
  methods: {
    onClickCheckbox(event) {
      var target = event.currentTarget;
      if (!target) {
        return;
      }
      var checked = target.checked;
      var title = target.getAttribute('item-title');
      var value = target.getAttribute('item-value');
      this.$emit('onClickCheckbox', title, value, checked);
    },
    onClickContainer(event) {
      var target = event.currentTarget;
      if (!target) {
        return;
      }
      var cbxObj = target.querySelector('.item-checkbox').children[0];
      cbxObj.click();
    },
  },
};
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: row;
  .item-checkbox {
    flex-shrink: 0;
    width: 50px;
    text-align: center;
  }
  .item-title {
    flex-grow: 1;
  }
}
</style>
