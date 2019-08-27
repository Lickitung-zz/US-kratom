<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
        <h1>Hello Firestore</h1>
        <li v-for="(product, key) in products" :key="key">
          <ul>{{product.title}}</ul>
        </li>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import {db} from "../plugins/firebase"

export default {
  components: {
    Logo,
    VuetifyLogo
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
