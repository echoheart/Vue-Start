<template>
  <div class="date-picker" ref="wrapper">
    <Popover position="bottom" trigger="click" :container="containerRef">
      <Input type="text" slot="trigger"/>
      <div class="date-picker-pop">
        <div class="date-picker-nav">
          <span> <Icon name="left-left"></Icon> </span>
          <span> <Icon name="left"></Icon> </span>
          <span @click="onClickYear">2020年</span>
          <span @click="onClickMonth">2月</span>
          <span> <Icon name="right"></Icon>  </span>
          <span> <Icon name="right-right"></Icon>  </span>
        </div>

        <div class="date-picker-panels">
          <div v-if="this.mode === 'years'" class="date-picker-content">年</div>
          <div v-else-if="this.mode === 'months'" class="date-picker-content">月</div>
          <div v-else class="date-picker-content">
            <div class="date-picker-weekdays">
              <span v-for="i in ['一', '二', '三', '四', '五', '六', '日']">
                {{i}}
              </span>
            </div>
            <div class="date-picker-row" v-for="i in helper.range(1, 42/7 + 1)">
                <span class="date-picker-cell" v-for="j in helper.range(1, 7 + 1)">
                  {{visibleDays[(i - 1) * 7 + (j - 1)].getDate()}}
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
      }
    },
    mounted() {
      this.containerRef = this.$refs.wrapper;
    },
    computed: {
      containerRef() {

      },
      visibleDays() {
        const date = this.value;
        console.log(this.value);
        const firstDay = helper.getFirstDayOfMonth(date);
        const lastDay = helper.getLastDayOfMonth(date);

        const {year, month, day} = helper.getYearMonthDay(date);
        const array1 = [];
        for(let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
          array1.push(new Date(year, month, i))
        }

        const array2 = [];
        const n = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
        for (let i = 0; i < n; i++) {
          array2.push(new Date(year, month, -i))
        }
        array2.reverse();

        const array3 = [];
        const m = 42 - array1.length - array2.length;
        for (let i = 1; i <= m; i++) {
          array3.push(new Date(year, month + 1, i))
        }

        console.log(array1);
        console.log(array2);
        console.log(array3);

        return [...array2, ...array1, ...array3];
      }
    },

    data() {
      return {
        mode: 'days',
        helper: helper,
        value: new Date(),
        containerRef: null
      }
    }
  }
</script>

<style scoped lang="less">
  .date-picker {

    /deep/ .popover-content-wrapper {
      /*padding: 0;*/
    }
  }
</style>