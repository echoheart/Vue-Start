<template>
  <div class="date-picker" ref="wrapper">
    <Popover position="bottom" trigger="click" :container="containerRef">
      <Input type="text" slot="trigger" :value="formattedValue"/>
      <div class="date-picker-pop">
        <div class="date-picker-nav" >
          <span class="date-picker-nav-item pre-year">
            <Icon name="left-left"></Icon>
          </span>
          <span  class="date-picker-nav-item pre-month">
            <Icon name="left"></Icon>
          </span>
          <span class="yearAndMonth">
            <span class="date-picker-nav-item" @click="onClickYear">2020年</span>
            <span class="date-picker-nav-item" @click="onClickMonth">2月</span>
          </span>
          <span  class="date-picker-nav-item next-month">
            <Icon name="right"></Icon>
          </span>
          <span  class="date-picker-nav-item next-year">
            <Icon name="right-right"></Icon>
          </span>
        </div>

        <div class="date-picker-panels">
          <div v-if="this.mode === 'years'" class="date-picker-content">年</div>
          <div v-else-if="this.mode === 'months'" class="date-picker-content">月</div>
          <div v-else class="date-picker-content">
            <div class="date-picker-weekdays">
              <span class="date-picker-weekdays-item" v-for="i in ['一', '二', '三', '四', '五', '六', '日']">
                {{i}}
              </span>
            </div>
            <div class="date-picker-row" v-for="i in helper.range(1, 42/7 + 1)">
                <span
                      @click="onCellClick(getVisibleDay(i, j))"
                      class="date-picker-cell"
                      v-for="j in helper.range(1, 7 + 1)">
                  {{getVisibleDay(i, j).getDate()}}
                </span>
            </div>
          </div>
        </div>

        <div class="date-picker-action">
          <button>清除</button>
        </div>
      </div>
    </Popover>
  </div>
</template>

<script>
  import Popover from "../Popover/popover";
  import Input from "../Input/input";
  import Icon from "../Icon/icon";
  import helper from '../utils/date-helper';
  export default {
    name: "DatePicker",
    components: {
      Popover,
      Input,
      Icon
    },
    methods: {
      onClickYear() {
        this.mode = 'years';
      },
      onClickMonth() {
        this.mode = 'months'
      },
      getVisibleDay(row, col) {
        return this.visibleDays[(row - 1) * 7 + (col - 1)]
      },
      onCellClick(newDate) {
        this.$emit('input', newDate);
      }
    },
    mounted() {
      this.containerRef = this.$refs.wrapper;
    },
    computed: {

      visibleDays() {
        const date = this.value;
        console.log(this.value);
        const firstDay = helper.getFirstDayOfMonth(date);

        const weekDayOfFirstDay = firstDay.getDay();
        const startDayTimesStamp = firstDay - new Date(weekDayOfFirstDay === 0 ? 6 : weekDayOfFirstDay -1) * 3600 * 24 * 1000;

        const array = [];
        for (let i = 0; i < 42; i ++) {
          array.push(new Date(startDayTimesStamp + i * 3600 * 24 * 1000));
        }
        console.log(array);
        return array;
      },
      formattedValue() {
        const {year, month, day} = this.helper.getYearMonthDay(this.value);
        return `${year}-${month + 1}-${day}`;
      }
    },
    props: {
      value: {
        default: function () {
          return new Date();
        }
      },
    },
    data() {
      return {
        mode: 'days',
        helper: helper,
        containerRef: null
      }
    }
  }
</script>

<style scoped lang="less">
  .date-picker {
    &-nav {
      display: flex;
    }
    .yearAndMonth {
      margin: auto;
    }
    &-cell, &-nav-item, &-weekdays-item {
      display: inline-flex;
      width: 60px;
      height: 60px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    &-cell:hover {
      background: #ebeef5;
    }
    /deep/ .popover-content-wrapper {
      padding: 0;
    }
  }
</style>