<template>
  <div>
    <modal-product v-model="show" @confirm="confirm" @cancel="cancel">
      <template v-slot:title>Productos en Lista</template>
      <table class="table">
  <thead>
    <tr>
      <th scope="col" colspan="10">Producto</th>
       <th scope="col" colspan="1">Cantidad</th>
        <th scope="col" >Precio</th>
         <th scope="col">Total</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="product in cart" :key="product.id">

      <td scope="col" colspan="10">{{ product.name }}</td>
      <td scope="col" colspan="1">{{ product.stock }}</td>
      <td scope="col" colspan="10">{{ product.price }}</td>
      <td scope="col" colspan="10">{{ product.total }}</td>

    </tr>

  </tbody>
  <tfoot>
     <td scope="col" colspan="10"></td>
      <td scope="col" colspan="1"></td>
       <td ><h4><strong>total:</strong></h4></td>
  </tfoot>
</table>
    </modal-product>
    <v-button class="btn btn-outline-dark" type="submit" @click="show = true">
      Carro
      <span class="badge bg-dark text-white ms-1 rounded-pill">
        {{ cart.length }}</span
      >
    </v-button>


  </div>
</template>

<script>
import ModalProduct from "./ModalProduct.vue"

export default{



  name: "TablaProducto",

   components: { ModalProduct },



  props: {
    cart: {
      type: Array,
    },
  },

  data: () => ({
    show: false,
  }),
  methods: {
    confirm() {
      // some code...
      this.show = false;
    },
    cancel(close) {
      // some code...
      close();
    },
  },
  computed:{
    total(){
  return  this.product.price *this.product.stock;

    }


  }
};

</script>

<style lang="scss" scoped></style>
