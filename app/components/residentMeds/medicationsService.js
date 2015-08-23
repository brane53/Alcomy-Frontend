(function() {
    'use strict';
    angular
        .module('resident.meds')
        .service('medicationsService', medicationsService);
    medicationsService.$inject = ['$http', '$log', 'residentsService'];
    /* @ngInject */
    function medicationsService($http, $log, residentsService) {
        var self = this;
        
        self.getMedications = getMedications;

        /**
         * Gets all the medications for a specific resident
         * @param {Integer} residentId
         * @returns {residentsService.residents.medications|*|residentMedsController.medications}
         */
        function getMedications(residentId) {
            return residentsService.getResident(residentId).medications;
        }

    }
})();