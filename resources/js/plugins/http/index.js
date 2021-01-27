// import authRequests from '@/scripts/http/requests/auth'

/**
 * Gather all the requests files
 */

const context = {
    // ...authRequests,
}

export const $http = context

export default {
    install(Vue, options) {
        Vue.prototype.$http = context
    }
}
