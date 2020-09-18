<template>
  <div class="ui-input ui-text-input-container">
    <div class="ui-text-input-control">
      <div class="ui-text-input-input">
        <div class="ui-text-input-wrapper">
          <label for="inputid" class="ui-text-input-label" style="left: 0; right: auto; position: absolute;">label</label>
          <input id="inputid" type="text" />
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
      key: 0,
    };
  },
};
</script>
