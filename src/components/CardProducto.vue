<template>
  <div class="producto">
    <div class="div-img">
      <img class="card-img-top" :src="product.image" />
      <h3>{{ product.name }}</h3>
      <div class="precio">S/{{ product.price }}</div>
      <span class="qty">disponibles {{ product.stock }}</span>
    </div>
    <button class="btn" @click="addItemToCart">
      Agregar Al carrito
    </button>
    <div class="botones" >
      <button class="btns" >+</button>
      <button class="btns">hols</button>
      <button class="btns" >-</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "CardProducto",
  props: {
     contador: String,
      product: Object,


  },
  methods: {
    addItemToCart() {
      this.$emit("addItemToCart", this.product.id);
    },

    computed:{


    }


  },
};
</script>

<style scoped>
.btn {
  background-color: #42b992;
  width: 100%;
  border: none;
  color: white;
  padding: 0.5em;
}
.botones {
  display: flex;
}
.btns {
  width: 50%;
  color: #000;
  background: white;
}
.producto {
  background: white;
  margin: 0 0.5em;
  text-align: center;
  margin-bottom: 1em;
}
</style>
