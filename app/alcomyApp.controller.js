(function() {
    'use strict';
    
    angular
        .module('alcomyApp')
        .controller('appController', appController);
    appController.$inject = ['$mdSidenav', '$log', '$mdMedia', '$stateParams', 'userService', 'messagingService'];
    

    /* @ngInject */
    function appController($mdSidenav, $log, $mdMedia, $stateParams, userService, messagingService) {
        var vm = this;

        $log.info('Main Controller working');


        vm.user = userService.user;
        vm.messages = messagingService.messages;
        
        /*$router.config([
            {path: '/', redirectTo: '/dashboard'},
            {path: '/dashboard', component: 'dashboard'},
            {path: '/residents', component: 'residents'},
            {path: '/staff', component: 'staff'}

        ]);*/

        vm.toggle = function(navID){
            $mdSidenav(navID)
            .toggle()
            .then(function () {
                $log.debug("toggle " + navID + " is done");
            });
               
        };
    }
})();



