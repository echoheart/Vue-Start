import Button from './Button/index';
import ButtonGroup from './ButtonGroup/index';

import Carousel from './Carousel/index';
import CarouselItem from './CarouselItem/index';

import Cascader from './Cascader/index';
import CascaderItem from './CascaderItem/index';

import Collapse from './Collapse/index';
import CollapseItem from './CollapseItem/index';

import Col from './Col/index';
import Row from './Row/index';

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

import Tabs from './Tabs/index';
import TabsHeader from './TabsHeader/index';
import TabsItem from './TabsItem/index';
import TabsBody from './TabsBody/index';
import TabsPane from './TabsPane/index';

import DB from '../test/fixtures/db';
// import plugin from './Toast/plugin';
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
  Tabs,
  TabsBody,
  TabsHeader,
  TabsItem,
  TabsPane,
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
  Tabs,
  TabsBody,
  TabsHeader,
  TabsItem,
  TabsPane,
  CarouselItem,
  CollapseItem,
  Popover,
  Collapse,
  Carousel,
  Cascader,
  DB,
  CascaderItem,
}
