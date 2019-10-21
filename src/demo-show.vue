<template>
  <div>
    <div style="height: 300px; border: 1px solid red; margin-top: 100px">
      我是滚动测试div
    </div>
    <Sticky style="border: 1px solid green; margin-top: 100px; height: 100px;">
      我是sticky
    </Sticky>
    <div style="height: 500px; border: 1px solid red; margin-top: 100px">
      我是滚动测试div
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Button from './Button/button';
  import Icon from './Icon/icon';
  import buttonGroup from './Button/button-group';
  import Input from './Input/input';
  import Col from './Grid/col';
  import Row from './Grid/row';
  import Toast from './Toast/toast';
  import plugin from './Toast/plugin';
  import Tabs from './Tabs/tabs';
  import TabsHeader from './Tabs/tabs-header';
  import TabsItem from './Tabs/tabs-item';
  import TabsBody from './Tabs/tabs-body';
  import TabsPane from './Tabs/tabs-pane';
  import Popover from './Popover/popover';
  import Cascader from './Cascader/cascader';
  import Collapse from './Collapse/collapse';
  import CollapseItem from './Collapse/collapse-item';
  import DB from '../test/fixtures/db';

  import Carousel from './Carousel/carousel';
  import CarouselItem from './Carousel/carousel-item';

  import Nav from './NavMenu/nav';
  import NavItem from './NavMenu/nav-item';
  import SubNav from './NavMenu/sub-nav';

  import Pager from './Pagination/Pager';

  import Table from './Table/table';

  import Uploader from './Uploader/uploader';

  import Sticky from './Sticky/sticky';

  function ajax(parentId = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = DB.filter((item) => {
          return item.parent_id === parentId;
        });
        result.forEach((node) => {
          if (DB.filter((item) => {
            return item.parent_id === node.id;
          }).length > 0) {
            node.isLeaf = false;
          } else {
            node.isLeaf = true;
          }
        });
        resolve(result);
      }, 300);
    });
  }


  Vue.use(plugin);
  export default {
    name: "demo",
    components: {
      "g-button": Button,
      "g-popover": Popover,
      "g-toast": Toast,
      "g-tabs": Tabs,
      "g-tabs-header": TabsHeader,
      "g-tabs-item": TabsItem,
      "g-tabs-body": TabsBody,
      "g-tabs-pane": TabsPane,
      "g-cascader": Cascader,
      "g-collapse": Collapse,
      "g-collapse-item": CollapseItem,
      "g-carousel": Carousel,
      "g-carousel-item": CarouselItem,
      "g-nav": Nav,
      "g-nav-item": NavItem,
      "g-sub-nav": SubNav,
      Pager,
      Table,
      Button,
      Uploader,
      Sticky
    },

    mounted() {

    },
    created() {

    },
    data: function () {
      return {
        fileList: [],
        selectedItems: [],
        loading: false,
        orderBy: {
          name: 'asc',
          score: true
        },
        dataSource: [
          {
            id: 1,
            name: '小红',
            score: 99,
            description: '这是描述'
          },
          {
            id: 2,
            name: '小明',
            score: 100,
            description: '这是描述1'
          },
          {
            id: 3,
            name: '小红1',
            score: 99,
            description: '这是描述2'
          },
          {
            id: 4,
            name: '小明1',
            score: 100,
            description: '这是描述3'
          },
          {
            id: 5,
            name: '小红2',
            score: 99
          },
          {
            id: 6,
            name: '小明2',
            score: 100
          },
          {
            id: 7,
            name: '小红3',
            score: 99
          },
          {
            id: 8,
            name: '小明3',
            score: 100
          },
          {
            id: 9,
            name: '小红',
            score: 99
          },
          {
            id: 10,
            name: '小明',
            score: 100
          },
          {
            id: 11,
            name: '小红1',
            score: 99
          },
          {
            id: 12,
            name: '小明1',
            score: 100
          },
          {
            id: 13,
            name: '小红2',
            score: 99
          },
          {
            id: 14,
            name: '小明2',
            score: 100
          },
          {
            id: 15,
            name: '小红3',
            score: 99
          },
          {
            id: 16,
            name: '小明3',
            score: 100
          },
          {
            id: 17,
            name: '小红2',
            score: 99
          },
          {
            id: 18,
            name: '小明2',
            score: 100
          },
          {
            id: 19,
            name: '小红3',
            score: 99
          },
          {
            id: 20,
            name: '小明3',
            score: 100
          },
        ],
        columns: [
          {
            text: '姓名',
            field: 'name',
            width: 100
          },
          {
            text: '分数',
            field: 'score',
            width: 100
          }
        ]
      }
    },
    methods: {
      // onChangeItem(params) {
      //     let { selected, index, item } = params;
      //     console.log(selected, index, item);
      //     const _index = this.selected.indexOf(item);
      //     if (selected) {
      //         this.selected.push(item);
      //     } else {
      //         this.selected.splice(_index, 1);
      //     }
      // }
      parseResponse(res) {
        const object = JSON.parse(res);
        const id = object.filename;
        const url = `http://127.0.0.1:3000/preview/${id}`;
        console.log(url);
        return url;
      },
      edit(item) {
        alert(`你需要自定义编辑这一项是${item.name}`)
      },
      view(item) {
        alert(`自定义查看这一项是${item.name}`)
      },
      onChangeOrderBy(obj) {
        console.log('触发更新');
        const {copy, key} = obj;
        this.loading = true;
        this.orderBy = copy;
        console.log(copy[key]);
        if (copy[key] === 'asc') {

          setTimeout(() => {
            this.dataSource = JSON.parse(JSON.stringify(this.dataSource)).sort((a, b) => {
              return a.score - b.score;
            })
            this.loading = false;
          }, 1000);
        } else if (copy[key] === 'desc') {
          setTimeout(() => {
            this.dataSource = JSON.parse(JSON.stringify(this.dataSource)).sort((a, b) => {
              return b.score - a.score;
            })
            this.loading = false;
          }, 1000);
        } else {
          this.loading = false;
        }
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 20px;
  }

  :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: #fff;
    --button-active-bg: #eee;
    --button-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-colro-hover: #666;
  }

  .box {
    width: 100%;
    height: 300px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    /*border: 1px solid red;*/
  }
</style>
