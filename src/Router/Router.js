/* import Vue from "vue";
import VueRouter from "vue-router";

import LandingPage from "./LandingPage.vue";
import LoadingComponent from "./LoadingComponent.vue";
import ErrorComponent from "./ErrorComponent.vue";

const lazyLoadView = ({ component, loading, error }) => {
  const AsyncHandler = () => ({
    component,
    loading,
    error
  });

  return () =>
    Promise.resolve({
      functional: true,
      render(h, { data, children }) {
        return h(AsyncHandler, data, children);
      }
    });
};

const Profile = lazyLoadView({
  component: import("./Profile.vue"),
  loading: LoadingComponent,
  error: ErrorComponent
});

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LandingPage },
  { path: "/profile", component: Profile }
];

const router = new VueRouter({
  routes
});

export default router;
 */

import store from '../Store/Store'
import sleet, { sleep } from '../utils/asyncUtils'



import { createWebHistory, createRouter, createWebHashHistory  } from "vue-router";



let routes = []
let router = createRouter({
  history: createWebHashHistory(),

  scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
              return {
                el: to.hash,
              }
            }
            if (savedPosition) {
                return savedPosition
            } else {
                return { top: 0 }
            }
        },
        routes,
});




router.beforeEach((to, from, next) => {
  if (to.component !== null) {
    if (typeof to.matched[0]?.components.default === 'function') {
      
      store.state.loading = true
      
      sleep(5000, () => {
        if (store.state.loading == true) {
          router.go(-1)
        }
        
      })

    }
    next()

  } else next('/404')
  
})

router.beforeResolve((to, from, next) => {
    store.state.loading = false
    next()
})


function registerRoutes(routes) {
    if (!routes) return null

  window.APP.use(router)
  routes.forEach(route => router.addRoute(route))
  router.push(routes[0])
}

export { router, registerRoutes };