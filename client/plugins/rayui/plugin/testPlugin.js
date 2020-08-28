import Vue from 'vue';

export default (context, inject) => {
  // console.log(context);
  const popupStatusValue = {
    key: 0, // 팝업 생성시 고유의 키값을 생성하기 위한 일련번호
    list: [], // 생성된 팝업 컴포넌트들을 저장하는 리스트
  };
  let popupContainerVm = null; // 팝업이 열릴 컨테이너 div의 인스턴스

  const popupManager = {
    open(component, params) {
      const key = `popupManager_key_${popupStatusValue.key++}`; // 키 생성
      // 열고자 하는 컴포넌트팝업을 리스트에 추가한다.
      popupStatusValue.list.push({
        component,
        params,
        key,
        componentInstance: null,
      });

      if (popupContainerVm) {
        popupContainerVm.$forceUpdate(); // 팝업컨테이너가 새롭게 render하도록 한다.
      }

      return { key };
    },
    close(inst) {
      if (!inst) {
        return;
      }

      popupStatusValue.list.some((item, index) => {
        if ((inst instanceof Vue && popupStatusValue.list[index].componentInstance === inst) || inst.key === popupStatusValue.list[index].key) {
          popupStatusValue.list.splice(index, 1);
          if (popupContainerVm) {
            popupContainerVm.$forceUpdate();
          }
          return true;
        }
      });
    },
  };

  // inject('PM', popupManager);

  Vue.component('popup-container', {
    name: 'PopupContainer',
    created() {
      popupContainerVm = this;
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

  return popupManager;
};
