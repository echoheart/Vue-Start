<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>


<script>
    import Vue from 'vue'
    export default {
        name: 'g-collapse',
        props: {
          single: {
              type: Boolean,
              default: false
          },
            selected: {
              type: String,
            },
            _this: {
              type: Object,
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            // if (this.single) {
                return {
                    eventBus: this.eventBus
                }
            // }
        },
        mounted() {

              this.eventBus.$emit('update:selected', this.selected);
              this.eventBus.$on('update:selected', (name) => {
                  console.log(name);
                  this.$emit('update:selected', name)
              })
        }
    }

</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>