(function() {
    'use strict';
    angular
        .module('residents.todoSubmenu')
        .controller('TodoSubmenuController', todoSubmenuController);
    todoSubmenuController.$inject = ['$log', 'residentsService'];
    

    /* @ngInject */
    function todoSubmenuController($log, residentsService) {
        var vm = this;
        $log.info('Todo Submenu Controller working');
    }
})();