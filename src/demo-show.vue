<template>
  <div class="demo-show">
    <div class="demo-show-item">
      <Icon name="pure-loading" v-on:click="this.onIconClick"></Icon>
      <Icon name="loading" v-on:click="this.onIconClick"></Icon>
      <Icon name="left" v-on:click="this.onIconClick"></Icon>
      <Icon name="right" v-on:click="this.onIconClick"></Icon>
    </div>
    <div class="demo-show-item">
      <Button v-on:click="onButtonClick" icon="left" :loading="false"></Button>
      <Button :loading="true"></Button>
      <Button icon="right" iconPosition="right"></Button>
    </div>
    <div class="demo-show-item">
      <Button-group>
        <Button>按钮</Button>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Button-group>
    </div>
    <div class="demo-show-item">
      <Button-group>
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Button-group>
    </div>
    <div class="demo-show-item">
      <PInput :value="inputValue" v-on:change="onInputChange"></PInput>
      <PInput :disabled="true"></PInput>
      <PInput :readonly="true"></PInput>
      <PInput error="密码太短"></PInput>
    </div>
    <div class="demo-show-item">
      <Button @click="onToastClick">Toast</Button>
    </div>

    <div class="demo-show-item">
      <PCol style="width: 100%;" class="row-bg">
        <PCol span="10">
          <div class="grid-content bg-purple"></div>
        </PCol>
        <PCol span="14">
          <div class="grid-content bg-purple-light"></div>
        </PCol>
      </PCol>
    </div>
    <div class="demo-show-item" style="justify-content: center;">
      <PCol style="width: 100%;" class="row-bg-gutter" gutter="20">
        <PCol span="6">
          <div class="grid-content bg-purple">1</div>
        </PCol>
        <PCol span="6">
          <div class="grid-content bg-purple-light">2</div>
        </PCol>
        <PCol span="6">
          <div class="grid-content bg-purple">3</div>
        </PCol>
        <PCol span="6">
          <div class="grid-content bg-purple-light">4</div>
        </PCol>
      </PCol>
    </div>
    <div class="demo-show-item">
      <PCol style="width: 100%;" class="row-bg">
        <PCol span="2">
          <div class="grid-content bg-purple"></div>
        </PCol>
        <PCol span="22">
          <div class="grid-content bg-purple-light"></div>
        </PCol>
      </PCol>
    </div>``

    <div class="demo-show-item">
      <PRow style="width: 100%;" class="row-bg fff">
        <PCol span="6">
          <div class="grid-content bg-purple"></div>
        </PCol>
        <PCol span="6">
          <div class="grid-content bg-purple-light"></div>
        </PCol>
        <PCol span="6">
          <div class="grid-content bg-purple"></div>
        </PCol>
        <PCol span="3">
          <div class="grid-content bg-purple-light"></div>
        </PCol>
      </PRow>
    </div>

    <div class="demo-show-item">
      <Tab :value="this.tabValue" v-on:click="this.onTabClick">
        <TabPane name="one" label="标题一">one</TabPane>
        <TabPane name="two" label="标题二">two</TabPane>
        <TabPane name="three" label="标题三">three</TabPane>
        <TabPane name="four" label="标题四">four</TabPane>
      </Tab>
    </div>

    <div class="demo-show-item">
      <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click">
        <Button slot="trigger">PopoverClickTop</Button>
      </Popover>
      <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="left">
        <Button slot="trigger">PopoverClickLeft</Button>
      </Popover>
      <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="bottom">
        <Button slot="trigger">PopoverClickBottom</Button>
      </Popover>
      <Popover content="内容内容内容内容内容内容内容内容内容" trigger="click" position="right">
        <Button slot="trigger">PopoverClickRight</Button>
      </Popover>
    </div>
    <div class="demo-show-item">
      <Popover content="内容内容内容内容内容内容内容内容内容">
        <Button slot="trigger">PopoverHoverTop</Button>
      </Popover>
      <Popover title="标题" position="left">
        内容内容内容内容内容内容内容内容内容
        <Button slot="trigger">PopoverHoverLeft</Button>
      </Popover>
      <Popover title="标题" position="bottom">
        内容内容内容内容内容内容内容内容内容
        <Button slot="trigger">PopoverHoverBottom</Button>
      </Popover>
      <Popover content="内容内容内容内容内容内容内容内容内容" position="right">
        <Button slot="trigger">PopoverHoverRight</Button>
      </Popover>
    </div>

    <div class="demo-show-item">
      <Collapse :activeNames="collapseActiveNames" v-on:update-activeNames="onUpdateActiveNames">
        <CollapseItem name="1" title="标题1">内容一</CollapseItem>
        <CollapseItem name="2" title="标题1">内容二</CollapseItem>
        <CollapseItem name="3" title="标题1">内容三</CollapseItem>
      </Collapse>
    </div>

    <div class="demo-show-item">
      <Collapse :activeNames="collapseActiveNames" v-on:update-activeNames="onUpdateActiveNames" :single="true">
        <CollapseItem name="1" title="标题1">内容一</CollapseItem>
        <CollapseItem name="2" title="标题1">内容二</CollapseItem>
        <CollapseItem name="3" title="标题1">内容三</CollapseItem>
      </Collapse>
    </div>

    <div class="demo-show-item">
      <Layout class="demo-layout">
        <Header class="demo-header">header</Header>
        <Content class="demo-content">content</Content>
        <Footer class="demo-footer">footer</Footer>
      </Layout>
    </div>

    <div class="demo-show-item">
      <Layout class="demo-layout">
        <Header class="demo-header" height="100">header</Header>
        <Layout>
          <Aside class="demo-aside">Aside</Aside>
          <Content class="demo-content">Content</Content>
        </Layout>
        <Footer class="demo-footer" height="100">footer</Footer>
      </Layout>
    </div>


    <div class="demo-show-item">
      <Table
        :columns="tableColumns"
        :dataSource="tableData"
        :striped="false"
        v-on:update-select-change="onTableSelectChange"/>
    </div>

    <div class="demo-show-item">
      <Table :columns="tableColumns" :dataSource="tableData" :bordered="true" :compact="true"/>
    </div>

    <div class="demo-show-item">
      <Cascader :source="citySource" :selected.sync="selectedCity" ></Cascader>

    </div>

    <div class="demo-show-item">
      <Carousel :initSelected="carouselSelected" :interval="6">
        <CarouselItem name="one">
          <div class="carouse-box">1</div>
        </CarouselItem>
        <CarouselItem name="two">
          <div class="carouse-box">2</div>
        </CarouselItem>
        <CarouselItem name="three">
          <div class="carouse-box">3</div>
        </CarouselItem>
      </Carousel>
    </div>

    <div class="demo-show-item">
      <DatePicker :value="datePickerValue" @input="datePickerValue = $event"></DatePicker>
      <div>DatePicker</div>
    </div>

  </div>
