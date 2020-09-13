<template>
  <div class="ui-accordions-container">
    <div class="ui-accordions">
      <div class="ui-accordion">
        <div class="ui-accordion-header">
          <h2 class="ui-accordion-title">
            <a href="#accordion1" class="ui-accordion-toggle">
              title 1
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
              <span class="ui-accordion-toggle-icon" style="right: 8px; top: 45%; margin-right: 1rem !important;">
                <svg
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
        <div class="ui-accordion-collapse" style="display: none;">
          <div class="ui-accordion-collapse-body">내용 들어갈 부분</div>
        </div>
      </div>
      <div class="ui-accordion">
        <div class="ui-accordion-header">
          <h2 class="ui-accordion-title">
            <a href="#accordion1" class="ui-accordion-toggle">
              title 1
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
              <span class="ui-accordion-toggle-icon" style="right: 8px; top: 45%; margin-right: 1rem !important;">
                <svg
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
        <div class="ui-accordion-collapse" style="display: none;">
          <div class="ui-accordion-collapse-body">내용 들어갈 부분</div>
        </div>
      </div>
      <div class="ui-accordion">
        <div class="ui-accordion-header">
          <h2 class="ui-accordion-title">
            <a href="#accordion1" class="ui-accordion-toggle">
              title 1
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
              <span class="ui-accordion-toggle-icon" style="right: 8px; top: 45%; margin-right: 1rem !important;">
                <svg
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
        <div class="ui-accordion-collapse" style="display: none;">
          <div class="ui-accordion-collapse-body">내용 들어갈 부분</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ui-accordions-container {
  // TODO : font-size가 rem으로 되어있어서 root에 영향이 있으므로 추 후 조정이 필요할듯.
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 0.25rem;
  border-width: 0;
  background-color: #fff;
  position: relative;
  .ui-accordions {
    overflow-anchor: none;
    .ui-accordion {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.25rem;
      overflow: hidden;
      &:not(:first-of-type) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      &:not(:last-of-type) {
        border-bottom: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      .ui-accordion-header {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        border-bottom-color: transparent;
        background-color: #fff;
        padding: 0;
        border: 0px solid #fff;
        &:first-child {
          border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
        }
        .ui-accordion-title {
          font-size: 1rem;
          color: #106cb6;
          -ms-flex-positive: 1;
          flex-grow: 1;
          line-height: normal;
          margin-bottom: 0;
          .ui-accordion-toggle {
            display: block;
            width: 100%;
            text-align: left;
            border-width: 0;
            font-weight: 600;
            padding: 0.75rem 1.25rem 0.875rem;
            position: relative;
            overflow: hidden;
            text-decoration: none;
            .ui-accordion-toggle-icon {
              position: absolute !important;
              right: 0;
              top: 50%;
              padding-right: 3px !important;
              padding-left: 3px !important;
              -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
              transition: opacity 120ms, visibility 0s;
              transition-delay: 0s;
            }
          }
        }
      }
      .ui-accordion-collapse {
        .ui-accordion-collapse-body {
          &:last-child {
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
          }
        }
      }
    }
  }
}
</style>
