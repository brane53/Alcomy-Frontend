(function() {
    'use strict';

    angular
        .module('alcomyApp.user')
        .service('userService', userService);

    userService.$inject = ['$http', '$log'];
    /* @ngInject */
    function userService($http, $log) {

        var self = this;

        self.user = 
            {
                id: 123,
                firstName: 'Brane',
                lastName: 'Vrajich',
                age: 27,
                role: 'adminitrator',
                avatar: 'production/assets/images/avatars/brane.jpg'
            };

    }

})();