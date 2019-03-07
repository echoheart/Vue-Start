<template>
    <div class="g-carousel">
        <div
                class="g-carousel-window" ref="window"
                v-on:mouseenter="onMouseEnter"
                v-on:mouseleave="onMouseLeave"
                v-on:touchstart="onTouchstart"
                v-on:touchmove="onTouchMove"
                v-on:touchend="onTouchEnd"
        >
            <slot>

            </slot>
        </div>
        <div class="dots">
            <span v-on:click="onClickPrev">
                <Icon name="left" ></Icon>
            </span>
            <span v-for="n in childrenLength"
                  v-bind:class="{active: selectedIndex === n - 1}"
                  v-on:click="select(n-1)"
            >
                {{ n }}
            </span>

            <span v-on:click="onClickNext">
                <Icon name="right" ></Icon>
            </span>

        </div>
    </div>
</template>

<script>
    import Icon from '../icon';
    export default {
        name: 'g-carousel',
        components: {
            Icon
        },
        props: {
            selected: {
                type: String,
                default: () => {
                    return undefined;
                }
            },
            autoPlay: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined,
                timerId: undefined,
                startPoint: undefined,
                endPoint: undefined
            }
        },
        mounted() {
            this.onUpdateChildren();
            this.playAutomatically();
            this.childrenLength = this.items.length;
        },
        updated() {
            this.onUpdateChildren()
        },
        computed: {
            names() {
                return this.$children.map((vm) => {
                    return vm.name;
                })
            },
            selectedIndex() {
                let selectedIndex = this.names.indexOf(this.selected);
                if (selectedIndex === -1) {
                    selectedIndex = 0;
                }
                return selectedIndex === -1 ? 0 : selectedIndex;
            },
            items () {
                return this.$children.filter((vm) => {

                    return vm.$options.name === 'g-carousel-item'
                })
            }
        },
        methods: {
            onClickPrev () {
                console.log(123123);
                this.select(this.selectedIndex - 1)
            },
            onClickNext () {
                this.select(this.selectedIndex + 1)
            },
            onTouchstart(e) {
                this.pause();
                if (e.touches.length > 1) {
                    return;
                }
                this.startPoint = e.changedTouches[0];
            },
            onTouchMove(e) {
            },
            onTouchEnd(e) {
                if (e.changedTouches.length > 1) {
                    return;
                }
                this.endPoint = e.changedTouches[0];

                const {clientX: x1, clientY: y1} = this.startPoint;
                const {clientX: x2, clientY: y2} = this.endPoint;

                //  移动的距离
                const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                const deltaY = Math.abs(y1 - y2);
                const rate = distance / deltaY;
                if (rate > 2) {
                    if (x2 > x1) {
                        this.select(this.selectedIndex + 1);
                    } else {
                        this.select(this.selectedIndex - 1);
                    }
                }
                this.playAutomatically();

            },
            pause() {
                window.clearTimeout(this.timerId);
                this.timerId = undefined;
            },
            onMouseLeave() {
                this.playAutomatically()
            },
            onMouseEnter() {
                this.pause();
            },
            select(newIndex) {
                this.lastSelected = this.selected;
                if (newIndex === -1) {
                    newIndex = this.items.length - 1;
                }
                if (newIndex === this.items.length) {
                    newIndex = 0;
                }
                this.$emit('update:selected', this.names[newIndex])
    },
            playAutomatically() {
                if (this.timerId) {
                    return;
                }
                const run = () => {
                    let index = this.names.indexOf(this.getDefaultSelected());
                    let newIndex = index + 1;
                    this.select(newIndex);
                    this.timerId = setTimeout(run, 3000)
                };
                this.timerId = setTimeout(run, 3000);
            },
            getDefaultSelected() {
                const first = this.items[0];
                return this.selected || first.name;
            },
            onUpdateChildren() {
                const selected = this.getDefaultSelected();
                this.items.forEach((vm) => {

                    const oldIndex = this.names.indexOf(this.lastSelected);
                    const newIndex = this.names.indexOf(selected);
                    vm.reverse = newIndex - oldIndex <= 0;
                    this.$nextTick(() => {
                        vm.selected = selected;
                    });
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .g-carousel {
        position: relative;
        overflow: hidden;
        > .dots {
            display: flex;
            justify-content: center;
            align-items: center;

            > span {
                width: 1.2em;
                height: 1.2em;
                background-color: #ddd;
                border-radius: 50%;
                margin: 6px 6px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                user-select: none;
            }

            & .active {
                color: #FFF;
                background-color: #000;
            }
        }
    }
</style>