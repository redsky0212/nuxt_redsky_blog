<template>
  <transition name="modal">
    <div class="modal-mask g-popup-mask">
      <div class="modal-wrapper g-popup-centered">
        <div class="modal-container shadow border-none radius-2">
          <div class="modal-header">{{ msg }}</div>
          <div class="modal-body text-center">팝업 테스트</div>
          <div class="modal-footer bg-white justify-content-between">
            <button class="modal-default-button" @click="close">확인</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Alert',
  props: ['msg'],
  data() {
    return {
      isShowModal: false,
      title: '알림',
      message: '',
    };
  },
  methods: {
    show(title, message) {
      this.isShowModal = true;
      this.title = title;
      this.message = message;
    },
    close() {
      this.isShowModal = false;
      this.$PM.close(this);
    },
  },
};
</script>
