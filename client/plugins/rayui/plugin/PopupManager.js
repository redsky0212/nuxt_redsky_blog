// 팝업매니져 참고 소스
export default function install(Vue, opts = {}) {
  let nextKey = 0;
  const popupList = [];
  let anchorVm = null;

  const popupManager = {
    open(component, params) {
      const key = `_popup_key_${nextKey++}`;
      popupList.push({ component, params, key, componentInstance: null });

      if (anchorVm) {
        anchorVm.$forceUpdate();
      }

      return { popup_key: key };
    },
    close(inst) {
      if (!inst) {
        return;
      }

      popupList.forEach((popup, index) => {
        if ((inst instanceof Vue && popup.componentInstance === inst) || inst.popup_key === popup.key) {
          popupList.splice(index, 1);
          if (anchorVm) {
            anchorVm.$forceUpdate();
          }
          return;
        }
      });
    },
  };

  Object.defineProperty(Vue.prototype, '$popupManager', {
    get() {
      return popupManager;
    },
  });

  Vue.component('popup-anchor', {
    name: 'PopupAnchor',
    created() {
      anchorVm = this;
    },
    render(createElement) {
      const children = popupList.map((popup) => {
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
      return createElement('div', children);
    },
  });
}
