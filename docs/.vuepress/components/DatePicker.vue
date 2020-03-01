<template>
  <div>
    <DatePicker :value="datePickerValue" @input="datePickerValue = $event"></DatePicker>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>


<script>
  import DatePicker from '../../../src/date-picker/date-picker';
  export default {
    components: {
      DatePicker
    },
    methods: {

    },
    data() {
      return {
        datePickerValue: new Date(),
        content: `
<DatePicker :value="datePickerValue" @input="datePickerValue = $event"></DatePicker>
    `.replace(/^\t+| +$/g, '').trim()

      }
    }
  }
</script>
