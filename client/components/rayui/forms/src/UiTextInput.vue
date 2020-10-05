<template>
  <div class="ui-input ui-text-input-container" :class="changeClassRoot">
    <div class="ui-text-input-control">
      <div class="ui-text-input-input">
        <div class="ui-text-input-wrapper">
          <label :for="inputKey" class="ui-text-input-label" style="left: 0; right: auto; position: absolute;" v-html="label"></label>
          <input :id="inputKey" :type="type" :pattern="type === 'number' ? '[0-9]*' : ''" :value="value" @focus="onFocus" @blur="onBlur" @input="onInput" />
        </div>
      </div>
      <div class="ui-text-input-detail">
        <div class="ui-text-input-message" role="alert">
          <div class="ui-text-input-message-wrapper">
            <div class="ui-text-input-message-value">{{ message }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    /**
     * label 텍스트를 셋팅합니다.
     * @type {String}
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * input 아래쪽에 메시지를 입력합니다.
     * @type {String}
     */
    message: {
      type: String,
      default: '',
    },
    /**
     * HTML input엘리먼트의 type 속성과 같은 값을 입력합니다.
     * @type {String}
     */
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      inputKey: '',
      g_inputStatusValue: this.$rayui.inputStatusValue,
      isFocus: false,
    };
  },
  computed: {
    changeClassRoot: function () {
      const obj = {};

      obj['ui-text-input-focus'] = this.isFocus;
      if (this.isFocus) {
        obj['ui-text-input-isvalue'] = true;
      } else if (!this.isFocus && this.value !== '') {
        obj['ui-text-input-isvalue'] = true;
      } else {
        obj['ui-text-input-isvalue'] = false;
      }

      return obj;
    },
  },
  beforeMount() {
    // text input 초기화
    this.init();
  },
  beforeDestroy() {
    this.removeAccordionsKey();
  },
  methods: {
    init() {
      // text input 의 key생성.
      this.createAccordionsKey();
    },
    createAccordionsKey() {
      this.inputKey = `ui_textinput_key_${this.g_inputStatusValue.key++}`;
      this.g_inputStatusValue.list.push({
        inputKey: this.inputKey,
      });
    },
    removeAccordionsKey() {
      this.g_inputStatusValue.list.some((item, index) => {
        if (this.inputKey === this.g_inputStatusValue.list[index].inputKey) {
          this.g_inputStatusValue.list.splice(index, 1);
          this.g_inputStatusValue.key--;
        }
      });
    },
    // text input 이벤트 ====================================
    onFocus(event) {
      this.isFocus = true;
    },
    onBlur(event) {
      this.isFocus = false;
    },
    onInput(event) {
      this.$emit('input', event.currentTarget.value);
    },
  },
};
</script>
