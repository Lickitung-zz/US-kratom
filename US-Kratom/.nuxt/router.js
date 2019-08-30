import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6bd8f3ce = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _75dbd543 = () => interopDefault(import('../pages/secret.vue' /* webpackChunkName: "pages/secret" */))
const _6403fb17 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _322ce9e2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/checkout",
      component: _6bd8f3ce,
      name: "checkout"
    }, {
      path: "/secret",
      component: _75dbd543,
      name: "secret"
    }, {
      path: "/product/:id?",
      component: _6403fb17,
      name: "product-id"
    }, {
      path: "/",
      component: _322ce9e2,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
