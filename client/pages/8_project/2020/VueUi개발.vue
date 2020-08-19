<template>
  <div>
    <div class="page-header">
      <h1>
        Vue UI 개발 (개인 프로젝트)
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          VueJs를 이용한 UI 라이브러리 개발 (2019.08.19 ~ )
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3>UI라이브러리 개발 시 필요한 사항 정리</h3>
            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              UI개발 시 모바일용, web용 으로 나눌 필요가 있음.
              <span class="red bolder">모바일용</span>
              <span class="blue bolder">WEB용</span>
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  참조 사항
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>참조글</b><br />
                          <a href="https://vuejs-kr.github.io/jekyll/update/2017/01/13/vuejs-plugin/" target="_blank">VueJs플러그인 제작기</a><br />
                          <a href="https://jjong-factory.tistory.com/12" target="_blank">Vuejs + Cordova + OnsenUi 로 하이브리드 어플 개발기</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  (기존방식) named-slot (자식 컴포넌트의 slot에 name을 정해주고 부모에서 그 name으로 태그를 넣어주는 방법)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>부모 컴포넌트</b>
                          <pre class="prettyprint linenums">
&lt;div&gt;
  &lt;BaseModal&gt; &lt;!-- 자식 컴포넌트 호출 --&gt;
    &lt;template slot="header"&gt;  &lt;!-- template 태그는 현재태그를 화면에 보이고싶지 않을때 사용 --&gt;
      &lt;h1&gt;모달 제목&lt;/h1&gt;
      &lt;button&gt;닫기&lt;/button&gt;
    &lt;/template&gt;
    &lt;p slot="content"&gt;모달의 컨텐츠입니다.&lt;/p&gt;
  &lt;/BaseModal&gt;
&lt;/div&gt;</pre
                          >
                        </li>
                        <li>
                          <b>자식 컴포넌트 (BaseModal.vue)</b>
                          <pre class="prettyprint linenums">
&lt;div&gt;
  &lt;header&gt;
    &lt;slot name="header"&gt;
      &lt;strong&gt;기본 타이틀&lt;/strong&gt;
      &lt;button&gt;기본 버튼&lt;/button&gt;
    &lt;/slot&gt;
  &lt;/header&gt;
  &lt;div&gt;
    &lt;slot name="content"&gt;
      &lt;p&gt;기본 콘텐츠&lt;/p&gt;
    &lt;/slot&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre
                          >
                        </li>
                        <li>
                          <b>결과</b>
                          <pre class="prettyprint linenums">
&lt;div&gt;
  &lt;header&gt;
    &lt;h1&gt;모달 제목&lt;/h1&gt;
    &lt;button&gt;닫기&lt;/button&gt;
  &lt;/header&gt;
  &lt;div&gt;
    &lt;p&gt;모달의 컨텐츠입니다.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  (기존방식) slot-scope (자식 컴포넌트에서 데이터를 부모로 넘겨줘서 내부 element에서 그 데이터를 사용하는 방법)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>자식 컴포넌트</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              자식 컴포넌트의 childData라는 데이터 변수를 아래와 같이 hello라는 이름으로 넘겨준다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">
&lt;slot name="header" :hello="childData" :close="close"&gt;
    &lt;strong&gt;기본 타이틀&lt;/strong&gt;
    &lt;button&gt;기본 버튼&lt;/button&gt;
&lt;/slot&gt;</pre
                          >
                        </li>
                        <li>
                          <b>부모 컴포넌트</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              자식 컴포넌트에서 넘겨 받은 데이터를 slot-scop으로 아무 이름이나 정하여 적어준 다음 아무이름.childData 와 같은 방법으로 사용한다.
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">
&lt;div&gt;
  &lt;BaseModal&gt;
    &lt;template slot="header" slot-scope="slotProps"&gt;
      &lt;h1&gt;모달 제목&lt;/h1&gt;
      &lt;button @click="slotProps.close"&gt;닫기&lt;/button&gt;
      &#123;&#123; slotProps &#125;&#125; &lt;!-- { hello: 'hello' } --&gt;
    &lt;/template&gt;
    &lt;p slot="content"&gt;모달의 컨텐츠입니다.&lt;/p&gt;
  &lt;/BaseModal&gt;
&lt;/div&gt;</pre
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  ★(중요) v-slot (2.6.0부터 추가됨. 되도록이면 이 방법으로 사용하도록 권장.)
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>자식 컴포넌트는 변화 없음.</b>
                        </li>
                        <li>
                          <b>부모 컴포넌트</b>
                          <ul class="list-unstyled">
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              named-slot, slot-scope을 모두 합쳐놓은 방법
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              named-slot처럼 사용할때는 v-slot:header 나 축약된 형식 #header 이렇게 사용.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              slot-scope처럼 자식데이터를 넘겨받아 사용하고자 할때는 #header="slotProps" 이렇게 사용.
                            </li>
                            <li>
                              <i class="ace-icon fa fa-caret-right blue"></i>
                              '[]'을 사용하여 이름을 변수로 가져와 쓸 수 있다. #[변수명]
                            </li>
                          </ul>
                          <pre class="prettyprint linenums">
&lt;template&gt;
  &lt;div&gt;
    &lt;BaseModal&gt;
      &lt;template #header="slotProps"&gt; &lt;!-- #으로 단축해서 사용 --&gt;
        &lt;h1&gt;모달 제목&lt;/h1&gt;
        &lt;button @click="slotProps.close"&gt;닫기&lt;/button&gt;
        &#123;&#123; slotProps &#125;&#125; &lt;!-- { hello: 'hello' } --&gt;
      &lt;/template&gt;
      &lt;template #[slotName]&gt; &lt;!-- 동적인 슬롯명 사용 --&gt;
        &lt;p&gt;모달의 컨텐츠입니다.&lt;/p&gt;
      &lt;/template&gt;
    &lt;/BaseModal&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import BaseModal from '~/components/BaseModal.vue'
export default {
  components: {
    BaseModal
  },
  data() {
    return {
      slotName: 'content'
    }
  }
}
&lt;/script&gt;</pre
                          >
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
  data() {
    return {
      slotProps: '{{ slotProps }}',
      a: {},
    };
  },
  mounted() {
    window.prettyPrint();
    this.$set(this.a, 'b', 1);
  },
};
</script>
