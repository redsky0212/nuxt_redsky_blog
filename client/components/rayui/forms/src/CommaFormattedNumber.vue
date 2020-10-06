<template>
  <input :value="formatedValue" v-format-with-comma @input="handleInput" :data-position="position" :data-prev-value="prevValue" @blur="onBlurHandler" />
</template>
<!-- 컴포넌트 사용시 -->
<!-- template>
  <div id="app">
    <label>Amount</label> 
    <br/>
    <comma-formatted-number 
      @input="handleInput" 
      class="input amount-input" 
      :value="formattedValue" 
      :formatOptions="{thousand: ',', precision: 2}" 
    />
    <br/>
    Amount is {{formattedValue}}
  </div>
</template -->

<script>
// import formatNumber from 'accounting-js/lib/formatNumber';
// import unformat from 'accounting-js/lib/unformat';

export default {
  name: 'CommaFormattedNumber',
  directives: {
    formatWithComma: {
      update(e) {
        let positionDiff = 0;
        if (e.dataset.prevValue.length === e.value.length - 1) {
          positionDiff = 1;
        }
        if (e.dataset.prevValue.length === e.value.length + 1) {
          positionDiff = -1;
        }
        if (e.selectionEnd !== e.dataset.position) {
          e.selectionEnd = Number(e.dataset.position) + positionDiff;
        }
      },
    },
  },
  props: {
    formatOptions: {
      type: Object,
      default() {
        return {};
      },
    },
    value: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      formatedValue: this.processFormatting(this.value, this.formatOptions),
      prevValue: '',
      position: 0,
    };
  },
  watch: {
    value() {
      this.formatedValue = this.processFormatting(this.value, this.formatOptions);
    },
  },
  methods: {
    onBlurHandler(e) {
      this.$emit('blur', e);
    },
    handleInput(e) {
      this.prevValue = e.target.value;
      let targetValue = this.$rayui.utils.removeRegExp(e.target.value);
      this.position = e.target.selectionStart;
      this.formatedValue = this.$rayui.utils.format(targetValue, this.formatOptions);
      this.$emit('input', this.formatedValue);
    },
    processFormatting(value, formatOptions) {
      if (!value) {
        return 0;
      }
      if (typeof value === 'string' && value.indexOf(',') >= 0) {
        return value;
      }
      return this.$rayui.format(value, formatOptions);
    },
  },
};
</script>
