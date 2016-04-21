function interceptorsConfig($httpProvider) {
  $httpProvider.interceptors.push(tokenInterceptor);
}

export default angular.module('si.interceptors', [])
