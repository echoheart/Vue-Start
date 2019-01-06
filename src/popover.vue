<template>
    <div class="popover" v-on:click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
            positionContent () {
                document.body.appendChild(this.$refs.contentWrapper);
                const { width, height, left, top } = this.$refs.trigger.getBoundingClientRect();
                console.log(width, height, left, top);
                //  为了解决css的位置问题,需要考虑出现滚动条的情况 scrollY scrollX 是指浏览器滚动了的高度和宽度
                this.$refs.contentWrapper.style.top = top + scrollX + 'px';
                this.$refs.contentWrapper.style.left = left + scrollY + 'px';
            },
            onClickDocuemnt (e) {
                // debugger;
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target
                    || this.$refs.contentWrapper.contains(e.target))) {
                    return
                }
                this.close();

            },
            listenToDocument() {
                console.log('新增document-click监听器');
                document.addEventListener('click', this.onClickDocuemnt)
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.positionContent();
                    this.listenToDocument();
                })
            },
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocuemnt);
                console.log('删除监听器');
            },
            onClick(e) {
                // debugger;
                if (this.$refs.trigger.contains(e.target)) {
                    console.log('点击下面按钮');
                    if (this.visible === true) {
                        this.close();
                    } else {
                        this.open();
                    }
                } else {
                    console.log('关闭popover');
                }

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