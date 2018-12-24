<template>
    <div class="popover" v-on:click.stop="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" v-on:click.stop>
            <slot name="content"></slot>
        </div>
        <span ref="trigger">
            <slot></slot>
        </span>
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
                        document.body.appendChild(this.$refs.contentWrapper);
                        const { width, height, left, top } = this.$refs.trigger.getBoundingClientRect();
                        console.log(width, height, left, top);
                        //  为了解决css的位置问题,需要考虑出现滚动条的情况 scrollY scrollX 是指浏览器滚动了的高度和宽度
                        this.$refs.contentWrapper.style.top = top + scrollX + 'px';
                        this.$refs.contentWrapper.style.left = left + scrollY + 'px';
                        console.log(this.$refs.contentWrapper, '-----ref');
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
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

    }
    .content-wrapper {
        position: absolute;
        border: 1px solid green;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        transform: translateY(-100%);
    }
</style>