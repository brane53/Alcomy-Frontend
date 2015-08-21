(function() {
    'use strict';
    angular
        .module('alcomyApp.newResidentDialog', [
            'alcomyApp.residents',
            'ui.router',
            'ngMessages'
        ])
        /*.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){



        $stateProvider
            .state('newResidentDialog',{
                url: '/newResident',
                templateUrl: 'app/components/newResidentDialog/basic.html',
                controller: 'NewResidentDialogController',
                controllerAs: 'newResident'


            });


        }])*/;
})();