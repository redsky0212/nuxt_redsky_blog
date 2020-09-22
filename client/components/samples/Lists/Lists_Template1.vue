<template>
  <div class="item-container2">
    <div class="item-image">
      <img :src="item.url" />
    </div>
    <div class="item-container2-sub">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-subtitle">{{ item.subtitle }}</div>
    </div>
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
    //
  },
};
</script>

<style lang="scss" scoped>
.item-container2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  .item-image {
    flex-shrink: 0;
    width: 100px;
    text-align: center;
  }
  .item-container2-sub {
    flex-grow: 1;
    .item-title {
      font-size: 14px;
      font-weight: bold;
    }
    .item-subtitle {
      color: gray;
    }
  }
}
</style>
