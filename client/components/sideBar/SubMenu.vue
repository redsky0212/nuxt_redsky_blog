<template>
  <ul class="submenu">
    <!-- nav-show, nav-hide, display:none, display:block; -->
    <li v-for="(item, index) in subData" :key="index">
      <!-- open, active -->

      <a v-if="item.link === ''" href="#" @click="onMenuClick">
        <!-- dropdown-toggle -->
        <i class="menu-icon fa fa-caret-right"></i>
        {{ item.name }}
        <b v-if="item.sub.length > 0" class="arrow fa fa-angle-down"></b>
      </a>
      <router-link v-else :to="item.link" @click.native="onMenuClick">
        <i class="menu-icon fa fa-caret-right"></i>
        {{ item.name }}
        <b v-if="item.sub.length > 0" class="arrow fa fa-angle-down"></b>
      </router-link>

      <b class="arrow"></b>

      <sub-menu
        v-if="item.sub.length > 0"
        :sub-data="item.sub"
        @rcvMenuClick="onMenuClick"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'sub-menu',
  props: ['subData'],
  methods: {
    onMenuClick(event) {
      this.$emit('rcvMenuClick', event)
    },
  },
}
</script>

<style></style>
