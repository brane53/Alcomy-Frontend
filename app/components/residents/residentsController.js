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

        vm.searchFilter = '',
        vm.statusFilter = 'active';
        vm.statuses = [

            {
                name: "All Residents",
                value: ''
            },
            {
                name: "Current Residents",
                value: 'active'
            },
            {
                name: "Past Residents",
                value: 'gone'
            },
            {
                name: "Deceased Residents",
                value: 'deceased'
            }

        ];

        vm.filterResidents = filterResidents;

        function filterResidents(){

            return function(residents, filter1, filter2) {

                var output = [];
                var filteredResidents = [];


                if (filter1.status === 'all') {
                    angular.forEach(residents, function (resident) {
                        filteredResidents.push(resident);
                    });
                } else if (filter1.status === 'active') {
                    angular.forEach(residents, function (resident) {
                        if (resident.status === 'active') {
                            filteredResidents.push(resident);
                        }
                    });
                } else if (filter1.status === 'inactive') {
                    angular.forEach(residents, function (resident) {
                        if (resident.status === 'inactive') {
                            filteredResidents.push(resident);
                        }
                    });
                } else if (filter1.status === 'deceased') {
                    angular.forEach(residents, function (resident) {
                        if (resident.status === 'deceased') {
                            filteredResidents.push(resident);
                        }
                    });
                }

                angular.forEach(filteredResidents, function (resident) {
                    if (resident.$ === filter2) {
                        output.push(resident);
                    }
                });

                return output;
            }
        }

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