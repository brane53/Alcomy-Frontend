(function() {
    'use strict';
    angular
        .module('residents.todos')
        .controller('ResidentsTodosController', residentsTodosController);
    residentsTodosController.$inject = ['$log', 'residentsService'];
    

    /* @ngInject */
    function residentsTodosController($log, residentsService) {
        var vm = this;
        $log.info("Todo's Controller working");
    }
})();