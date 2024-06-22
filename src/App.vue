<!-- untuk html -->
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <br>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>
  <br>
  <RouterView />
</template>

<!-- untuk JS -->
<script>
  // import Home from './pages/Home.vue'
  // import Counter from './pages/Counter.vue'
  // untuk kasih nama pada APP
  export default {
    name: "App",  
  };
</script>

<!-- untuk CSS (scoped = hanya beralku dihalaman ini saja)-->
<style>

</style>