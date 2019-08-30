import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ea179ec = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _12eaa1d6 = () => interopDefault(import('../pages/secret.vue' /* webpackChunkName: "pages/secret" */))
const _51a5db38 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _5755601c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/checkout",
      component: _5ea179ec,
      name: "checkout"
    }, {
      path: "/secret",
      component: _12eaa1d6,
      name: "secret"
    }, {
      path: "/product/:id?",
      component: _51a5db38,
      name: "product-id"
    }, {
      path: "/",
      component: _5755601c,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
