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
  props: ['msg', 'title'],
  data() {
    return {
      message: '',
      modalAnimate: 'modal-show',
      result: null,
      vm: this,
    };
  },
  mounted() {
    this.modalAnimate = 'modal-show';
    this.result = null;
    this.vm = this;
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
