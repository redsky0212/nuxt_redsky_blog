<template>
  <div class="ui-accordion">
    <slot></slot>
  </div>
</template>
<script>
export default {
  beforeMounted() {
    const a = '';
  },
  methods: {
    init() {
      // tab, tabpanel 의 slot위치 조정.
      // this.setSlot();
    },
  },
};
</script>
