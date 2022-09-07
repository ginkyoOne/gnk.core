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