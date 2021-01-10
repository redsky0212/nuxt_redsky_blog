<template>
  <div>
    <div class="page-header">
      <h1>
        NH농협
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          jsp개발 개인종합자산관리서비스(PFM) (2020.10.08 ~ 2020.12.23) 2개월15일
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3 class="header smaller bolder green">투입전 정리</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">참조링크</span><br />
              <span class="blue bolder">jsp 기초강좌 : </span>
              <a href="http://blog.naver.com/PostView.nhn?blogId=ecjjmrikqo&logNo=40196155537&parentCategoryNo=&categoryNo=61&viewDate=&isShowPopularPosts=true&from=search" target="_blank">
                http://blog.naver.com/PostView.nhn?blogId=ecjjmrikqo&logNo=40196155537&parentCategoryNo=&categoryNo=61&viewDate=&isShowPopularPosts=true&from=search
              </a>
              <br />
              <span class="blue bolder">jsp 강좌 : </span>
              <a href="https://www.linux.co.kr/jsp/" target="_blank">
                https://www.linux.co.kr/jsp/
              </a>
              <br />
            </div>

            <div class="alert alert-danger hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">추가 해야할 작업</span><br />
              <i class="ace-icon fa fa-angle-right bigger-110"></i>
              <span class="red" style="text-decoration: line-through;">ㅁㅁㅁ... </span>
              <br />
            </div>

            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>...</b>
                  <small>
                    <span class="label">...</span>
                    ...
                  </small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>... <span class="bolder green">&lt;...&gt;</span>...</b>
                          <br />
                          <p>
                            <span class="bolder green">&lt;...&gt;</span>
                            ...
                            <br />
                            <span class="bolder green">&lt;...&gt;</span>
                            ... <span class="bolder blue">...</span>...
                          </p>
                          <div style="border: 1px solid #e2e2e2;">
                            <ui-tabs selected-index="1">
                              <ui-tab title="Source">
                                <pre class="prettyprint linenums lang-html">
&lt;template&gt;
...
&lt;/template&gt;
&lt;script&gt;
...
&lt;/script&gt;
                                </pre>
                              </ui-tab>
                              <ui-tab title="Demo">
                                ...
                              </ui-tab>
                            </ui-tabs>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>API</b>
                  <small>...</small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <h4><b>Props</b></h4>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              <b class="text-success lead">value</b>
                              <p class="alert alert-success">
                                value설명 ... ...<br />
                                <b>타입: </b> String<br />
                                <b>기본값: </b> null<br />
                              </p>
                              <div style="border: 1px solid #e2e2e2;">
                                <ui-tabs>
                                  <ui-tab title="Source">
                                    <pre class="prettyprint linenums">
&lt;template&gt;
&lt;/template&gt;
                                    </pre>
                                  </ui-tab>
                                  <ui-tab title="Demo">
                                    ...
                                  </ui-tab>
                                </ui-tabs>
                              </div>
                              <hr />
                            </li>
                          </ul>
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
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // context.app.$testPlugin('asyncData 호출!');
  },
  data() {
    return {
      testValue: '',
      testValue2: '123',
      testValue3: 'abc',
      testValue4: '34242.4324',
      testValue5: '342424324',
      tabData: [
        { title: 'Home', content: 'Home panel' },
        { title: 'Profile', content: 'Profile panel' },
        { title: 'More', content: 'More panel' },
      ],
    };
  },
  mounted() {
    window.prettyPrint();
  },
  methods: {
    onOpen() {
      console.log('call this.$rayui.alert()');
      const opt = {
        title: 'alert 테스트 타이틀',
      };
      this.$rayui.alert('rayui의 alert열기 테스트 입니다.', opt).then((result) => {
        console.log('alert then --------->', result);
      });
    },
    onConfirm() {
      console.log('call this.$rayui.confirm()');
      const opt = {
        title: 'confirm 테스트 타이틀',
      };
      this.$rayui.confirm('rayui의 confirm 확인?', opt).then((result) => {
        console.log('confirm then --------->', result);
      });
    },
    onClickBtn(event) {
      this.$rayui.alert('버튼 클릭!' + event.currentTarget.tagName);
    },
  },
};
</script>
