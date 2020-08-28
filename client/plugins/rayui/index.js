import Vue from 'vue';
import alert from '@/components/rayui/alert/index.js';

export default (context, inject) => {
  const popupStatusValue = {
    key: 0, // 팝업 생성시 고유의 키값을 생성하기 위한 일련번호
    list: [], // 생성된 팝업 컴포넌트들을 저장하는 리스트
    popupContainerVm: null, // 팝업이 열릴 컨테이너 div의 인스턴스
  };

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

  inject('rayui', {
    popupStatusValue,
    alert,
  });
};

/*
const components = [Alert];

const install = (Vue, opts = {}) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$rayui = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000,
    alert: Alert,
  };

  Vue.prototype.$alert = (string) => {
    window.alert(string);
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

Vue.use(install);
Vue.use(PopupManager);

export default {
  version: '1.0.0',
  install,
  Alert,
};
*/