</template>

<script>
	import Vue from 'vue';
	import VueUI from './index';
	import DB from '../test/fixtures/db';

	// import {DatePicker} from './index';
  // Vue.use(DatePicker);

	Vue.use(VueUI);



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

	export default {
		name: "demo-show",
		mounted() {

		},
		created() {
		},
		data() {
			return {
			  datePickerValue: new Date(),
				inputValue: '初始值',
				tabValue: 'one',
        collapseActiveNames: [],
        tableColumns: [
          {title: '姓名', dataIndex: 'name', key: 'name'},
          {title: '分数', dataIndex: 'scores', key: 'scores'},
        ],
        tableData: [
          {name: '小张', scores: '199', id: 1},
          {name: '小李', scores: '111', id: 2},
        ],
        selectedCity: [],
        citySource: [
          {
            name: '北京',
            children: [
              {
                name: '海淀',
                children: [
                  {name: '西二旗'},
                  {name: '西三旗'}
                ]},
              {
                name: '朝阳',
                children: [
                  {name: '天安门'},
                  {name: '前门'}
                ]
              },
              {
                name: '东城',
                children: [
                  {name: '东城东'},
                  {name: '东城西'}
                ]}
            ]
          },
          {
            name: '黑龙江',
            children: [
              {
                name: '哈尔滨',
                children: [
                  {name: '南岗'},
                  {name: '前进'}
                ]
              },
              {
                name: '佳木斯',
                children: [
                  {name: '东风'},
                  {name: '向阳'}
                ]
              },
              {name: '齐齐哈尔'}
            ]
          }
        ],
				carouselSelected: 'three'
			}
		},
		methods: {
			onIconClick(e) {
				console.log(e);
			},
			onButtonClick(e) {
				console.log(e);
			},
			onInputChange(e) {
				console.log(e.srcElement.value);
				this.inputValue = e.srcElement.value;
			},
			onToastClick() {
				this.$toast('message');
			},
			onTabClick(name) {
				this.tabValue = name;
			},
      onUpdateActiveNames(activeNames) {
			  this.collapseActiveNames = activeNames;
      },
      onTableSelectChange(items) {
        console.log(items);
      },
      onUpdateSelected(newSelected) {
        // console.log('newSelected', newSelected);
			  this.selectedCity = newSelected;
      }
		}
	}
</script>

<style lang="less">
  .demo-layout {
    width: 100%;
    .demo-header, .demo-content, .demo-footer, .demo-aside {
      text-align: center;
      font-size: 16px;
    }
    .demo-header {
      background: #aaa;
      height: 30px;
      line-height: 30px;
    }
    .demo-content {
      background: #bbb;
      padding: 20px;
    }
    .demo-footer {
      background: #ddd;
      height: 30px;
      line-height: 30px;
    }
    .demo-aside {
      width: 45px;
      background: #ccc;
    }
  }
  .row-bg {
    &-gutter {
      background-color: #fff;
    }

    &.fff {
      background: #fff;
    }

    background-color: #f9fafc;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .demo-show {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    &-item {
      width: 40%;
      display: flex;
      justify-content: space-between;
      margin: 25px;
      flex-wrap: wrap;

      > * {
        margin-bottom: 8px;
      }

      border: 1px solid #eee;
      padding: 8px;
    }
  }
.carouse-box {
  width: 300px;
  height: 170px;
  background: #666666;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
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

</style>
