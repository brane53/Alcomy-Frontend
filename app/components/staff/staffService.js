(function() {
    'use strict';
    angular
        .module('alcomyApp.staff')
        .service('staffService', staffService);
    staffService.$inject = ['$log', '$http'];
    /* @ngInject */
    function staffService($log, $http) {
        var self = this;
        
    }
})();