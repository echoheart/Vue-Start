<template>
    <div class="popover" v-on:click.stop="xxx">
        <div class="content-wrapper" v-if="visible" v-on:click.stop>
            <slot name="content"></slot>
        </div>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'g-popover',
        data() {
            return {
                visible: false
            }
        },
        methods: {
            xxx() {
                this.visible = !this.visible;
                console.log('切换popover状态');

                if (this.visible === true) {
                    this.$nextTick(() => {
                        let X = () => {
                            this.visible = false;
                            console.log(this, '------时间监听的回调函数');
                            console.log('点击body关闭popover');
                            // this.$nextTick(() => {
                            document.removeEventListener('click', X);
                            // });
                            console.log('删除监听器');
                        };
                        console.log('新增document-click监听器');
                        document.addEventListener('click', X)
                    })
                }

                // if (this.visible === true) {
                //     document.body.addEventListener('click', () => {
                //         this.visible = false;
                //         console.log('点击body关闭popover');
                //     })
                // }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid green;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
        }
    }
</style>