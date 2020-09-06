<template>
  <transition name="modal">
    <div class="modal-mask g-popup-mask">
      <div class="modal-wrapper g-popup-centered">
        <div class="modal-container shadow border-none radius-2" :class="[modalAnimate]" @animationend="animationend">
          <div class="modal-header" v-if="title" v-html="title"></div>
          <div class="modal-body text-center" v-html="msg"></div>
          <div class="modal-footer bg-white justify-content-between">
            <button class="modal-default-button rayui-styled rayui-confirm" @click="close">확인</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Alert',
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
    close() {
      this.modalAnimate = 'modal-close';
    },
    animationend(event) {
      if (this.modalAnimate === 'modal-close') {
        event.currentTarget.style.opacity = 0;
        this.$rayui.alert().close(this);
      }
    },
  },
};
</script>
