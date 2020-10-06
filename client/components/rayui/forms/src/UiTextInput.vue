<template>
  <div class="ui-input ui-text-input-container" :class="changeClassRoot">
    <div class="ui-text-input-control">
      <div class="ui-text-input-input">
        <div class="ui-text-input-wrapper">
          <label :for="inputKey" class="ui-text-input-label" style="left: 0; right: auto; position: absolute;" v-html="label"></label>
          <input
            v-format-change
            :data-position="position"
            :data-prev-value="prevValue"
            :data-type="type"
            :data-format="format"
            :id="inputKey"
            :type="setType"
            :pattern="pattern"
            :value="formatedValue"
            @focus="onFocus"
            @blur="onBlur"
            @input="onInput"
            @keypress="onKeypress"
          />
        </div>
      </div>
      <div class="ui-text-input-detail" v-if="showDetail">
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
// TODO: 숫자 타입에 문자 들어가는 버그.
// TODO: only number에서 문자키 입력시 하나가 계속 들어가는 현상
export default {
  directives: {
    // 통화포맷 설정시 커서위치가 맨 뒤로 이동해버리는 버그 관련 position조정을 위한 directive.
    formatChange: {
      update(event) {
        if (event.dataset.type === 'number' && event.dataset.format === 'currency') {
          let positionDiff = 0;
          if (event.dataset.prevValue.length === event.value.length - 1) {
            positionDiff = 1;
          }
          if (event.dataset.prevValue.length === event.value.length + 1) {
            positionDiff = -1;
          }
          if (event.selectionEnd !== event.dataset.position) {
            event.selectionEnd = Number(event.dataset.position) + positionDiff;
          }
        }
      },
    },
  },
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
    /**
     * detail의 message영역을 고정된 형태로 보여줄지 아니면 상황에 맞게 보였다, 숨겨졌다 할것인지를 적용합니다.
     * 'fixed', 'auto'
     * @type {String}
     */
    messageArea: {
      type: String,
      default: 'fixed',
    },
    /**
     * 입력된 값을 특정 형식을 적용하여 보여준다.
     * @type {String}
     */
    format: {
      type: String,
      default: 'none',
    },
  },
  data() {
    return {
      inputKey: '',
      g_inputStatusValue: this.$rayui.inputStatusValue,
      isFocus: false,
      pattern: this.type === 'number' ? '[0-9]*' : '', // number타입일때 모바일 숫자 키패드 보이기.
      formatedValue: this.processFormatting(this.value, this.format),
      prevValue: '',
      position: 0,
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
    showDetail: function () {
      if (this.messageArea === 'fixed') {
        return true;
      } else if (this.messageArea === 'auto') {
        // TODO: 에러상황에 맞게 리턴값을 달리해줘야 한다.
        return false;
      } else {
        return false;
      }
    },
    setType: function () {
      if (this.type === 'number' && this.format === 'currency') {
        return 'text';
      } else {
        return this.type;
      }
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
    // 값을 format type에 맞게 포맷팅한다.
    processFormatting(value, type) {
      if (!value) {
        return '';
      }
      return this.$rayui.utils.format(value, type).formatValue;
    },
    // 금액관련 값 체크
    onlyForCurrency(event) {
      const keyCode = event.keyCode ? event.keyCode : event.which;
      // 소수점 하나만 체크
      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.value.indexOf('.') !== -1)) {
        return false;
      }
      // 소수점 이하 두자리 체크
      // if (this.value !== '' && this.value.indexOf('.') > -1 && this.value.split('.')[1].length > 2) {
      //   return false;
      // }

      return true;
    },
    // text input 이벤트 ====================================
    onFocus(event) {
      this.isFocus = true;
    },
    onBlur(event) {
      this.isFocus = false;
    },
    onInput(event) {
      const currVal = event.currentTarget.value;
      this.prevValue = currVal;
      this.position = event.currentTarget.selectionStart;
      let targetValue = this.$rayui.utils.removeRegExp(currVal);
      this.formatedValue = this.processFormatting(targetValue, this.format);
      this.$emit('input', this.formatedValue);
    },
    onKeypress(event) {
      if (this.type === 'number' && this.format === 'currency') {
        // 통화 숫자만 입력 체크
        if (!this.onlyForCurrency(event)) {
          event.preventDefault();
        }
      }
    },
  },
};
</script>
