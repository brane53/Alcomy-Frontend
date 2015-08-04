(function() {
    'use strict';
    angular
        .module('alcomyApp.newResidentDialog', [
            'alcomyApp.residents',
            'ui.router'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

          /*$urlRouterProvider
            .when('', '/newResident');*/


        $stateProvider
            .state('newResidentDialog',{
                url: '/newResident',
                templateUrl: 'app/components/newResidentDialog/basic.html',
                controller: 'NewResidentDialogController',
                controllerAs: 'dialog'


            });


        }]);
})();