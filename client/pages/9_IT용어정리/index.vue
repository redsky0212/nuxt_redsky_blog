<template>
  <div>
    <div class="page-header">
      <h1>
        용어 정리
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          잡다구리 모든 용어 이해하기.
        </small>
      </h1>
    </div>
    <!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        <!-- PAGE CONTENT BEGINS -->
        <div class="row">
          <div class="col-xs-12">
            <div class="media search-media">
              <div class="media-body">
                <div>
                  <h4 class="media-heading">
                    <a href="#" class="blue">Media heading</a>
                  </h4>
                </div>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis ...</p>
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
