<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">{{ msg }}</div>
          <div class="modal-body">팝업 테스트</div>
          <div class="modal-footer">
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
      this.$popupManager.close(this);
    },
  },
};
</script>
