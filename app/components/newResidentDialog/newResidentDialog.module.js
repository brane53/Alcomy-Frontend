(function() {
    'use strict';
    angular
        .module('alcomyApp.newResidentDialog', [
            'alcomyApp.residents',
            'ui-router'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

          /*$urlRouterProvider
            .when('', '/newResident');*/


          $stateProvider
            .state('residents.newResident',{
                url: '/newResident',
              templateUrl: 'app/components/newResidentDialog/basic.html'


            });


        }]);
})();