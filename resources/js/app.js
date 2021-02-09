require('./bootstrap');

import Vue from 'vue'

// window.Vue = require('vue');
import App from '@/App.vue'

import store from '@/store'
import router from '@/router'

// Vue global custom components
import UiComponents from "@/components/ui";
Vue.use(UiComponents)

// Vue global custom filters
import Filters from "@/filters";
Vue.use(Filters)

// Vue custom plugins
import Plugins from "@/plugins";
Vue.use(Plugins)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
