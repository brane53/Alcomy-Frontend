(function() {
    'use strict';
    
    angular
        .module('alcomyApp.staff')
        .controller('StaffController', staffController);
    staffController.$inject = ['$log'];
    
    
    /* @ngInject */
    function staffController($log) {
        var vm = this;
        
        $log.info('Staff Controller working');

    }
})();
