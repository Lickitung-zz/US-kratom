<template>
  <v-card>
    <v-container class="fluid grid-list-md">
      <v-layout class="row wrap">
        <v-flex v-for="product in products" xs6 :key="product.title">
          <v-card>
            <v-img :src="product.pic" class="media" height="300px">
              <v-container class="fill-height fluid">
                <v-layout>
                  <v-flex class="xs12 align-enter flexbox">
                    <span class="display-1 yellow--text" v-text="product.title">

                    </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-actions>
              <v-spacer>
                <v-btn icon>
                  <v-icon></v-icon>
                </v-btn>
                <v-btn icon>
                 
                </v-btn>
                <v-btn icon>
                 
                </v-btn>
              </v-spacer>
            </v-card-actions>
          </v-card>
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

export default {
  components: {
    
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
  }
}
</script>
<style>
.media:hover {
  opacity: 0.4;
}
</style>