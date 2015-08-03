(function() {
    'use strict';
    angular
        .module('residents.todos.list')
        .controller('ResidentsTodosListController', residentsTodosListController);
    residentsTodosListController.$inject = ['$log', 'residentsService'];
    

    /* @ngInject */
    function residentsTodosListController($log, residentsService) {
        var vm = this;
        $log.info('Residents Todos List Controller working');
    }
})();