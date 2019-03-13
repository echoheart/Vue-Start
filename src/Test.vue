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
        <!--<g-cascader-->
                <!--v-bind:source.sync="source"-->
                <!--popoverClassName="xxx"-->
                <!--popover-height="200px"-->
                <!--v-bind:selected.sync="selected"-->
                <!--v-bind:load-data="loadData"-->
        <!--&gt;-->
        <!--</g-cascader>-->
        <!--<p>222</p>-->

        <!--<g-carousel v-bind:selected.sync="selected">-->

            <!--<g-carousel-item name="1">-->
                <!--<div class="box">1</div>-->
            <!--</g-carousel-item>-->
            <!--<g-carousel-item name="2">-->
                <!--<div class="box">2</div>-->
            <!--</g-carousel-item>-->
            <!--<g-carousel-item name="3">-->
                <!--<div class="box">3</div>-->
            <!--</g-carousel-item>-->

        <!--</g-carousel>-->

        <!--<g-collapse v-bind:selected="selectedTab">-->
        <!--<g-collapse-item title="标题1" name="1">内容1</g-collapse-item>-->
        <!--<g-collapse-item title="标题2" name="2">内容2</g-collapse-item>-->
        <!--<g-collapse-item title="标题3" name="3">内容3</g-collapse-item>-->
        <!--</g-collapse>-->

        <!--{{ selectedTab }}-->

        <!--<g-nav v-bind:selected.sync="selected" vertical style="margin: 100px; width: 300px; border: 1px solid #ddd; padding: 10px;">-->
            <!--<g-nav-item name="home">首页</g-nav-item>-->

            <!--<g-sub-nav name="about">-->
                <!--<template slot="title" >关于</template>-->
                <!--<g-nav-item name="culture">企业文化</g-nav-item>-->
                <!--<g-nav-item name="team">开发团队</g-nav-item>-->
                <!--<g-sub-nav name="contact">-->
                    <!--<template slot="title">联系方式</template>-->
                    <!--<g-nav-item name="wechat">微信</g-nav-item>-->
                    <!--<g-nav-item name="qq">QQ</g-nav-item>-->
                    <!--<g-sub-nav name="mobile">-->
                        <!--<template slot="title">电话</template>-->
                        <!--<g-nav-item name="cm">移动</g-nav-item>-->
                        <!--<g-nav-item name="cu">联通</g-nav-item>-->
                        <!--<g-nav-item name="cn">电信</g-nav-item>-->
                    <!--</g-sub-nav>-->
                <!--</g-sub-nav>-->
            <!--</g-sub-nav>-->
            <!--<g-nav-item name="hire">招聘</g-nav-item>-->
        <!--</g-nav>-->

        <!--<g-nav v-bind:selected.sync="selected" style="margin: 100px">-->
            <!--<g-nav-item name="home">首页</g-nav-item>-->

            <!--<g-sub-nav name="about">-->
                <!--<template slot="title" >关于</template>-->
                <!--<g-nav-item name="culture">企业文化</g-nav-item>-->
                <!--<g-nav-item name="team">开发团队</g-nav-item>-->
                <!--<g-sub-nav name="contact">-->
                    <!--<template slot="title">联系方式</template>-->
                    <!--<g-nav-item name="wechat">微信</g-nav-item>-->
                    <!--<g-nav-item name="qq">QQ</g-nav-item>-->
                    <!--<g-sub-nav name="mobile">-->
                        <!--<template slot="title">电话</template>-->
                        <!--<g-nav-item name="cm">移动</g-nav-item>-->
                        <!--<g-nav-item name="cu">联通</g-nav-item>-->
                        <!--<g-nav-item name="cn">电信</g-nav-item>-->
                    <!--</g-sub-nav>-->
                <!--</g-sub-nav>-->
            <!--</g-sub-nav>-->
            <!--<g-nav-item name="hire">招聘</g-nav-item>-->
        <!--</g-nav>-->

    <!--<Pager v-bind:total-page="100" v-bind:current-page.sync="currentPage" style="margin: 200px"></Pager>-->


        <Table v-bind:data-source="dataSource" v-bind:columns="columns" style="margin:100px"></Table>

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
            Table
        },

        mounted() {

        },
        created() {

        },
        data: function () {
            return {
                dataSource: [
                    {
                        id: 1,
                        name: '小红',
                        score: 99
                    },
                    {
                        id: 2,
                        name: '小明',
                        score: 100
                    }
                ],
                columns: [
                    {
                        text: '姓名',
                        field: 'name'
                    },
                    {
                        text: '分数',
                        field: 'score'
                    }
                ]
            }
        },
        methods: {

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