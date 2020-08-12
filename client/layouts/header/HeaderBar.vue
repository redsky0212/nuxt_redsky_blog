<template>
  <div id="navbar" class="navbar navbar-default navbar-fixed-top ace-save-state">
    <div class="navbar-container ace-save-state" id="navbar-container">
      <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
        <span class="sr-only">Toggle sidebar</span>

        <span class="icon-bar"></span>

        <span class="icon-bar"></span>

        <span class="icon-bar"></span>
      </button>

      <div class="navbar-header pull-left">
        <router-link to="/" class="navbar-brand">
          <small>
            <i class="fas fa-archive"></i>
            Redsky Library
          </small>
        </router-link>
      </div>

      <div class="nav-search" id="nav-search">
        <form class="form-search">
          <span class="input-icon">
            <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
            <i class="ace-icon fa fa-search nav-search-icon"></i>
          </span>
        </form>
      </div>
      <!-- /.nav-search -->
    </div>
    <!-- /.navbar-container -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-search {
  padding-top: 8px;
}
.nav-search-input {
  border: 0;
}
</style>
