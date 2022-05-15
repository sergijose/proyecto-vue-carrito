<template>
  <div id="app">
  <MenuPrincipal></MenuPrincipal>
   <HeaderPrincipal></HeaderPrincipal>

   <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   <CardProducto></CardProducto>
                   
                </div>
            </div>
        </section>
  </div>
</template>

<script>

import MenuPrincipal from './components/MenuPrincipal.vue'
import HeaderPrincipal from './components/HeaderPrincipal.vue'
import CardProducto from './components/CardProducto.vue'

export default {
  name: 'App',
  components: {
    MenuPrincipal,HeaderPrincipal,CardProducto
  }
}
</script>

<style>

</style>
