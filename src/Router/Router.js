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





import { createWebHistory, createRouter } from "vue-router";

let router;

router?.beforeEach((to, from, next) => {
    if (to.component !== null) next()
    else next('/404')
})


function registerRoutes(App, routes) {
    if (!routes) return null
    
    router = createRouter({
        history: createWebHistory(),

        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { top: 0 }
            }
        },
        
        routes,
    });

    App.use(router)

    router.push(routes[0])
}

export { router, registerRoutes };