<template>
  <div class="ui-accordion-header">
    <h2 class="ui-accordion-title">
      <a href="#ac1" class="ui-accordion-toggle" id="ah1" role="button" aria-controls="ac1" aria-expanded="false" @click="onClick">
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
</template>
<script>
export default {
  methods: {
    onClick(event) {},
  },
};
</script>
