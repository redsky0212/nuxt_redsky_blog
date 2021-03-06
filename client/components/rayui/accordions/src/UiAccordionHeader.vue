<template>
  <div class="ui-accordion-header">
    <h2 class="ui-accordion-title">
      <a
        :href="`#${contentId}`"
        :idx="accordionIndex"
        class="ui-accordion-toggle"
        :id="headerId"
        role="button"
        :aria-controls="contentId"
        :aria-expanded="isExpand"
        @click.prevent="onClick"
        @keyup.space="onClick"
      >
        <slot></slot>
        <span class="ui-accordion-toggle-icon" style="margin-right: 1rem !important;">
          <svg
            enable-background="new 0 0 24 24"
            x="0"
            y="0"
            width="26px"
            height="26px"
            version="1.0"
            viewBox="0 0 24 24"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <circle cx="11" cy="11" r="10" stroke="#d8d9da" stroke-width="1" fill="none" />
          </svg>
        </span>
        <span class="ui-accordion-toggle-icon" style="right: 8px; top: 48%; margin-right: 1rem !important;">
          <svg
            class="toggle-arrow-down"
            enable-background="new 0 0 24 24"
            x="0"
            y="0"
            width="12px"
            height="12px"
            version="1.0"
            viewBox="0 0 24 24"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <polyline fill="none" points="21,8.5 12,17.5 3,8.5 " stroke="#000000" stroke-miterlimit="10" stroke-width="3" />
          </svg>
        </span>
      </a>
    </h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      g_accordionsStatusValue: this.$rayui.accordionsStatusValue,
      accordionIndex: this.$attrs.accordionIdx,
    };
  },
  computed: {
    headerId: function () {
      return `ui-accordion-header-${this.g_accordionsStatusValue.key}-${this.accordionIndex}`;
    },
    contentId: function () {
      return `ui-accordion-content-${this.g_accordionsStatusValue.key}-${this.accordionIndex}`;
    },
    // 전역 accordion 변수의 selectedIndex값 가져오기
    selectedIndex: function () {
      return this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].selectedIndex;
    },
    // 전역 accordion 변수의 multiSelect값 가져오기
    multiSelect: function () {
      return this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].multiSelect;
    },
    // 전역 accordion 변수의 contentList값 가져오기
    contentList: function () {
      return this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].contentList;
    },
    isExpand: function () {
      if (this.multiSelect) {
        return this.contentList[this.accordionIndex].expanded;
      } else {
        if (String(this.accordionIndex) === this.selectedIndex) {
          return 'true';
        } else {
          return 'false';
        }
      }
    },
  },
  methods: {
    setSelectedIndex(value) {
      this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].selectedIndex = value;
    },
    // 멀티선택 옵션을 적용했을때 선택값 전역변수에 저장하기
    setContentList(currentIdx) {
      const contentList = this.contentList;
      const selectVal = this.selectedIndex;
      let select = true;

      if (this.$rayui.utils.isArray(selectVal)) {
        selectVal.some((item, index) => {
          const idx = Number(item);
          if (this.$rayui.utils.isNumber(idx)) {
            if (idx === currentIdx) {
              selectVal.splice(index, 1);
              select = false;
            }
          }
        });
        if (select) {
          selectVal.push(currentIdx);
        }
        this.setSelectedIndex(selectVal);
        this.setContentExpanded();
      }
    },
    // 멀티선택 옵션을 적용했을때를 위하여 전역에 contentList값을 셋팅해서 관리한다.
    setContentExpanded() {
      const contentList = this.$rayui.accordionsStatusValue.list[this.$attrs.accordionsIdx].contentList;

      if (this.multiSelect) {
        if (this.$rayui.utils.isArray(this.selectedIndex)) {
          contentList.some((item) => {
            item.expanded = false;
          });
          this.selectedIndex.some((item) => {
            const idx = Number(item);
            if (this.$rayui.utils.isNumber(idx)) {
              if (contentList[idx]) {
                contentList[idx].expanded = true;
              }
            }
          });
        }
      }
    },
    // UiAccordions의 이벤트 목록 ===========================
    // accordion header클릭 이벤트
    onClick(event) {
      const idx = event.currentTarget.getAttribute('idx');

      if (this.multiSelect) {
        this.setContentList(Number(idx));
      } else {
        // 선택 되어있지 않은 경우 선택하여 펼치기
        if (this.selectedIndex === '') {
          this.setSelectedIndex(idx);
        } else {
          // 이미 선택 되어있는 아코디언 index와 현재 선택한 index가 같다면 숨기기
          if (this.selectedIndex === idx) {
            this.setSelectedIndex('');
            // 이미 선택 되어있는 아코디언 index와 현재 선택한 index가 다르다면 현재선택한 index를 펼치기
          } else {
            this.setSelectedIndex(idx);
          }
        }
      }
    },
  },
};
</script>
