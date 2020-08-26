export default (context, inject) => {
  console.log(context);
  inject('testPlugin', () => {});
};
