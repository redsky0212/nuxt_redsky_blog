// 별칭은 actions, getters와 같이 파일명과 같으니까 충돌 생기는거 같음.
// *를 사용해야 export, export default를 모두 가져옴.

import util from '@/components/rayui/utils';
import { createNamespacedHelpers } from 'vuex';
import * as states from './state';
import * as getter from './getters';
import * as mutation from './mutations';
import * as action from './actions';

// 각 업무명 namespace 설정.
const NAMESPACE = 'testBiz';

const { mapActions, mapGetters, mapMutations, mapState } = createNamespacedHelpers(NAMESPACE);

// function createGetters() {
//   let arr = [];

//   Object.keys(getter).forEach((k) => {
//     if (util.isString(getter[k])) {
//       arr.push(getter[k]);
//     }
//   });
//   return arr;
// }
// console.log(createGetters());
export { mapActions, mapGetters, mapMutations, mapState };
export default {
  namespaced: true,
  states,
  getter,
  mutation,
  action,
};
