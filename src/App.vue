<template>
  <div class="app-main">
    <LayoutHeader/>
    <div class="app-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import LayoutHeader from './components/layout/LayoutHeader.vue';
  
  export default defineComponent({
    components: {
      LayoutHeader,
    }
  })
</script>