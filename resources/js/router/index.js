/**
 * Load the required imports
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRouterPrefetch from 'vue-router-prefetch'
import store from '@/store'

/**
 * Other needed imports
 */
// import moment from 'moment'

/**
 * Load the layout components
 */
import BaseLayout from '@/components/layouts/BaseLayout'
import AuthLayout from '@/components/layouts/AuthLayout'
import DashboardLayout from '@/components/layouts/DashboardLayout'

/**
 * Auth related components
 */
import Login from '@/views/auth/Login'

/**
 * Dashboard components
 */
import DashboardHome from '@/views/dashboard/DashboardHome'

/**
 * Profile components
 */
import ProfileHome from '@/views/profile/ProfileHome'

/**
 * Add the plugins to the Vue instance
 */
Vue.use(VueRouter)
Vue.use(VueRouterPrefetch)

/**
 * Define the routes
 *
 * @type {{path: string, component: {}, name: string}[]}
 */
const routes = [
    {
        path: '/',
        name: 'Home',
        component: BaseLayout,
        redirect: { name: 'login' },
        children: [
            {
                path: '/auth',
                name: 'auth',
                component: AuthLayout,
                redirect: { name: 'login' },
                children: [
                    {
                        path: 'login',
                        name: 'login',
                        component: Login
                    }
                ]
            }, {
                path: '/dashboard',
                name: 'dashboard',
                component: DashboardLayout,
                redirect: { name: 'dashboard-home' },
                children: [
                    {
                        path: '',
                        name: 'dashboard-home',
                        component: DashboardHome
                    }
                ]
            }, {
                path: '/profile',
                name: 'profile',
                component: DashboardLayout,
                redirect: { name: 'profile-home' },
                children: [
                    {
                        path: '',
                        name: 'profile-home',
                        component: ProfileHome
                    }
                ]
            }
        ]
    }
]

/**
 * Create the vue router
 *
 * @type {VueRouter}
 */
const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes,
    linkActiveClass: 'active',
    scrollBehavior: (to) => {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// router.beforeEach(Authentication)
// router.beforeEach(ClearLoading)

/**
 * Export the vue router
 */
export default router
