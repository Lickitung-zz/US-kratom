import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36a9cbe8 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _591dc9f6 = () => interopDefault(import('../pages/secret.vue' /* webpackChunkName: "pages/secret" */))
const _1d640378 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _280cb3fc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/checkout",
      component: _36a9cbe8,
      name: "checkout"
    }, {
      path: "/secret",
      component: _591dc9f6,
      name: "secret"
    }, {
      path: "/product/:id?",
      component: _1d640378,
      name: "product-id"
    }, {
      path: "/",
      component: _280cb3fc,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
