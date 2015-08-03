(function() {
    'use strict';
    
    angular
        .module('alcomyApp.messaging')
        .controller('MessagingController', messagingController);
    messagingController.$inject = ['$router', '$log','$routeParams', 'messagingService'];
    

    /* @ngInject */
    function messagingController($router, $log, $routeParams, messagingService) {

        var vm = this;


        $log.info('Messaging Controller working');
        

        

        
    }
})();