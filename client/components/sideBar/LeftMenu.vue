<template>
  <ul class="nav nav-list">
    <li class="" v-for="(gnbItem, index) in menuList" :key="index">
      <a v-if="gnbItem.link === ''" href="javascript:void(0)" :class="{ 'dropdown-toggle': gnbItem.sub.length > 0 }" @click="onMenuClick">
        <i :class="['menu-icon', gnbItem.iconNm]"></i>
        <span class="menu-text">{{ gnbItem.name }}</span>
        <b v-if="gnbItem.sub.length > 0" class="arrow fa fa-angle-down"></b>
      </a>
      <router-link v-else :to="gnbItem.link" :class="{ 'dropdown-toggle': gnbItem.sub.length > 0 }" @click.native="onMenuClick">
        <i :class="['menu-icon', gnbItem.iconNm]"></i>
        <span class="menu-text">{{ gnbItem.name }}</span>
        <b v-if="gnbItem.sub.length > 0" class="arrow fa fa-angle-down"></b>
      </router-link>

      <b class="arrow"></b>

      <sub-menu v-if="gnbItem.sub.length > 0" :sub-data="gnbItem.sub" @rcvMenuClick="onMenuClick" />
    </li>
  </ul>
</template>

<script>
import SubMenu from '@/components/sideBar/SubMenu.vue';

export default {
  components: {
    SubMenu,
  },
  props: ['menuList'],
  data() {
    return {
      routes: this.$nuxt.$router.options.routes,
    };
  },
  computed: {
    name() {
      return this.$store.state.sideBar.sideName;
    },
  },
  mounted() {
    console.log(this.$nuxt.$router.options.routes);
    // element closest polyfill
    if (window.Element && !Element.prototype.closest) {
      Element.prototype.closest = function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i,
          el = this;
        do {
          i = matches.length;
          // while (--i >= 0 && matches.item(i) !== el) {}
        } while (i < 0 && (el = el.parentElement));
        return el;
      };
    }
  },
  methods: {
    onMenuClick(event) {
      // TODO: 수정작업필요.
      const target = event.currentTarget;
      const parent = target.parentElement;
      // 우선 선택 되어있는 메뉴를 모두 선택삭제.
      const elem = document.querySelectorAll('.nav-list li.active');
      elem.forEach((element) => {
        element.classList.remove('active');
      });
      // 현재 선택한 메뉴 선택추가.
      parent.classList.add('active');
      // 메뉴의 최상단에 active넣기
      target.closest('.nav-list > li').classList.add('active');

      // const target: HTMLElement = event.currentTarget as HTMLElement;
      // const parent: HTMLElement = target.parentElement as HTMLElement;
      const ulElem = parent.querySelector('ul.submenu');
      if (parent.nodeName === 'LI' && ulElem) {
        if (parent.className === 'open' || parent.className === 'open active') {
          parent.className = '';
          ulElem.classList.remove('nav-show');
          ulElem.className += ' nav-hide';
          ulElem.style.display = 'none';
          ulElem.style.height = '0';
          ulElem.style.maxHeight = '0';
        } else {
          parent.className = 'open';
          ulElem.classList.remove('nav-hide');
          ulElem.className += ' nav-show';
          ulElem.style.display = 'block';
          ulElem.style.height = 'auto';
          ulElem.style.maxHeight = '500px';
        }
        ulElem.style.transitionProperty = 'max-height';
        ulElem.style.transitionDuration = '1s';
        ulElem.style.transitionTimingFunction = 'ease-in';
      }
    },
    onChange() {
      this.$store.dispatch('sideBar/signUp');
    },
  },
};
</script>

<style></style>
