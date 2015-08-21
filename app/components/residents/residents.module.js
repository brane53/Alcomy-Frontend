(function() {
    'use strict';

    angular.module('alcomyApp.residents', [
        /*'residents.logbookSubmenu',*/
        'residents.todos',
        'resident.meds',
        /*'residents.logbookOverview',*/
        /*'residents.logbookNotes'*/
        'ui.router',
        'alcomyApp.newResidentDialog'
    ]);

})();