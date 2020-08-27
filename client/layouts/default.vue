<template>
  <div>
    <header-bar />
    <div class="main-container ace-save-state" id="main-container">
      <side-bar />
      <div class="main-content">
        <div class="main-content-inner">
          <bread-crumbs />
          <div class="page-content">
            <nuxt />
          </div>
        </div>
      </div>
      <footer-bar />
    </div>
    <popup-container></popup-container>
  </div>
</template>

<script>
import HeaderBar from './header/HeaderBar.vue';
import SideBar from './side/SideBar.vue';
import BreadCrumbs from './etc/BreadCrumbs.vue';
import FooterBar from './footer/FooterBar.vue';

export default {
  components: {
    HeaderBar,
    SideBar,
    BreadCrumbs,
    FooterBar,
  },
};
</script>
