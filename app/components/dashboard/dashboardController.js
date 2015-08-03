(function() {
    'use strict';
    angular
        .module('alcomyApp.dashboard')
        .controller('DashboardController', dashboardController);
    dashboardController.$inject = ['$log'];
    
    /* @ngInject */
    function dashboardController($log) {
        var vm = this;
        
        $log.info('Dashboard Controller working');
    }
})();