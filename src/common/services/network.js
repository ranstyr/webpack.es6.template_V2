export class Network {

    /* @ngInject */
    constructor($http, API_URLS) {
        this.$http     = $http;
        this.API_URLS  = API_URLS;
        //this.analytics = Analytics;
        // Default config options for all requests
        this._defaultOptions = {
            // Fail the request after 30 seconds of no response
            timeout: 30000
        };

        this._promisesCache = {
            get:  {},
            post: {}
        };
    }

    _getUrl(path) {
        return this.API_URLS.API + path;
    }

    _getOptions(options) {
        return _.defaults(options, this._defaultOptions);
    }

    /**
     * Promises cache factory
     * Returns a cached promise for a specific request or fetches a new one
     *
     * @param  {string}   method  Cache scope (e.g. `get`, `post`)
     * @param  {string}   path    Cache identifier
     * @param  {Function} fetchFn The function to run when not in cache, must return a promise
     * @return {Object}           Cached or new promise
     */
    _getCachedOrFetch(method, path, fetchFn) {
        const cacheObj = this._promisesCache[method];

        if (!cacheObj[path]) {
            cacheObj[path] = fetchFn();
            // Remove from cache once it's resolved
            cacheObj[path].finally(() => cacheObj[path] = null);
        }

        return cacheObj[path];
    }

    /**
     * Handle GET requests
     *
     * @param  {string} path    The partial path after the API URL
     * @param  {Object} options Configuration to pass to $http
     *                          `_usePendingPromise` - Internal option to use the promises cache
     * @return {Object}         Promise
     */
    get(path, options = {}) {
        const url    = this._getUrl(path);
        const config = this._getOptions(options);

        const fetchFn = () => {
            return this.$http.get(url, config).then(res => res.data,error => {
                this.errorCallback(error)
            });
        };

        if (options._usePendingPromise) {
            return this._getCachedOrFetch('get', path, fetchFn);
        }

        return fetchFn();
    }

    /**
     * Handle POST requests
     *
     * @param  {string} path    The partial path after the API URL
     * @param  {*}      data    The request payload
     * @param  {Object} options Configuration to pass to $http
     *                          `_usePendingPromise` - Internal option to use the promises cache
     * @return {Object}         Promise
     */

    post(path, data, options = {}) {
        const url     = this._getUrl(path);
        const config  = this._getOptions(options);

        const fetchFn = () => {
            return this.$http.post(url, data, config).then(res => res.data, error => {
                this.errorCallback(error)
            });
        };

        if (options._usePendingPromise) {
            return this._getCachedOrFetch('post', path, fetchFn);
        }

        return fetchFn();
    }

    errorCallback(error) {

       let errorObj = {
            status:      error.status,
            description: error.statusText,
            url:         error.config.url
        };

        //this.analytics.saveAnalyticData(errorObj, 'ws');
    }

}
