<template>
    <div>
        <g-button>
            按钮
        </g-button>

        <g-popover>
        <template slot="content">
        <div>popover内容</div>
        </template>
        <button>点我</button>
        </g-popover>
        <g-popover>
        <template slot="content">
        <div>popover内容</div>
        </template>
        <button>点我</button>
        </g-popover>
        <div>hdsadsai</div>
        <button v-on:click="showToast">
            click me
        </button>
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

    Vue.use(plugin);
    export default {
        name: "demo",
        components: {
            "g-button": Button,
            "g-popover": Popover,
            "g-toast": Toast,

        },
        methods: {
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