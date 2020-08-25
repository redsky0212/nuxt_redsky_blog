<template>
  <div>
    <div class="page-header">
      <h1>
        Computed와 Method 차이
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          빈번하게 사용하는 코드를 함수로 만들어 사용할 수 있는 두가지 방법.
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3>Computed와 Method의 차이점은 무엇인가?</h3>

            <div class="widget-box">
              <div class="widget-header widget-header-flat">
                <h4 class="smaller">
                  Computed는 선언한 속성값의 변화가 있을때 호출되어 실행한다. Method는 항상 호출.
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>computed</b>
                          <pre class="prettyprint linenums">
&lt;div id="example"&gt;
  { { message1 } }
&lt;/div&gt;
&lt;script&gt;
data() {
  return {
    message: '',
  };
},
computed: {
  message1() {
    return this.message.split('').reverse().join('');
  }
}
&lt;/script&gt;
                          </pre>
                          <ul>
                            <li>message변수값이 변경이 없다면 캐싱(cache)처리가 되어 기존값이 바인딩 되어 <span class="blue bolder">빠른 속도로 렌더링</span> 된다.</li>
                          </ul>
                          <br />
                        </li>
                        <li>
                          <b>method</b>
                          <pre class="prettyprint linenums">
&lt;div id="example"&gt;
  { { message2() } }
&lt;/div&gt;
&lt;script&gt;
data() {
  return {
    message: '',
  };
},
methods: {
  message2() {
    return this.message.split('').reverse().join('');
  }
}
&lt;/script&gt;
                          </pre>
                          <ul>
                            <li>
                              method는 computed와는 다르게 호출시 항상 호출 된다.
                            </li>
                          </ul>
                          <br />
                        </li>
                        <li>
                          <b>마무리</b>
                          <br />
                          <span>캐싱을 잘 활용하면 빠른 성능을 기대할 수 있으므로 적절히 computed를 사용 하도록 하자.</span>
                          <br />
                          <span>물론 특정 함수를 실행하여 검증을 거쳐야 하는 로직이 있다면 Computed로 사용하면 안됨.</span>
                          <br />
                          함수 선언은 화살표함수로 하면 this가 달라지므로 <span class="red bolder">일반function()</span> 형태로 선언한다.
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
