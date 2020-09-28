<template>
  <!-- <div id="sidebar" class="sidebar responsive ace-save-state sidebar-fixed"> -->
  <div id="sidebar" class="sidebar responsive ace-save-state">
    <div class="nav-wrap-up pos-rel">
      <div class="nav-wrap" style="max-height: 613px; overflow-y: auto;">
        <div style="position: relative; top: 0px; transition-property: top; transition-duration: 0.15s;">
          <left-menu :menu-list="menuList" />
        </div>
      </div>
    </div>

    <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
      <i id="sidebar-toggle-icon" class="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/sideBar/LeftMenu.vue';

export default {
  components: {
    LeftMenu,
  },
  data() {
    return {
      routes: this.$nuxt.$router.options.routes,
      menuList: [],
    };
  },
  computed: {
    name() {
      return this.$store.state.sideBar.sideName;
    },
  },
  mounted() {
    console.log(this.$nuxt.$router.options.routes);
    this.createMenuList();
  },
  methods: {
    createMenuList() {
      const obj = {};
      const depth = 1;
      this.routes.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
      // this.routes.sort((a, b) => {
      //   return Number(a.name.match(/(\d+)/g)) - Number(b.name.match(/(\d+)/g));
      // });

      this.routes.forEach((item, index) => {
        const itemArr = item.path.split('/');
        itemArr.shift();
        this.createMenuItem(obj, this.menuList, item, itemArr, depth, index);
      });
    },
    createMenuItem(obj, menu, item, itemArr, depth, index) {
      if (itemArr.length === depth) {
        if (itemArr[depth - 1] === '') {
          obj[itemArr[depth - 1]] = {
            name: 'Home',
            iconNm: 'fab fa-codepen',
            link: '/',
            sub: {},
          };
          menu.unshift({
            name: 'Home',
            iconNm: 'fab fa-codepen',
            link: '/',
            sub: [],
          });
        } else {
          obj[itemArr[depth - 1]] = {
            name: itemArr[depth - 1],
            iconNm: 'fas fa-folder-open',
            link: item.path,
            sub: {},
          };
          menu.push({
            name: itemArr[depth - 1],
            iconNm: 'fas fa-folder-open',
            link: item.path,
            sub: [],
          });
        }
      } else {
        let selectIdx = null;
        if (!obj[itemArr[depth - 1]]) {
          obj[itemArr[depth - 1]] = {
            name: itemArr[depth - 1],
            iconNm: 'fas fa-folder-open',
            link: '',
            sub: {},
          };
          menu.push({
            name: itemArr[depth - 1],
            iconNm: 'fas fa-folder-open',
            link: '',
            sub: [],
          });
        }
        menu.forEach((menuItem, idx) => {
          if (menuItem.name === itemArr[depth - 1]) {
            selectIdx = idx;
          }
        });
        this.createMenuItem(obj[itemArr[depth - 1]].sub, menu[selectIdx].sub, item, itemArr, depth + 1, index);
      }
    },
  },
};
</script>
