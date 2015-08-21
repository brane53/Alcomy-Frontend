(function() {
    'use strict';
    
    angular
        .module('alcomyApp.residents')
        .controller('ResidentsController', residentsController);
    residentsController.$inject = ['$log', '$stateParams', '$mdDialog', 'residentsService'];
    

    /* @ngInject */
    function residentsController($log, $stateParams, $mdDialog, residentsService) {

        var vm = this;

        /*$router.config([
            {
                path: '/logbook', 
                component: {submenu: 'logbookSubmenu'},
                as: 'logbookSubmenuRef'
            },

            This should be commended out
            {
                path: '/logbook/overview', 
                component: {
                    submenu: 'logbookSubmenu',
                    content: 'logbookOverview'
                }, 
                as: 'logbookStart'
            },

            {
                path: '/logbook/notes', 
                component: {content: 'logbookNotes'},
                as: 'logbookNotesRef'
            },

            {
                path: '/to-do', 
                component: {submenu: 'todoSubmenu'},
                as: 'todoSubmenuRef'
            },

            {
                path: '/medications', 
                component: {submenu: 'medicationsSubmenu'},
                as: 'medicationsSubmenuRef'
            }

        ]);*/


        vm.statuses = [
            "All Residents",
            "Current Residents",
            "Past Residents",
            "Deceased Residents"

        ];

        vm.showNewResidentDialog = showNewResidentDialog;
        
        /**
         *  [showNewResidentDialog displays a form to add
         *  a new resident. It is a custom dialog created
         *  with the $mdDialog service from Angular
         *  Material.]
         *   
         *  @param  {[type]} $event [This is the event
         *  object from the event that called the
         *  function]
         */
        function showNewResidentDialog($event){
            var parentElement = angular.element(document.body);

            $mdDialog.show({
                parent: parentElement,
                targetEvent: $event,
                templateUrl:'app/components/newResidentDialog/newResidentDialog.html',
                controller: 'NewResidentDialogController',
                controllerAs: 'newResident'
              });

        }



        var params = $stateParams.residentId;
        $log.info('Residents Controller working');
        console.log('State Params: ' + params);
        $log.info('vm oject:');
        $log.info(vm);
        
        vm.residents = residentsService.residents;

        /*vm.selectedId = 1;
        vm.resident = vm.residents[vm.selectedId];*/
        

        
    }
})();