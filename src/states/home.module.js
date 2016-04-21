import { HomeController } from './home';
import homeTemplate       from './home.html';

/* @ngInject */
function appRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            template: homeTemplate,
            controller: 'HomeController',
            controllerAs: 'Home'
        });

    $urlRouterProvider.otherwise('/home');
}

export default angular.module('project.app', [])
    .controller({HomeController})
    .config(appRoutes)