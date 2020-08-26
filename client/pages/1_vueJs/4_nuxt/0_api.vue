<template>
  <div>
    <div class="page-header">
      <h1>
        NuxtJs API
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          참조 : <a href="https://ko.nuxtjs.org/api/context/" target="_blank">https://ko.nuxtjs.org/api/context/</a>
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3>Title</h3>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  context
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <button @click="onOpen">popupManager열기</button>
                        </li>
                        <li>
                          <b>....</b>
                          <pre class="prettyprint linenums">// ...</pre>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popup-anchor></popup-anchor>
  </div>
</template>

<script>
import popUi from '@/components/rayui/alert/src/ui.vue';

export default {
  mounted() {
    const a = '';
  },
  methods: {
    onOpen() {
      this.$popupManager.open(popUi, { msg: '팝업열기 테스트!' + Math.floor(Math.random() * (100 - 0 + 1)) + 0 });
    },
  },
};
</script>
