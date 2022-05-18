<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="" width="30" height="24" />
      </a>
      <a class="navbar-brand" href="#!">Compu Lima</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#!"
              >Nosotros</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!">Contactanos</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Tienda</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#!">Todos los Productos</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#!">Populares</a></li>
              <li><a class="dropdown-item" href="#!">Recien llegados</a></li>
            </ul>
          </li>
        </ul>

        <TablaProducto :cart="cart"></TablaProducto>
      </div>
    </div>
  </nav>
</template>

<script>
import TablaProducto from "./TablaProducto.vue";

export default {
  name: "MenuPrincipal",
  show: false,

  components: {
    TablaProducto,
  },

  props: {
    cart: {
      type: Array,
    },
  },

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

  computed: {
    cartCounter() {
      return this.cart.reduce((acc, product) => acc + product.quantity, 0);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
