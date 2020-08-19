import Alert from './src/ui.vue';

Alert.install = (Vue) => {
  Vue.component(Alert.name, Alert);
};

export default Alert;
