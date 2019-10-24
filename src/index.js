import Button from './Button/index';
import ButtonGroup from './ButtonGroup/index';

import Carousel from './Carousel/index';
import CarouselItem from './CarouselItem/index';

import Cascader from './Cascader/index';
import CascaderItem from './CascaderItem/index';

import Collapse from './Collapse/index';
import CollapseItem from './CollapseItem/index';

import Col from './Grid/Col/index';
import Row from './Grid/Row/index';

import Icon from './Icon/index';

import Input from './Input/index';

import Nav from './Nav/index';
import NavItem from './NavItem/index';
import SubNav from './SubNav/index';

import Pager from './Pagination/index';

import Popover from './Popover/index';

import Table from './Table/index';

import Toast from './Toast/index';

import Uploader from './Uploader/index';

import Sticky from './Sticky/index';

import Tab from './Tab/Tab/index';
import TabPane from './Tab/TabPane/index';

import DB from '../test/fixtures/db';
const components = [
  Button,
  Icon,
  ButtonGroup,
  Input,
  Col,
  Row,
  Toast,
  Table,
  Uploader,
  Sticky,
  Pager,
  SubNav,
  Nav,
  NavItem,
  Tab,
  TabPane,
  CarouselItem,
  CollapseItem,
  Popover,
  Collapse,
  Carousel,
  Cascader,
  Table
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$toast = Toast;
};
export default {
  install,
  Button,
  Icon,
  ButtonGroup,
  Input,
  Col,
  Row,
  Toast,
  Table,
  Uploader,
  Sticky,
  Pager,
  SubNav,
  Nav,
  NavItem,
  TabPane,
  CarouselItem,
  CollapseItem,
  Popover,
  Collapse,
  Carousel,
  Cascader,
  DB,
  CascaderItem,
}
