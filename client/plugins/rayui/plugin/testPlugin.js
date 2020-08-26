export default (context, inject) => {
  console.log(context);
  inject('testPlugin', (string) => {
    return console.log('testPlugin ----> ', string);
  });
};
