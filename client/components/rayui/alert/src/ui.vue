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
  props: ['msg', 'title'],
  data() {
    return {
      message: '',
      modalAnimate: 'modal-show',
      vm: this,
    };
  },
  mounted() {
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
