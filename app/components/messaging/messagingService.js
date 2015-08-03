(function() {
    'use strict';

    angular
        .module('alcomyApp.messaging')
        .service('messagingService', messagingService);

    messagingService.$inject = ['$http', '$log'];
    /* @ngInject */
    function messagingService($http, $log) {

        var self = this;

        self.messages = 
            [
                {
                    id: 1,
                    subject: 'Give Ilija Medications',
                    content: "Hey Milan, don't forget to give ilija his medications at 2pm",
                    dateSent: "7/4/15",
                    isRead: false,
                    sentBy: "Brane Vrajich"
                    
                },
                {
                    id: 2,
                    subject: 'Make Dinner',
                    content: "The meals that last few days have been crap. Lets do something different.",
                    dateSent: "7/4/15",
                    isRead: false,
                    sentBy: "Brane Vrajich"
                    
                },
                {
                    id: 3,
                    subject: 'Good Job',
                    content: "Just wanted to say that you are doing a great job!",
                    dateSent: "7/4/15",
                    isRead: true,
                    sentBy: "Brane Vrajich"
                    
                }
            ];

    }

})();