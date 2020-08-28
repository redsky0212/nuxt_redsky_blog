import Vue from 'vue';

export default {
  open(component, params) {
    const key = `popupManager_key_${window.$nuxt.$rayui.popupStatusValue.key++}`; // 키 생성
    // 열고자 하는 컴포넌트팝업을 리스트에 추가한다.
    window.$nuxt.$rayui.popupStatusValue.list.push({
      component,
      params,
      key,
      componentInstance: null,
    });

    if (window.$nuxt.$rayui.popupStatusValue.popupContainerVm) {
      window.$nuxt.$rayui.popupStatusValue.popupContainerVm.$forceUpdate(); // 팝업컨테이너가 새롭게 render하도록 한다.
    }

    return { key };
  },
  close(inst) {
    if (!inst) {
      return;
    }

    window.$nuxt.$rayui.popupStatusValue.list.some((item, index) => {
      if ((inst instanceof Vue && window.$nuxt.$rayui.popupStatusValue.list[index].componentInstance === inst) || inst.key === window.$nuxt.$rayui.popupStatusValue.list[index].key) {
        window.$nuxt.$rayui.popupStatusValue.list.splice(index, 1);
        if (window.$nuxt.$rayui.popupStatusValue.popupContainerVm) {
          window.$nuxt.$rayui.popupStatusValue.popupContainerVm.$forceUpdate();
        }
        return true;
      }
    });
  },
};
