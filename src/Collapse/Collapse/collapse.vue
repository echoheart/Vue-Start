<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default {
    name: 'Collapse',
    props: {
      single: {
        type: Boolean,
        default: false
      },
      activeNames: {
        type: Array,
      },
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.eventBus.$emit('update-activeNames', this.activeNames);
      this.eventBus.$on('add-active-name', (name) => {
        let activeNamesCopy = this.activeNames.slice();
        if (this.single) {
          activeNamesCopy = [name];
        } else {
          activeNamesCopy.push(name);
        }
        this.$emit('update-activeNames', activeNamesCopy);
        this.eventBus.$emit('update-activeNames', activeNamesCopy)
      });
      this.eventBus.$on('remove-active-name', (name) => {
        let activeNamesCopy = this.activeNames.slice();
        const index = activeNamesCopy.indexOf(name);
        if (this.single) {
          activeNamesCopy = []
        } else {
          activeNamesCopy.splice(index, 1);
        }
        this.$emit('update-activeNames', activeNamesCopy);
        this.eventBus.$emit('update-activeNames', activeNamesCopy);
      })

    }
  }

</script>

<style scoped lang="less">
  @grey: #ddd;
  @border-radius: 4px;
  .collapse {
    border: 1px solid @grey;
    border-radius: @border-radius;
    min-width: 300px;
  }
</style>
