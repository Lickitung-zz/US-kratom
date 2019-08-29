import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e562b1b0 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _5839ee12 = () => interopDefault(import('../pages/secret.vue' /* webpackChunkName: "pages/secret" */))
const _bc1fe8b0 = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _490d9c60 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/checkout",
      component: _e562b1b0,
      name: "checkout"
    }, {
      path: "/secret",
      component: _5839ee12,
      name: "secret"
    }, {
      path: "/product/:id?",
      component: _bc1fe8b0,
      name: "product-id"
    }, {
      path: "/",
      component: _490d9c60,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
