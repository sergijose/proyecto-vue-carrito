<template>
  <div id="app">
    <MenuPrincipal
            :cart="cart"
    ></MenuPrincipal>
    <HeaderPrincipal></HeaderPrincipal>

    <section class="py-2">
      <div class="container px-2 px-lg-2 mt-2">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >
          <CardProducto
            v-for="product in products"
            :key="product.id"
            :product="product"
            @addItemToCart="updateCart"
          >
          </CardProducto>

        </div>
      </div>
    </section>

    <footer-principal></footer-principal>

  </div>
</template>

<script>
import axios from "axios";
import MenuPrincipal from "./components/MenuPrincipal.vue";
import HeaderPrincipal from "./components/HeaderPrincipal.vue";
import CardProducto from "@/components/CardProducto.vue";
import FooterPrincipal from "./components/FooterPrincipal.vue";

//import TablaProducto from './components/TablaProducto.vue';

export default {
  name: "App",
  components: {
    MenuPrincipal,
    CardProducto,
    HeaderPrincipal,
    FooterPrincipal,
   // ModalProducto,
    //TablaProducto
  },

  data: () => ({
    products: [],
    cart: []
  }),
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const res = await axios.get("./data/productos.json");
        // Guardar la data en el array products declarado más arriba:
        this.products = await res.data;
      } catch (err) {
        console.log(err);
      }
    },
    updateCart(productId,counter) {

  const productInCart = this.cart.find(product => product.id === productId)


  if (productInCart) {
    // Si el producto ya esta en el carrito solamente cambio la cantidad y el precio total para ese producto:
    productInCart.qty=counter;
    productInCart.total = productInCart.qty * productInCart.price;

  } else {
    // Si el producto no esta en el carrito, lo agrego.
    // Para no mutar propiedades del array de productos original
    // busco el producto y lo guardo en un nuevo objeto:
   // const findProduct = this.products.find(product => product.id === productId);
    //const newProduct = { ...findProduct };
    const addedProduct=this.products.find(product => product.id === productId);
    this.cart.push({
      ...addedProduct,
      inCart:true,
      qty:counter,
      total: addedProduct.price*counter
    })
  }
}
      //addItemToCart(products) {
      //this.cart.push(products);
   //},

  },
};
</script>

<style></style>
