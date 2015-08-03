(function() {
    'use strict';
    angular
        .module('residents.medicationsSubmenu')
        .controller('MedicationsSubmenuController', medicationsSubmenuController);
    medicationsSubmenuController.$inject = ['$log', 'residentsService'];
    

    /* @ngInject */
    function medicationsSubmenuController($log, residentsService) {
        var vm = this;
        $log.info('Logbook Overview Controller working');
    }
})();