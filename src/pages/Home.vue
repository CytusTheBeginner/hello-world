<!-- untuk html -->
<template>
    Hello my name is {{ name }}
    <h3>{{ alamat }}</h3>
    <h3>{{ kota }}</h3>
</template>
  
<!-- untuk JS -->
<script>
// untuk kasih nama pada APP
    export default {
      name: "Home",
      // shorthand functions return a value on JS
      data: () => ({
          name: "Hendri",
          alamat: "Jalan Pompa Air No.28",
          kota: "Tanjungpinang"
      })
    }
</script>
  
<!-- untuk CSS (scoped = hanya beralku dihalaman ini saja)-->
<style>
  
</style>