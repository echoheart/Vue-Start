<template>
  <div class="collapse-item">
    <div class="title" v-on:click="toggle">
      {{ title }}
    </div>

    <div class="content" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'CollapseItem',
    props: {
      title: {
        type: String,
        require: true
      },
      name: {
        type: String,
        require: true
      },

    },
    data() {
      return {
        isOpen: false,
        single: false
      }
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        this.isOpen = names.indexOf(this.name) >= 0;
      });
    },

    methods: {
      toggle() {
        if (this.isOpen) {
          this.eventBus.$emit('update:removeSelected', this.name);
        } else {
          this.eventBus.$emit('update:addSelected', this.name);
        }
      },
    },

  }

</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapse-item {
    > .title {
      border: 1px solid $grey;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding-left: 20px;
    }

    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
  }
</style>
