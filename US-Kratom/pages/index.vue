<template>
  <v-card>
    <v-container class="fluid grid-list-md">
      <v-layout class="row wrap">
        <v-flex v-for="product in products" xs6 :key="product.title">
          <router-link :to="`product/${product.id}`">
          <Product :product="product">
            <v-card-actions>
              <v-spacer>
                <v-btn>
                  <v-icon></v-icon>
                </v-btn>
                <v-btn>
                 
                </v-btn>
                <v-btn>
                 
                </v-btn>
              </v-spacer>
            </v-card-actions>
          </Product>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
  <!-- <v-layout
    column
    justify-center
    align-center
  >
      <div class="text-center">
        <h1>Hello Firestore</h1>
        <li v-for="(product, key) in products" :key="key">
          <ul>{{product.title}}</ul>
        </li>
      </div>
  </v-layout> -->
<script>

import {db} from "../plugins/firebase"
import Product from "../components/product"

export default {
  components: {
    Product
  },
  data() {
    return {
      products: []
    }
  },
  firestore() {
    return {
      products: db.collection("products")
    }
  },
  computed: {
    myProducts() {
      this.$store.dispatch('setProduct', this.products);
      console.log(this.$store.getters.products);
      return this.products;
    }
  }
}
</script>
<style>
.media:hover {
  opacity: 0.4;
}
</style>