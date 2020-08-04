<template>
  <div class="container">
    <header>
      <h1 class="title"> {{ title }} </h1>
      <nav>
        <nuxt-link to="/"> 홈 </nuxt-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return  { 
      title: '서비스 페이지 타이틀'
    }
  }
}
</script>