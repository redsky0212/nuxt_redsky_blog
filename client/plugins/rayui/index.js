import Vue from 'vue';
import Alert from '@/components/rayui/alert/index.js';
import PopupManager from './plugin/PopupManager';

const components = [Alert];

const install = (Vue, opts = {}) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$rayui = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000,
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
