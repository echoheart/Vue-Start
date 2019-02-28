<template>
    <div class="cascader">
        <div class="trigger" v-on:click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popoverVisible">
            <CascaderItems v-bind:items="source"></CascaderItems>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items';

    export default {
        name: 'g-cascader',
        components: {
            CascaderItems
        },
        computed: {
          level2Items() {
            if (this.level1Selected) {
                return this.level1Selected.children;
            } else {
                return []
            }
          },
            level3Items() {
              if (this.level2Selected) {
                  return this.level2Selected.children;
              } else {
                  return []
              }
            }
        },
        data() {
            return {
                popoverVisible: false,
                level1Selected: null,
                level2Selected: null
            }
        },
        props: {
            source: {
                type: Array
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascader {
        position: relative;
        .trigger {
            border: 1px solid green;
            height: 32px;
            width: 150px;
        }
        .popover {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            display: flex;
            justify-content: flex-start;
            /*width: 10px;*/
            height: 200px;
            .label {
                white-space: nowrap;
            }
            /*border: 1px solid red;*/
        }
    }
</style>