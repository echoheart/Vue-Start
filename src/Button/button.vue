<template>
  <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]: true}" v-on:click="$emit('click')">
    <Icon v-if="icon && !loading" v-bind:name="icon"></Icon>
    <Icon v-if="loading" class="loading" name="loading"></Icon>
    <span class="g-content">
      <slot>button</slot>
    </span>
  </button>
</template>
<script>
  import Icon from '../Icon/icon';

  export default {
    name: 'Button',
    components: {
      Icon
    },
    props: {
      icon: {
        type: String
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../var";


  .g-button {
    height: @button-height;
    font-size: @font-size;
    padding: 0 1em;
    border-radius: @button-radius;
    background: @button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1em;

    &:hover {
      border-color: @border-color-hover;
    }

    &:active {
      background-color: @button-active-bg;
    }

    &:focus {
      outline: none;
    }

    > .g-icon {
      order: 1;
      margin-right: .3em;
    }

    > .g-content {
      order: 2;
    }

    &.icon-right {
      > .g-icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }

      > .g-content {
        order: 1;
      }
    }

    .loading {
      animation: spin 1s infinite linear;
    }
  }
</style>
