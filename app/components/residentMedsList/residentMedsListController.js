(function() {
    'use strict';
    angular
        .module('resident.meds.list')
        .controller('ResidentMedsListController', residentMedsListController);
    residentMedsListController.$inject = ['$log', 'residentsService'];
    

    /* @ngInject */
    function residentMedsListController($log, residentsService) {
        var vm = this;
        $log.info('Residents Medications List Controller working');
    }
})();