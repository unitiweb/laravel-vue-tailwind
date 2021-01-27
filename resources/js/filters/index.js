import sha256 from 'sha256'

/**
 * Filters that will be added to the vue app
 * @type {{install(*)}}
 */
const Filters = {
    install(Vue) {
        Vue.filter('sha256', function (string) {
            return sha256(string)
        })
    }
}

export default Filters
