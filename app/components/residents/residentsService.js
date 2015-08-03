(function() {
    'use strict';
    angular
        .module('alcomyApp.residents')
        .service('residentsService', residentsService);
    residentsService.$inject = ['$http', '$log'];
    /* @ngInject */
    function residentsService($http, $log) {
        var self = this;
        
        self.residents = [
            {
                residentId: 1,
                firstName: 'Brane',
                lastName: 'Vrajich',
                age: 27,
                favoriteRestaurant: 'Tucanos',
                avatar: 'production/assets/images/avatars/brane.jpg'
            },
            {
                residentId: 2,
                firstName: 'Ilija',
                lastName: 'Vrajich',
                age: 32,
                favoriteRestaurant: 'JDawgs',
                avatar: 'production/assets/images/avatars/ilija.jpg'
            },
            {
                residentId: 3,
                firstName: 'Rebekah',
                lastName: 'Vrajich',
                age: 23,
                favoriteRestaurant: 'Carabbas',
                avatar: 'production/assets/images/avatars/rebekah.jpg'
            },
            {
                residentId: 4,
                firstName: 'Justin',
                lastName: 'Kunz',
                age: 27,
                favoriteRestaurant: 'In N Out',
                avatar: 'production/assets/images/avatars/justin.jpg'
            },
            {
                residentId: 5,
                firstName: 'Tommy',
                lastName: 'Wells',
                age: 30,
                favoriteRestaurant: 'Cruise Ship Food',
                avatar: 'production/assets/images/avatars/tommy.jpg'
            },
            {
                residentId: 6,
                firstName: 'Ruth',
                lastName: 'Vrajich',
                age: 70,
                favoriteRestaurant: 'Tucanos',
                avatar: 'production/assets/images/avatars/ruth.jpg'
            },
            {
                residentId: 7,
                firstName: 'Milan',
                lastName: 'Vrajich',
                age: 32,
                favoriteRestaurant: 'JDawgs',
                avatar: 'production/assets/images/avatars/milan.jpg'
            },
            {
                residentId: 8,
                firstName: 'Blake',
                lastName: 'Kenworthy',
                age: 23,
                favoriteRestaurant: 'Carabbas',
                avatar: 'production/assets/images/avatars/blake.jpg'
            },
            {
                residentId: 9,
                firstName: 'Josh',
                lastName: 'Wood',
                age: 28,
                favoriteRestaurant: 'In N Out',
                avatar: 'production/assets/images/avatars/josh.jpg'
            },
            {
                residentId: 10,
                firstName: 'Kevin',
                lastName: 'Kunz',
                age: 30,
                favoriteRestaurant: 'Cruise Ship Food',
                avatar: 'production/assets/images/avatars/kevin.jpg'
            }
        ];

        $log.info('Resident Service is Working');


    }
})();


