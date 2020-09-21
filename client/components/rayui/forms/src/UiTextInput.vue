<template>
  <div class="ui-input ui-text-input-container" :class="changeClassRoot">
    <div class="ui-text-input-control">
      <div class="ui-text-input-input">
        <div class="ui-text-input-wrapper">
          <label :for="inputKey" class="ui-text-input-label" style="left: 0; right: auto; position: absolute;">label</label>
          <input :id="inputKey" type="text" :value="value" @focus="onFocus" @blur="onBlur" @input="onInput" />
        </div>
      </div>
      <div class="ui-text-input-detail">
        <div class="ui-text-input-message" role="alert">
          <div class="ui-text-input-message-wrapper">
            <div class="ui-text-input-message-value">message</div>
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
     * textInput 이 펼쳐질때 하나가 아닌 여러개 펼쳐지게 해주는 옵션.
     * @type {Boolean}
     */
    multiSelect: {
      type: Boolean,
      default: false,
    },
    /**
     * 최초 선택 되어져야 할 Accordion index값 설정한다
     * @type {String||Array}
     */
    selectedIndex: {
      type: [String, Array],
      default: '',
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
