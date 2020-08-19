<template>
  <div>
    전역 팝업 (Vue.component사용)
    <alert></alert>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$alert('aaaaaaaaa');
  },
};
</script>
