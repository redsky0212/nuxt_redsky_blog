<template>
  <div class="breadcrumbs ace-save-state breadcrumbs-fixed" id="breadcrumbs">
    <ul class="breadcrumb">
      <li v-for="(item, index) in crumbs" :key="index" :class="{ active: index + 1 === crumbs.length }">
        <i v-if="index === 0" class="ace-icon fa fa-home home-icon"></i>
        <template v-if="index + 1 === crumbs.length">{{ item.text }}</template>
        <router-link v-else :to="item.to">{{ item.text }}</router-link>
      </li>
    </ul>
    <!-- /.breadcrumb -->
  </div>
</template>

<script>
export default {
  computed: {
    crumbs() {
      console.log('call' + this.$route.path);
      const pathArray = this.$route.path.split('/');
      pathArray.shift();

      const breadcrumbs = pathArray.reduce(
        (breadcrumbArray, path, idx) => {
          breadcrumbArray.push({
            path,
            to: breadcrumbArray[idx - 1] ? '/' + breadcrumbArray[idx - 1].path + '/' + path : '/' + path,
            text: path,
          });
          return breadcrumbArray;
        },
        [{ path: '/', to: '/', text: 'Home' }]
      );
      return breadcrumbs;
    },
  },
};
// import {Vue, Component} from 'vue-property-decorator';

// @Component({
//   computed: {
//     crumbs() {
//       window.console.log('call' + this.$route.path);
//       const pathArray = this.$route.path.split('/');
//       pathArray.shift();

//       const breadcrumbs = pathArray.reduce((breadcrumbArray: any, path, idx) => {
//         breadcrumbArray.push({
//           path,
//           to: breadcrumbArray[idx - 1]
//             ? ('/' + breadcrumbArray[idx - 1].path + '/' + path)
//             : ('/' + path),
//           text: path,
//         });
//         return breadcrumbArray;
//       }, [
//         {path: '/', to: '/', text: 'Home'},
//       ]);
//       return breadcrumbs;
//     },
//   },
// })
// export default class BreadCrumbs extends Vue {
// }
</script>

<style></style>
