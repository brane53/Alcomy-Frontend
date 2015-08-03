(function() {
    'use strict';
    angular
        .module('residents.logbookNotes')
        .controller('LogbookNotesController', logbookNotesController);
    logbookNotesController.$inject = ['$router', '$log', 'residentsService'];
    

    /* @ngInject */
    function logbookNotesController($router, $log, residentsService) {
        var vm = this;
        $log.info('Logbook Notes Controller working');

    }
})();