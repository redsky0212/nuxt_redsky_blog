<template>
  <div class="container">
    <header>
      <h1 class="title"> {{ title }} </h1>
      <nav>
        <nuxt-link to="/services"> 서비스 이름 </nuxt-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return  { 
      title: '프로젝트 메인 타이틀' 
    }
  }
}
</script>