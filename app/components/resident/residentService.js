(function() {
    'use strict';
    angular
        .module('alcomyApp.resident')
        .service('residentService', residentService);
    residentService.$inject = ['$http', '$log'];
    /* @ngInject */
    function residentService($http, $log) {
        var self = this;

        self.addResident = addResident;

        function addResident(){
            $log.info('Resident Added');


        }





    }
})();