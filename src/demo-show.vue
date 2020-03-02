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
        <CollapseItem name="2" title="标题2">内容二</CollapseItem>
        <CollapseItem name="3" title="标题3">内容三</CollapseItem>
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
      <DatePicker :value="datePickerValue" @input="datePickerValue = $event"></DatePicker>
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
      <Scroll style="height: 300px; width: 200px;">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
        <p>23</p>
        <p>24</p>
        <p>25</p>
        <p>26</p>
        <p>27</p>
        <p>28</p>
        <p>29</p>
        <p>30</p>
        <p>31</p>
        <p>32</p>
        <p>33</p>
        <p>34</p>
        <p>35</p>
        <p>36</p>
        <p>37</p>
        <p>38</p>
        <p>39</p>
        <p>40</p>
        <p>41</p>
        <p>42</p>
        <p>43</p>
        <p>44</p>
        <p>45</p>
        <p>46</p>
        <p>47</p>
        <p>48</p>
        <p>49</p>
        <p>50</p>
        <p>51</p>
        <p>52</p>
        <p>53</p>
        <p>54</p>
        <p>55</p>
        <p>56</p>
        <p>57</p>
        <p>58</p>
        <p>59</p>
        <p>60</p>
        <p>61</p>
        <p>62</p>
        <p>63</p>
        <p>64</p>
        <p>65</p>
        <p>66</p>
        <p>67</p>
        <p>68</p>
        <p>69</p>
        <p>70</p>
        <p>71</p>
        <p>72</p>
        <p>73</p>
        <p>74</p>
        <p>75</p>
        <p>76</p>
        <p>77</p>
        <p>78</p>
        <p>79</p>
        <p>80</p>
        <p>81</p>
        <p>82</p>
        <p>83</p>
        <p>84</p>
        <p>85</p>
        <p>86</p>
        <p>87</p>
        <p>88</p>
        <p>89</p>
        <p>90</p>
        <p>91</p>
        <p>92</p>
        <p>93</p>
        <p>94</p>
        <p>95</p>
        <p>96</p>
        <p>97</p>
        <p>98</p>
        <p>99</p>
        <p>100</p>
      </Scroll>
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
