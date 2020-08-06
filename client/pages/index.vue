<template>
  <div class="container">
    <header>
      <h1 class="title">
        {{ title }}
      </h1>
      <h2>{{ test }}</h2>
      <nav>
        <nuxt-link to="/services">서비스 이름</nuxt-link>
      </nav>
      <img
        src="@/assets/images/common/nuxtConfig.png"
        alt="nuxt config테스트이미지"
        width="60%"
      />
    </header>
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '프로젝트 메인 타이틀',
      test: 'vi테스트',
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  h2 {
    color: #ff0000;
  }
}
</style>
