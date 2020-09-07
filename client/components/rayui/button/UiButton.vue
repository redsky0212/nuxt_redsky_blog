<template>
  <div>
    <a v-if="type === 'type1'" class="button green" @mouseover="buttonEnter" @mouseout="buttonLeave" @click="onClick">
      <svg viewBox="0 0 180 60">
        <path
          d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z"
        />
      </svg>
      <span>
        <slot></slot>
      </span>
    </a>
    <button v-else-if="type === 'type2'" @click="onClick" class="ui-btn ui-btn-1 ui-btn-1a ui-btn-size-default" :class="classObject">
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { buttonEnter, buttonleave } from '~/components/rayui/button/src/animate';

export default {
  props: {
    full: {
      type: Boolean,
      default: false,
    },
    /**
     * UiButton의 클릭 이벤트
     * @type {Function}
     */
    onclickTest: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      type: 'type2',
      classObject: {
        'ui-btn-full': this.full,
      },
    };
  },
  methods: {
    buttonEnter(event) {
      const buttonPath = event.currentTarget.querySelector('path');
      const buttonSpan = event.currentTarget.querySelector('span');
      buttonEnter(buttonPath, buttonSpan);
    },
    buttonLeave(event) {
      const buttonPath = event.currentTarget.querySelector('path');
      const buttonSpan = event.currentTarget.querySelector('span');
      buttonleave(buttonPath, buttonSpan);
    },
    onClick(event) {
      this.$emit('onclick', event);
    },
  },
};
</script>

<style lang="scss" scoped>
// type1 ===================================
a {
  text-align: center;
  &.button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180px;
    height: 60px;
    text-decoration: none;
    cursor: default;
    margin: 0 auto;

    svg {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      stroke-width: 1.5;
      fill: none;
      fill-rule: evenodd;
      stroke: currentColor;
    }
  }
  &.green {
    color: #3eb373;
  }
}

// type2 ====================================
button {
  appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(buttontext, rgb(170, 170, 170));
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(74, 74, 74));
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
  border-image: initial;

  &.ui-btn {
    border: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 0;
    display: inline-block;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  &.ui-btn:after {
    content: '';
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  /* Pseudo elements for icons */
  .ui-btn:before,
  .icon-heart:after,
  .icon-star:after,
  .icon-plus:after,
  .icon-file:before {
    font-family: 'icomoon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    position: relative;
    -webkit-font-smoothing: antialiased;
  }

  /* Button width */
  &.ui-btn-full {
    // display: flex;
    // flex: 1 0 auto;
    min-width: 100% !important;
    max-width: auto;
  }

  /* Button Size */
  &.ui-btn-size-default {
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
  }

  /* Button 1 */
  &.ui-btn-1 {
    color: #fff;
    background: #226fbe;
    -webkit-transition: none;
    -moz-transition: none;
    transition: none;
  }

  &.ui-btn-1:active {
    top: 2px;
  }

  /* Button 6a */
  &.ui-btn-1a {
    border: 4px solid #226fbe;
  }

  &.ui-btn-1a:hover {
    opacity: 0.95;
    // background: transparent;
    // color: #226fbe;
  }

  /* Button 6b */
  &.ui-btn-1b {
    border: 4px solid #226fbe;
    border-radius: 4px;
  }

  &.ui-btn-1b:hover {
    opacity: 0.95;
    // background: transparent;
    // color: #226fbe;
  }

  /* Button 6c */
  &.ui-btn-1c {
    border: 4px solid #226fbe;
    border-radius: 60px;
  }

  &.ui-btn-1c:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6d */
  &.ui-btn-1d {
    border: 2px dashed #226fbe;
  }

  &.ui-btn-1d:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6e */
  &.ui-btn-1e {
    border: 2px dashed #226fbe;
    border-radius: 15px;
  }

  &.ui-btn-1e:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6f */
  &.ui-btn-1f {
    border: 2px dashed #226fbe;
    border-radius: 60px;
  }

  &.ui-btn-1f:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6g */
  &.ui-btn-1g {
    border: 2px dotted #226fbe;
  }

  &.ui-btn-1g:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6h */
  &.ui-btn-1h {
    border: 2px dotted #226fbe;
    border-radius: 15px;
  }

  &.ui-btn-1h:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6i */
  &.ui-btn-1i {
    border: 2px dotted #226fbe;
    border-radius: 60px;
  }

  &.ui-btn-1i:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6j */
  &.ui-btn-1j {
    border: 4px double #226fbe;
  }

  &.ui-btn-1j:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6k */
  &.ui-btn-1k {
    border: 4px double #226fbe;
    border-radius: 15px;
  }

  &.ui-btn-1k:hover {
    background: transparent;
    color: #226fbe;
  }

  /* Button 6l */
  &.ui-btn-1l {
    border: 4px double #226fbe;
    border-radius: 60px;
  }

  &.ui-btn-1l:hover {
    background: transparent;
    color: #226fbe;
  }
}
</style>
