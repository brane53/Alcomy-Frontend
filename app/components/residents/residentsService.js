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
                dob: '1987-11-10',
                favoriteRestaurant: 'Tucanos',
                avatar: 'production/assets/images/avatars/brane.jpg',
                status: 'active',
                medications: [
                    {
                    id: 1,
                    status: 'active',
                    name: 'Alphagan',
                    strength: '0.6%',
                    instructions: "take 2 daily",
                    script: "8/6/2012",
                    quantity: 10,
                    type: 'MAR'
                        
                    },
                    {
                    id: 2,
                    status: 'active',
                    name: 'Tylanol',
                    strength: '0.6%',
                    instructions: "take 2 daily",
                    script: "8/6/2013",
                    quantity: 60,
                    type: 'MAR'

                    },
                    {
                    id: 3,
                    status: 'active',
                    name: 'Rasapan',
                    strength: '1.8%',
                    instructions: "This should be taken as needed",
                    script: "8/6/2012",
                    quantity: 10,
                    type: 'PRN'
                        
                    },
                    {
                    id: 4,
                    status: 'discontinued',
                    name: 'Asprin',
                    strength: '200mg',
                    instructions: "take 4 daily",
                    script: "8/6/2013",
                    quantity: 40,
                    type: 'PRN'

                    }
                    
                ]
            },
            {
                residentId: 2,
                firstName: 'Ilija',
                lastName: 'Vrajich',
                dob: '1987-11-10',
                favoriteRestaurant: 'JDawgs',
                avatar: 'production/assets/images/avatars/ilija.jpg',
                status: 'active'
            },
            {
                residentId: 3,
                firstName: 'Rebekah',
                lastName: 'Vrajich',
                dob: '1987-11-10',
                favoriteRestaurant: 'Carabbas',
                avatar: 'production/assets/images/avatars/rebekah.jpg',
                status: 'active'
            },
            {
                residentId: 4,
                firstName: 'Justin',
                lastName: 'Kunz',
                dob: '1987-11-10',
                favoriteRestaurant: 'In N Out',
                avatar: 'production/assets/images/avatars/justin.jpg',
                status: 'active'
            },
            {
                residentId: 5,
                firstName: 'Tommy',
                lastName: 'Wells',
                dob: '1987-11-10',
                favoriteRestaurant: 'Cruise Ship Food',
                avatar: 'production/assets/images/avatars/tommy.jpg',
                status: 'active'
            },
            {
                residentId: 6,
                firstName: 'Ruth',
                lastName: 'Vrajich',
                dob: '1987-11-10',
                favoriteRestaurant: 'Tucanos',
                avatar: 'production/assets/images/avatars/ruth.jpg',
                status: 'active'
            },
            {
                residentId: 7,
                firstName: 'Milan',
                lastName: 'Vrajich',
                dob: '1987-11-10',
                favoriteRestaurant: 'JDawgs',
                avatar: 'production/assets/images/avatars/milan.jpg',
                status: 'gone'
            },
            {
                residentId: 8,
                firstName: 'Blake',
                lastName: 'Kenworthy',
                dob: '1988-09-10',
                favoriteRestaurant: 'Carabbas',
                avatar: 'production/assets/images/avatars/blake.jpg',
                status: 'gone'
            },
            {
                residentId: 9,
                firstName: 'Josh',
                lastName: 'Wood',
                dob: '1991-11-11',
                favoriteRestaurant: 'In N Out',
                avatar: 'production/assets/images/avatars/josh.jpg',
                status: 'gone'
            },
            {
                residentId: 10,
                firstName: 'Kevin',
                lastName: 'Kunz',
                dob: '1987-07-10',
                favoriteRestaurant: 'Cruise Ship Food',
                avatar: 'production/assets/images/avatars/kevin.jpg',
                status: 'gone'
            }
        ];

        self.getResident = getResident;

        function getResident(id){
            
            if(self.residents){
                for (var i = 0; i < self.residents.length; i++){
                    $log.log('From the resident Service');
                    $log.log(self.residents[i])
                    if(self.residents[i].residentId === id){
                        return self.residents[i];
                    }
                }
            }
            else{
                return;
            }

        }

        $log.info('Resident Service is Working');


    }
})();


