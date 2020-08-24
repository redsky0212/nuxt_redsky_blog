<template>
  <div>
    <div class="page-header">
      <h1>
        현대카드 앱 3.0
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          현대카드 앱 3.0 (2019.01.02 ~ 2020.08.31) 8개월
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3>현대카드 3.0</h3>
            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <span class="blue bolder">
                Vue-CLI, VueJs 2, TypeScript, vue-property-decorator, tslint vuex, vuex-class, vue-router, axios
              </span>
            </div>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  프로젝트 느낌, 경험 메모 단순 나열
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>VueJs 첫 프로젝트</b>
                        </li>
                        <li>
                          <b>코로나</b>
                        </li>
                        <li>
                          <b>VDI업무pc, MAC장비</b>
                          <p>vdi업무pc는 그나마 빨리 지급이 되지만 mac은 2주걸림.</p>
                        </li>
                        <li>
                          <b>모바일 메모리 이슈</b>
                          <p>하이브리드 앱 개발시 ios웹뷰에서 메모리가 1기가가 넘어가면 웹뷰가 초기화 되버리는 현상이 있었음.</p>
                        </li>
                        <li>
                          <b>웹 접근성</b>
                          <p>웹 접근성을 고려한 컴포넌트 코딩, 프로젝트 개발 시작전에 미리 인지 하고 있어야 하며 필수 사항임.</p>
                        </li>
                        <li>
                          <b>TypeScript적용</b>
                          <p>TypeScript코딩 시 javascript로 했을때와 차이, 장단점?</p>
                          <p>vue-property-decorator, class, 데코레이터 방식의 코딩</p>
                        </li>
                        <li>
                          <b>ssr은 고려되지 않음.</b>
                          <p>ssr, csr에 따른 seo(search engine optimization)를 생각해볼 필요가 있음.</p>
                          <p>SPA장단점</p>
                          <ul>
                            <li>자연스러운 사용자경험(UX)</li>
                            <li>async API를통한 필요한 리소스만 부분적으로 로딩(성능)</li>
                            <li>서버에서의 템플릿연산을 클라이언트로 분산(성능)</li>
                            <li>컴포넌트형태 개발 용이(생산성)</li>
                            <li>mobile app 개발 시 API로 공통화 설계 가능</li>
                            <li>JS파일의 번들링으로 인해 사이즈가 커져서 초기 로딩 구동 속도가 느림(webpack code splitting으로 개선가능)</li>
                            <li>검색엔진최적화(SEO)가 어려움(SSR, nuxt등으로 해결가능)</li>
                            <li>nuxt사용 시 nodejs필요</li>
                            <li>보안이슈 (비즈니스 로직이 프론트에 있을때) (프론트 비즈니스 로직의 최소화)</li>
                          </ul>
                          <p>MPA (ssr) 장단점</p>
                          <ul>
                            <li>검색엔진최적화 (SEO)</li>
                            <li>페이지 이동시 깜빡임 (UX)</li>
                            <li>페이지 이동시 불필요한 탬플릿도 중복해서 로딩 (성능)</li>
                            <li>서버 렌더링에 따른 부하(성능)</li>
                            <li>모바일 앱 개발 시 추가적인 백엔드 작업 필요(생산성)</li>
                          </ul>
                        </li>
                        <li>
                          <b> </b>
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
                  API사용 구조 정리
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>화면부분</b>
                          <pre class="prettyprint linenums">
&lt;template&gt;
 &lt;div&gt;API 사용 구조 정리&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import {Vue, Component, Mixins, Watch, Ref} from 'vue-property-decorator';
// api
import {Action, State, namespace} from 'vuex-class';
const Customer = namespace('common/customer');
import {IResponseError} from '@/API/commonInterface';
import {CustomerActions} from '@/store/Common/customer/actionConstructor';
import {SCTAI000} from '@/API/Common/interface/customer';

@Component({
  name: '파일명',
  components: {
    컴포넌트1,
  }
})
export default class 클래스명 extends Mixins(BaseviewMixin) {
  @Ref('term-full-popup') private readonly termFullPopup!: ITermFullPopup;
  @Customer.State('iqryTpList') private iqryTpList!: [];
  @Customer.Action(CustomerActions.SCT000)
  private regActionAPI!: (data: SCT000.Request) => Promise&lt;SCT000.Response&gt;;

  private onClick() {
    const form: SCT000.Request = {
      a: '',
      b: '',
    };
    this.regActionAPI(form)
    .then((res) => {
      // 성공
    })
    .catch((err: IResponseError) => {
      // 실패
    });
  }
}
&lt;/script&gt;</pre
                          >
                        </li>
                        <li>
                          <b>Action file</b>
                          <pre class="prettyprint linenums">
import {
  SCT000,
} from '@/API/Common/interface/customer';

export const enum CustomerActions {
  SCT000 = 'SCT000',
}

const actionConstructor: ActionConstructor&lt;CustomerState, CustomerActions&gt; = (api) => {
  return {
    [CustomerActions.SCT000](store, data: SCT000.Request) {
      return new Promise((resolve, reject) => {
        const reqConfig = makeRequestConfig&lt;SCT000.Request&lt;true&gt;&gt;(
          URL.SCT000,
          data,
        );
        api.instance.request&lt;IResponse&lt;SCT000.Response&lt;true&gt;&gt;&gt;(reqConfig)
        .then(
          // 추가
          resolve(res.data);
        )
        .catch((error: IResponseError) => {
          // 에러추가
          reject(error);
        });
      })
    }
  };
};

export default actionConstructor;</pre
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
