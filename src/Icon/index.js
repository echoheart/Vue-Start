import Icon from './icon';
Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
  console.log('IconInstall')
};

export default Icon;
