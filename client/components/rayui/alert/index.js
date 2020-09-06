import Vue from 'vue';
import popUi from '@/components/rayui/alert/src/ui.vue';

export class Alert {
  constructor(statusValue = {}) {
    this._statusValue = statusValue;
  }

  notify(param) {
    const data = param;

    return new Promise((resolve) => {
      data.resolve = resolve;
    }).then((result) => {
      return result;
    });
  }

  open(component, params) {
    // 키 생성 (open시에만 일시적으로 생성해서 사용하므로 open함수 내에서 변수로 만들어 사용)
    const key = `popupManager_key_${this._statusValue.key++}`;
    // 열고자 하는 컴포넌트팝업을 리스트에 추가한다.
    this._statusValue.list.push({
      component,
      params,
      key,
      componentInstance: null,
      resolve: null,
    });

    if (this._statusValue.popupContainerVm) {
      this._statusValue.popupContainerVm.$forceUpdate(); // 팝업컨테이너가 새롭게 render하도록 한다.
    }
    return this.notify(this._statusValue);
  }

  close(inst) {
    if (!inst) {
      return;
    }

    this._statusValue.list.some((item, index) => {
      if ((inst instanceof Vue && this._statusValue.list[index].componentInstance === inst) || inst.key === this._statusValue.list[index].key) {
        this._statusValue.list.splice(index, 1);
        if (this._statusValue.popupContainerVm) {
          this._statusValue.popupContainerVm.$forceUpdate();
        }
        this._statusValue.resolve(this._statusValue);
      }
    });
  }
}

export default (message, option = {}) => {
  const _inst = new Alert(window.$nuxt.$rayui.popupStatusValue);
  if (!message) {
    return _inst;
  }
  if (option.close) {
    return _inst.close(option.close);
  } else {
    return _inst.open(popUi, { msg: message, title: option.title });
  }
};
