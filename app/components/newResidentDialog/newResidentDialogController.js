(function() {
    'use strict';
    angular
        .module('alcomyApp.newResidentDialog')
        .controller('NewResidentDialogController', newResidentDialogController);
    newResidentDialogController.$inject = ['$log', '$mdDialog', 'residentsService'];
    /* @ngInject */
    function newResidentDialogController($log, $mdDialog, residentsService) {
        var vm = this;
        
        vm.firstName = '';
        vm.lastName = '';
        vm.middleName = '';
        vm.birthDate = '';
        vm.ssn = '';
        vm.gender = '';
        vm.weight = '';

        vm.category = 'basic';

        vm.changeCategory = changeCategory;

        function changeCategory(category){
            vm.category = category;
        }



        vm.closeDialog = closeDialog;

        function closeDialog(){
            $mdDialog.hide();
        }


    }
})();