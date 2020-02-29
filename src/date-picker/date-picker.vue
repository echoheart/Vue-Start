<template>
  <div class="date-picker" ref="wrapper">
    <Popover position="bottom" trigger="click" :container="containerRef" ref="popover" @open="onOpen" @close="onClose">
      <Input type="text" slot="trigger" :value="formattedValue" ref="input" @change="onInputChange" @input="onInput"/>
      <div class="date-picker-pop" @selectstart.prevent>
        <div class="date-picker-nav" >
          <span class="date-picker-nav-item pre-year" @click="onPreYearClick">
            <Icon name="left-left"></Icon>
          </span>
          <span  class="date-picker-nav-item pre-month" @click="onPreMonthClick">
            <Icon name="left"></Icon>
          </span>
          <span class="yearAndMonth"  @click="onClickYear">
            <span class="date-picker-nav-item">{{displayValue.year}}年</span>
            <span class="date-picker-nav-item">{{displayValue.month + 1}}月</span>
            <Icon name="xiala" :class="{isUp: mode === 'years'}"></Icon>
          </span>
          <span  class="date-picker-nav-item next-month" @click="onNextMonthClick">
            <Icon name="right"></Icon>
          </span>
          <span  class="date-picker-nav-item next-year" @click="onNextYearClick">
            <Icon name="right-right"></Icon>
          </span>
        </div>

        <div class="date-picker-panels">
          <div class="date-picker-content">
            <template v-if="this.mode === 'years'">
              <div class="date-picker-select-wrapper">
                <select @change="onYearSelectChange" :value="displayValue.year">
                  <option v-for="year in years" :value="year">
                    {{year}}
                  </option>
                </select>

                <select @change="onMonthSelectChange" :value="displayValue.month">
                  <option v-for="month in helper.range(0, 12)" :value="month">
                    {{month + 1}}
                  </option>
                </select>
              </div>
            </template>
            <template v-else>
              <div class="date-picker-weekdays">
              <span class="date-picker-weekdays-item" v-for="i in ['一', '二', '三', '四', '五', '六', '日']">
                {{i}}
              </span>
              </div>
              <div class="date-picker-row" v-for="i in helper.range(1, 42/7 + 1)">
                <span
                  @click="onCellClick(getVisibleDay(i, j))"
                  :class="['date-picker-cell', {
                    notCurrentMonth: isCurrentMonth(getVisibleDay(i, j)),
                    isSelected: isSelected(getVisibleDay(i, j)),
                    isToday: isToday(getVisibleDay(i, j))
                  }]"
                  v-for="j in helper.range(1, 7 + 1)">
                  {{getVisibleDay(i, j).getDate()}}
                </span>
              </div>
            </template>
          </div>
        </div>

        <div class="date-picker-action">
          <Button @click="onTodayClick">今天</Button>
          <Button @click="onClearClick">清除</Button>
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
  import Button from "../Button/button";
  export default {
    name: "DatePicker",
    components: {
      Popover,
      Input,
      Icon,
      Button
    },
    methods: {

      onClickYear() {
        if (this.mode === 'days') {
          this.mode = 'years';
        } else {
          this.mode = 'days';
        }

      },
      getVisibleDay(row, col) {
        return this.visibleDays[(row - 1) * 7 + (col - 1)]
      },
      onCellClick(newDate) {
        if (this.isCurrentMonth(newDate)) return;
        this.$emit('input', newDate);
        this.close();
      },
      isCurrentMonth(date) {
        const {year, month} = helper.getYearMonthDay(date);

        return year !== this.displayValue.year || this.displayValue.month !== month;
      },
      onPreYearClick() {
        const oldDate = new Date(this.displayValue.year, this.displayValue.month);
        const newDate = helper.setYear(oldDate, -1);
        const {year, month} = helper.getYearMonthDay(newDate);
        this.displayValue = {
          year,month
        }
      },
      onNextYearClick() {
        const oldDate = new Date(this.displayValue.year, this.displayValue.month);
        const newDate = helper.setYear(oldDate, +1);
        const {year, month} = helper.getYearMonthDay(newDate);
        this.displayValue = {
          year,month
        }
      },
      onPreMonthClick() {
        const oldDate = new Date(this.displayValue.year, this.displayValue.month);
        const newDate = helper.setMonth(oldDate, -1);
        const {year, month} = helper.getYearMonthDay(newDate);
        this.displayValue = {
          year,month
        }
      },
      onNextMonthClick() {
        const oldDate = new Date(this.displayValue.year, this.displayValue.month);
        const newDate = helper.setMonth(oldDate, +1);
        const {year, month} = helper.getYearMonthDay(newDate);
        this.displayValue = {
          year,month
        }
      },
      onClearClick() {
        this.$emit('input', undefined);
        this.close();
      },
      onTodayClick() {
        const {year, month} = helper.getYearMonthDay(new Date());
        this.displayValue = {
          year, month
        };
        this.$emit('input', new Date());
      },
      onYearSelectChange(e) {
        this.displayValue.year = parseInt(e.currentTarget.value);
        console.log(this.displayValue.year);
      },
      onMonthSelectChange(e) {
        this.displayValue.month = parseInt(e.currentTarget.value);
        console.log(e.currentTarget.value);
        this.mode = 'days';
      },
      isSelected(date) {
        if (!this.value) return;
        const {year, month, day} = helper.getYearMonthDay(date);
        const {year: cYear, month: cMonth, day: cDay} = helper.getYearMonthDay(this.value);
        return year === cYear && month === cMonth && day === cDay;
      },
      isToday(date) {
        const {year, month, day} = helper.getYearMonthDay(date);
        const {year: cYear, month: cMonth, day: cDay} = helper.getYearMonthDay(new Date());
        return year === cYear && month === cMonth && day === cDay;
      },
      close() {
        this.mode = 'days';
        this.$refs.popover.close();
      },
      onOpen() {
        this.mode = 'days';
      },
      onClose() {

      },
      onInputChange() {
        this.$refs.input.setRawValue(this.formattedValue)
      },
      onInput(value) {
        const reg = /^\d{4}-\d{2}-\d{2}$/;
        if (value.match(reg)) {
          let [year, month, day] = value.split('-');
          if (month >=0 && month < 12 && year > 1000 && year < 3000) {
            const firstDay = new Date(year, month - 1, 1).getDate();
            const lastDay = new Date(year, month, 0).getDate();
            if (day >= firstDay && day <= lastDay) {
              month = month - 1;
              year = year - 0;
              this.displayValue = {
                year: parseInt(year),
                month: parseInt(month)
              };
              this.$emit('input', new Date(year, month, day))
            }
          }
        }
      }

    },
    mounted() {
      this.containerRef = this.$refs.wrapper;
    },
    computed: {

      visibleDays() {
        const date = new Date(this.displayValue.year, this.displayValue.month, 1);
        console.log(date);
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
        if(!this.value) return;
        const {year, month, day} = this.helper.getYearMonthDay(this.value);
        return `${year}-${parseInt(month) + 1 >= 10 ?parseInt(month) + 1 : '0' + (month + 1)}-${day >= 10 ? day : '0' + day}`;
      },
      years() {
        return helper.range(
          this.timeRange.start.getFullYear(),
          this.timeRange.end.getFullYear() + 1
        );
      },

    },
    props: {
      value: undefined,
      timeRange: {
        default: function () {
          return {
            start: new Date(1970, 0, 1),
            end: helper.setYear(new Date(), 100)
          }
        }
      }
    },
    data() {
      const {year, month} = helper.getYearMonthDay(this.value || new Date());
      return {
        mode: 'days',
        helper: helper,
        containerRef: null,
        displayValue: {
          year,month
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .date-picker {
    &-nav {
      display: flex;
    }
    &-content {
      width: 420px;
    }
    .yearAndMonth {
      margin: auto;
      .g-icon {
        transition: all 200ms;
      }
      .isUp {
        transform: rotate(180deg);
      }
    }
    &-select-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      select {
        margin: 20px;
      }
    }
    &-cell, &-nav-item, &-weekdays-item {
      display: inline-flex;
      width: 60px;
      height: 60px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #000;
    }
    .notCurrentMonth {
      color: #ddd;
    }
    .isToday {
      background: #1989fa;
      border-radius: 4px;
    }
    .isSelected {
      border: 1px solid #4abf8a;
      border-radius: 4px;
    }
    &-cell:hover {
      background: #ebeef5;
      border-radius: 4px;
      color: #4abf8a;
    }
    .notCurrentMonth:hover {
      background: initial;
    }
    /deep/ .popover-content-wrapper {
      padding: 3px;
    }
    &-action {
      display: flex;
      margin-top: 10px;
      margin-bottom: 10px;
      > button {
        margin: auto;
      }
    }
  }
</style>