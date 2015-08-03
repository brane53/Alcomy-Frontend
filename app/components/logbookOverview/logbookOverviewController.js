(function() {
    'use strict';
    angular
        .module('residents.logbookOverview')
        .controller('LogbookOverviewController', logbookOverviewController);
    logbookOverviewController.$inject = ['$log', 'residentsService'];
    

    /* @ngInject */
    function logbookOverviewController($log, residentsService) {
        var vm = this;
        $log.info('Logbook Overview Controller working');
    }
})();