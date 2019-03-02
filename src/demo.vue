<template>
    <div>
        <!--<div>-->
        <!--<g-button>-->
        <!--按钮-->
        <!--</g-button>-->
        <!--</div>-->

        <!--<g-popover>-->
        <!--<template slot="content">-->
        <!--<div>popover内容</div>-->
        <!--</template>-->
        <!--<button>Popover</button>-->
        <!--</g-popover>-->


        <!--<g-popover>-->
        <!--<template slot="content">-->
        <!--<div>popover内容</div>-->
        <!--</template>-->
        <!--<button>Popover</button>-->
        <!--</g-popover>-->


        <!--<div>-->
        <!--<button v-on:click="showToast">-->
        <!--click me-->
        <!--</button>-->
        <!--</div>-->


        <!--<g-tabs :selected.sync="selectedTab">-->
        <!--<g-tabs-header>-->
        <!--<template slot="actions">-->
        <!--<button>设置</button>-->
        <!--</template>-->
        <!--<g-tabs-item name="woman">-->
        <!--美女-->
        <!--</g-tabs-item>-->
        <!--<g-tabs-item name="sports">-->
        <!--体育-->
        <!--</g-tabs-item>-->
        <!--<g-tabs-item name="fiance">-->
        <!--财经-->
        <!--</g-tabs-item>-->
        <!--</g-tabs-header>-->

        <!--<g-tabs-body>-->
        <!--<g-tabs-pane name="woman">-->
        <!--美女频道内容-->
        <!--</g-tabs-pane>-->
        <!--<g-tabs-pane name="sports">-->
        <!--体育频道内容-->
        <!--</g-tabs-pane>-->
        <!--<g-tabs-pane name="fiance">-->
        <!--财经频道内容-->
        <!--</g-tabs-pane>-->
        <!--</g-tabs-body>-->
        <!--</g-tabs>-->
        <!--<p>{{ selected }}</p>-->
        <g-cascader
                v-bind:source.sync="source"
                popoverClassName="xxx"
                popover-height="200px"
                v-bind:selected.sync="selected"
                v-bind:load-data="loadData"
        >
        </g-cascader>
        <!--<p>222</p>-->

        <!--<g-collapse v-bind:selected="selectedTab">-->
        <!--<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>-->
        <!--<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>-->
        <!--<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>-->
        <!--</g-collapse>-->

        <!--{{ selectedTab }}-->
    </div>
</template>

<script>
    import Vue from 'vue';
    import Button from './button';
    import studyVue from './studyVue';
    import Icon from './icon';
    import buttonGroup from './button-group';
    import Input from './input';
    import Col from './col';
    import Row from './row';
    import Toast from './toast';
    import plugin from './plugin';
    import Tabs from './tabs';
    import TabsHeader from './tabs-header';
    import TabsItem from './tabs-item';
    import TabsBody from './tabs-body';
    import TabsPane from './tabs-pane';
    import Popover from './popover';
    import Cascader from './cascader';
    import Collapse from './collapse';
    import CollapseItem from './collapse-item';
    import DB from './db';

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
            }, 2000);
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
            "g-collapse-item": CollapseItem
        },

        mounted() {
            console.log(this);
            this.$children[0].$on('update:selected', (names) => {
                this.selected = names;
            })
        },
        created() {
            ajax().then((result) => {
                // this.source = this.sourceStatic;
                this.source = result;
            });
        },
        data: function () {
            return {
                selectedTab: ['2'],
                selected: [],
                source: [],
                selectedTab: 'sports',
                sourceStatic:[{
                    name: '浙江',
                    children: [
                        {
                            name: '杭州',
                            children: [
                                {name: '上城区'},
                                {name: '下城区'},
                                {name: '江干区'}
                            ]
                        },
                        {name: '嘉兴'},
                        {name: '湖州'}
                    ]
                },{
                    name: '北京',
                    children: [
                        {name: '东城区'},
                        {name: '西城区'},
                        {name: '海淀区'}
                    ]
                },{
                    name: '黑龙江',
                    children: [
                        {name: '哈尔滨'},
                        {
                            name: '佳木斯',
                            children: [
                                {name: '东风区'},
                                {name: '桦南县'}
                            ]
                        },
                        {name: '大庆'}
                    ]
                }],
            }
        },
        methods: {
            onUpdate(copySeleted) {
                this.selected = copySeleted;
            },

            updateSelected(selected) {
                console.log(selected[0]);
                ajax(selected[0].id).then((result) => {
                    // selected[0].children = result;
                    let lastSelectedLevel = this.source.filter((item) => {
                        return (item.id === this.selected[0].id);
                    })[0];
                    console.log(lastSelectedLevel);
                    this.$set(lastSelectedLevel, 'children', result);
                })
            },
            loadData(id, fn) {
                ajax(id).then((result) => {
                    fn(result)
                });
            },
            inputChange: function (event) {
                console.log(event);
            },
            showToast() {
                this.$toast('我是toast', {
                    position: 'top',
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('知道了');
                        }
                    }
                });
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
</style>