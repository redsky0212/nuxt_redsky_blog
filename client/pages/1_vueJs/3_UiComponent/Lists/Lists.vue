<template>
  <div>
    <div class="page-header">
      <h1>
        UI Lists
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          Lists 컴포넌트는 항목을 하나 또는 여러 개 선택할 수 있는 다양한 레이아웃의 목록을 표현합니다.
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <h3 class="header smaller bolder green">Ui Lists</h3>

            <div class="alert alert-info hidden-sm hidden-xs">
              <button type="button" class="close" data-dismiss="alert">
                <i class="ace-icon fa fa-times"></i>
              </button>
              <i class="ace-icon fa fa-check bigger-110 green"></i>
              <span class="bolder">참조링크</span><br />
              <span class="blue bolder">Vuetify 참조 : </span>
              <a href="https://vuetifyjs.com/ko/components/lists/" target="_blank">https://vuetifyjs.com/ko/components/lists/</a>
              <br />
              <span class="blue bolder">Kendo UI listview 참조 : </span>
              <a href="https://www.telerik.com/kendo-vue-ui/components/listview/listview/selection/" target="_blank">https://www.telerik.com/kendo-vue-ui/components/listview/listview/selection/</a>
              <br />
              <span class="blue bolder">웹접근성 지침!! : </span>
              <a href="https://www.wah.or.kr:444/Participation/guide.asp" target="_blank">https://www.wah.or.kr:444/Participation/guide.asp</a>
              <br />
              <span class="blue bolder">참조 할만한 다른 listview컴포넌트 : </span>
              <a href="https://www.syncfusion.com/vue-ui-components/vue-listview" target="_blank">https://www.syncfusion.com/vue-ui-components/vue-listview</a>
              <br />
            </div>

            <div class="widget-box">
              <div class="widget-header">
                <h4 class="smaller">
                  <b>기본 사용방법</b>
                  <small>전역 공통 <span class="label">ui-lists</span> 컴포넌트</small>
                </h4>
              </div>

              <div class="widget-body">
                <div class="widget-main">
                  <div class="row">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <b>템플릿에 <span class="bolder green">&lt;ui-lists&gt;</span>컴퍼넌트를 삽입해서 사용.</b>
                          <br />
                          <p><span class="bolder green">&lt;ui-...&gt;</span>의 개수와 <span class="bolder green">&lt;ui-...&gt;</span>의 개수 index가 짝지어져 각각의 탭이 열립니다.</p>
                          <div style="border: 1px solid #e2e2e2;">
                            <ui-tabs>
                              <ui-tab>Source</ui-tab>
                              <ui-tab>Demo</ui-tab>
                              <ui-tabpanel>
                                <pre class="prettyprint linenums">
  &lt;template&gt;
    &lt;div&gt;
      &lt;ui-lists :data="listData"&gt;&lt;/ui-lists&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;script&gt;
  export default {
    data() {
      return {
        listsData: {
          title: '타이틀',
          content: [{ title: '컨텐츠1' }, { title: '컨텐츠2' }, { title: '컨텐츠3' }],
        },
      };
    },
  };
  &lt;/script&gt;
                                </pre>
                              </ui-tabpanel>
                              <ui-tabpanel>
                                <div class="title">기본 형태</div>
                                <ui-lists>
                                  <ui-lists-title v-if="listsData.title" class="list-title">
                                    <span v-html="listsData.title"></span>
                                  </ui-lists-title>
                                  <ui-lists-item v-for="(item, index) in listsData.content" :key="index" class="list-content">
                                    <span v-html="item.title"></span>
                                  </ui-lists-item>
                                </ui-lists>

                                <div class="title">체크 박스 포함 형태</div>
                                <ui-lists>
                                  <ui-lists-item v-for="(item, index) in listsData2.content" :key="index" class="list-content">
                                    <div class="item-container" @click="onClickContainer">
                                      <div class="item-checkbox"><input type="checkbox" :item-title="item.title" :item-value="item.value" @click.stop="onClickCheckbox" /></div>
                                      <div class="item-title">{{ item.title }}</div>
                                    </div>
                                  </ui-lists-item>
                                </ui-lists>

                                <div class="title">복합 컨텐츠 형태</div>
                                <ui-lists>
                                  <ui-lists-item v-for="(item, index) in listsData2.content" :key="index" class="list-content">
                                    <div class="item-container2">
                                      <div class="item-image">
                                        <img :src="item.url" />
                                      </div>
                                      <div class="item-container2-sub">
                                        <div class="item-title">{{ item.title }}</div>
                                        <div class="item-subtitle">{{ item.subtitle }}</div>
                                      </div>
                                    </div>
                                  </ui-lists-item>
                                </ui-lists>
                              </ui-tabpanel>
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
                  <small>ui-selects의 속성</small>
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
                              <b class="text-success lead">...</b>
                              <p class="alert alert-success">
                                ....<br />
                                <b>타입: </b> ...<br />
                                <b>기본값: </b> ...<br />
                              </p>
                              <div style="border: 1px solid #e2e2e2;">
                                <ui-tabs>
                                  <ui-tab>Source</ui-tab>
                                  <ui-tab>Demo</ui-tab>
                                  <ui-tabpanel>
                                    <pre class="prettyprint linenums">
  &lt;template&gt;
    &lt;div&gt;
      &lt;ui-lists :data="listData"&gt;&lt;/ui-lists&gt;
    &lt;/div&gt;
  &lt;/template&gt;
                                    </pre>
                                  </ui-tabpanel>
                                  <ui-tabpanel>
                                    <div class="thumbnail">
                                      ...
                                    </div>
                                  </ui-tabpanel>
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
      testPluginVal: '',
      listsData: {
        title: '<b>타이틀</b>',
        content: [
          { title: '컨텐츠1<br>HTML 사용', value: '1' },
          { title: '<b>컨텐츠2</b>', value: '2' },
          { title: '컨텐츠3', value: '3' },
        ],
      },
      listsData2: {
        title: '타이틀2',
        content: [
          {
            title: '컨텐츠1',
            value: '1',
            subtitle: '서브컨텐츠1',
            url:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZWNjMDk7fS5jbHMtMntmaWxsOiMxYTE4MTg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1MCIgY3k9IjUwIiByPSIzMC4zNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1LjMzIDIyLjk0KSByb3RhdGUoLTIyLjUpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTAsOS42NUE0MC4zNSw0MC4zNSwwLDEsMCw5MC4zNSw1MCw0MC4zOSw0MC4zOSwwLDAsMCw1MCw5LjY1Wm0wLDcwLjdBMzAuMzUsMzAuMzUsMCwxLDEsODAuMzUsNTAsMzAuMzksMzAuMzksMCwwLDEsNTAsODAuMzVaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSI2MS4wMiIgY3k9IjQyLjMzIiByPSI1LjUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMiIgY3g9IjM4Ljk4IiBjeT0iNDIuMzMiIHI9IjUuNSIvPjwvc3ZnPg==',
          },
          {
            title: '컨텐츠2',
            value: '2',
            subtitle: '서브컨텐츠2',
            url:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZWNjMDk7fS5jbHMtMntmaWxsOiMxYTE4MTg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1MCIgY3k9IjUwIiByPSIzMC4zNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1LjMzIDIyLjk0KSByb3RhdGUoLTIyLjUpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTAsOS42NUE0MC4zNSw0MC4zNSwwLDEsMCw5MC4zNSw1MCw0MC4zOSw0MC4zOSwwLDAsMCw1MCw5LjY1Wm0wLDcwLjdBMzAuMzUsMzAuMzUsMCwxLDEsODAuMzUsNTAsMzAuMzksMzAuMzksMCwwLDEsNTAsODAuMzVaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSI2MS4wMiIgY3k9IjM5LjMzIiByPSI1LjUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMiIgY3g9IjM4Ljk4IiBjeT0iMzkuMzMiIHI9IjUuNSIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgaGVpZ2h0PSIxMCIgd2lkdGg9IjMwLjU1IiB4PSIzNC43MyIgeT0iNTUuNzkiLz48L3N2Zz4=',
          },
          {
            title: '컨텐츠3',
            value: '3',
            subtitle: '서브컨텐츠3',
            url:
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxYTE4MTg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI2MS4wMiIgY3k9IjQyLjMzIiByPSI1LjUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjM4Ljk4IiBjeT0iNDIuMzMiIHI9IjUuNSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUwLDkuNjVBNDAuMzUsNDAuMzUsMCwxLDAsOTAuMzUsNTAsNDAuMzksNDAuMzksMCwwLDAsNTAsOS42NVptMCw3MC43QTMwLjM1LDMwLjM1LDAsMSwxLDgwLjM1LDUwLDMwLjM5LDMwLjM5LDAsMCwxLDUwLDgwLjM1WiIvPjwvc3ZnPg==',
          },
        ],
      },
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
    onClickCheckbox(event) {
      var target = event.currentTarget;
      if (!target) {
        return;
      }
      var checked = target.checked;
      if (!checked) {
        return;
      }
      var title = target.getAttribute('item-title');
      var value = target.getAttribute('item-value');
      this.$rayui.alert('value : ' + value + '<br>title : ' + title);
    },
    onClickContainer(event) {
      var target = event.currentTarget;
      if (!target) {
        return;
      }
      var cbxObj = target.querySelector('.item-checkbox').children[0];
      cbxObj.click();
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  font-size: 16px;
  padding-top: 30px;
}
.title:first-child {
  padding-top: 0px;
}
.list-title {
  padding: 3px 3px;
  // font-weight: bold;
  background: #438eb9;
  color: white;
}
.list-content {
  border-top: 1px solid #aaaaaa;
  padding: 3px 3px;
}
.list-content:last-child {
  border-bottom: 2px solid #888888;
}
.list-content:hover {
  background-color: #eeeeee;
}

.item-container {
  display: flex;
  flex-direction: row;
  .item-checkbox {
    flex-shrink: 0;
    width: 50px;
    text-align: center;
  }
  .item-title {
    flex-grow: 1;
  }
}
.item-container2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  .item-image {
    flex-shrink: 0;
    width: 100px;
    text-align: center;
  }
  .item-container2-sub {
    flex-grow: 1;
    .item-title {
      font-size: 14px;
      font-weight: bold;
    }
    .item-subtitle {
      color: gray;
    }
  }
}
</style>
