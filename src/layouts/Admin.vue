<template lang="">
  <div class="h-100">
    <Header />
    <div class="container-md vh-100">
      <div class="row gx-4 gy-2 h-100 mt-3 ">
        <div class="col-lg-8">
          <div class="bg-white h-100 border border-secondary-subtle rounded">
            Custom column padding
            <TrendItem />
            <TrendItem />
            <TrendItem />
            <TrendItem />
            <TrendItem />
            <TrendItem />
          
          </div>
        </div>
        <div class="col-lg-4">
          <div class="h-100 bg-white border border-secondary-subtle rounded">Custom column padding</div>
        </div>
      </div>
    </div>
    <RouterView> </RouterView>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import TrendItem from "../components/TrendItem.vue";
export default {
  components: {
    Header,
    TrendItem,
  },
};
</script>
<style scoped>
  .column-content-trend{
    height: 3rem;
  }
</style>
