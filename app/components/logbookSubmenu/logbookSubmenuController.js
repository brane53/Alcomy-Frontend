(function() {
    'use strict';
    angular
        .module('residents.logbookSubmenu')
        .controller('LogbookSubmenuController', logbookSubmenuController);
    logbookSubmenuController.$inject = ['$router', '$log', 'residentsService'];
    

    /* @ngInject */
    function logbookSubmenuController($router, $log, residentsService) {
        var vm = this;
        $log.info('Logbook Submenu Controller working');

        

    }
})();