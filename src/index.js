import Vue from 'vue';
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

import Toast from './Toast/toast';

import plugin from './Toast/plugin';
import Tabs from './Tabs/tabs';
import TabsHeader from './Tabs/tabs-header';
import TabsItem from './Tabs/tabs-item';
import TabsBody from './Tabs/tabs-body';
import TabsPane from './Tabs/tabs-pane';
import Popover from './Popover/popover';


import DB from '../test/fixtures/db';

import Nav from './NavMenu/nav';
import NavItem from './NavMenu/nav-item';
import SubNav from './NavMenu/sub-nav';
import Pager from './Pagination/Pager';
import Table from './Table/table';
import Uploader from './Uploader/uploader';
import Sticky from './Sticky/index';

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
];

const install = function() {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
install();
export default {
  Button,
  Icon,
  ButtonGroup,
  Input,
  Col,
  Row,
  Toast,
  plugin,
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
  CascaderItem
}
