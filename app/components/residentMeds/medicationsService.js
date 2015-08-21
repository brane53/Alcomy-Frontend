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


        function getMedications(residentId) {
            var medications = 
            residentsService.getResident(residentId).medications;
            return medications;
        }
    }
})();