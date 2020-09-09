<template>
  <div class="ui-tabs">
    <div class="ui-tabs-bar" role="tablist">
      <div class="ui-tabs-bar-slide-group-prev">prev</div>
      <div class="ui-tabs-bar-slide-group-wrapper">
        <div class="ui-tabs-bar-slide-group-content">
          <div class="ui-tabs-bar-slide-wrapper">
            <div class="ui-tabs-bar-slider"></div>
          </div>
          <a href="#tab-1" id="tab1" aria-selected="true" role="tab" aria-controls="tab-1" class="ui-tab ui-tab-active">Tab 1</a>
          <a href="#tab-2" id="tab2" aria-selected="false" role="tab" aria-controls="tab-2" class="ui-tab">Tab 2</a>
        </div>
      </div>
      <div class="ui-tabs-bar-slide-group-next">next</div>
    </div>
    <div class="ui-tabs-items">
      <div class="ui-tabs-items-container">
        <div class="ui-tabs-item ui-tabs-item-active" id="tab-1" role="tabpanel" aria-labelledby="tab1">tab 1 item</div>
        <div class="ui-tabs-item" id="tab-2" role="tabpanel" aria-labelledby="tab2">tab 1 item</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.ui-tabs {
  flex: 1 1 auto;
  width: 100%;
  .ui-tabs-bar {
    border-radius: inherit;
    height: 48px;
  }
}
</style>
