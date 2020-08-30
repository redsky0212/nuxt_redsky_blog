import Vue from 'vue';
import alert from '@/components/rayui/alert/index.js';
import alert2 from '@/components/rayui/alert/indexClass.js';
import confirm from '@/components/rayui/confirm/index.js';

export default (context, inject) => {
  // 전역 alert관련 코드 (BEGIN) ===========================
  const popupStatusValue = {
    key: 0, // 팝업 생성시 고유의 키값을 생성하기 위한 일련번호
    list: [], // 생성된 팝업 컴포넌트들을 저장하는 리스트
    popupContainerVm: null, // 팝업이 열릴 컨테이너 div의 인스턴스
  };
  // alert, confirm, popup이 띄워질 container div 태그 만들기.
  Vue.component('popup-container', {
    name: 'PopupContainer',
    created() {
      popupStatusValue.popupContainerVm = this;
    },
    render(createElement) {
      const children = popupStatusValue.list.map((popup) => {
        return createElement(popup.component, {
          key: popup.key,
          props: popup.params ? popup.params : {},
          hook: {
            create(_, vnode) {
              popup.componentInstance = vnode.componentInstance;
            },
          },
        });
      });
      return createElement('div', { class: 'g-popup-container', style: 'z-index:9999999;' }, children);
    },
  });
  // 전역 alert관련 코드 (END) ==============================

  // $root, context 모두 플러그인 주입 방식
  inject('rayui', {
    popupStatusValue, // 전역팝업 상태값
    alert, // 전역 alert 컴포넌트 객체
    confirm, // 전역 confirm 컴포넌트 객체
  });
};
