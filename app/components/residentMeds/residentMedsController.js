(function () {
    'use strict';
    angular
        .module('resident.meds')
        .controller('ResidentMedsController', residentMedsController);
    residentMedsController.$inject = ['$log', 'residentsService', 'medicationsService'];
    

    /* @ngInject */
    function residentMedsController($log, residentsService, medicationsService) {
        var vm = this;

        vm.medications = medicationsService.getMedications(1);

        $log.warn(vm.medications);
        $log.info("Meds Controller working");
    }
})();