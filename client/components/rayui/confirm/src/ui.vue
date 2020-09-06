<template>
  <transition name="modal">
    <div class="modal-mask g-popup-mask">
      <div class="modal-wrapper g-popup-centered">
        <div class="modal-container shadow border-none radius-2" :class="[modalAnimate]" @animationend="animationend">
          <div class="modal-header" v-if="title" v-html="title"></div>
          <div class="modal-body text-center" v-html="msg"></div>
          <div class="modal-footer bg-white justify-content-between">
            <button class="modal-default-button rayui-styled rayui-confirm" @click="onOk">확인</button>
            <button class="modal-default-button rayui-styled rayui-confirm" @click="onCancel">취소</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    /**
     * alert에 표시될 내용 문구를 입력합니다.
     * @type {String||''}
     */
    msg: {
      type: String,
      default: '',
    },
    /**
     * alert에 표시될 타이틀 문구를 입력합니다.
     * @type {String||''}
     */
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      message: '',
      modalAnimate: 'modal-show',
      vm: this,
    };
  },
  created() {
    this.modalAnimate = 'modal-show';
    // window.setTimeout(() => {
    //   this.modalAnimate = 'modal-close';
    // }, 3000);
    this.vm = this;
    console.log('this ---> ', this);
  },
  methods: {
    onOk() {
      this.result = true;
      this.modalAnimate = 'modal-close';
    },
    onCancel() {
      this.result = false;
      this.modalAnimate = 'modal-close';
    },
    animationend(event) {
      if (this.modalAnimate === 'modal-close') {
        event.currentTarget.style.opacity = 0;
        this.$rayui.confirm().close(this, this.result);
      }
    },
  },
};
</script>
