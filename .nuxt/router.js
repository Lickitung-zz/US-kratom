import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41de23c0 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _dd5cd9ec = () => interopDefault(import('../pages/secret.vue' /* webpackChunkName: "pages/secret" */))
const _0130c1b0 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _7c717868 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/checkout",
      component: _41de23c0,
      name: "checkout"
    }, {
      path: "/secret",
      component: _dd5cd9ec,
      name: "secret"
    }, {
      path: "/product/:id?",
      component: _0130c1b0,
      name: "product-id"
    }, {
      path: "/",
      component: _7c717868,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
