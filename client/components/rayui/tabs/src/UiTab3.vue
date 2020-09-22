<template>
  <div class="ui-tabs-item" id="tabpanelId" role="tabpanel" aria-labelledby="tabId">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['type'],
};
</script>
