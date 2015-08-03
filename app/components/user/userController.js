(function() {
    'use strict';
    
    angular
        .module('alcomyApp.user')
        .controller('UserController', userController);
    userController.$inject = ['$router', '$log','$routeParams', 'userService'];
    

    /* @ngInject */
    function userController($router, $log, $routeParams, userService) {

        var vm = this;


        $log.info('User Controller working');
        
        vm.user = userService.user;

        

        
    }
})();