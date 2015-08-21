(function() {
    'use strict';
    
    angular
        .module('alcomyApp', [
            /*'ngNewRouter',*/
            'ui.router',
            'ngMaterial',
            'alcomyApp.dashboard',
            'alcomyApp.residents',
            'alcomyApp.staff',
            'alcomyApp.user',
            'alcomyApp.messaging'
        ])

        .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {

            /** It's very handy to add references to $state and $stateParams to the $rootScope so that you can access them from any scope within your applications.For example,
            <li ng-class="{ active: $state.includes('contacts.list') }"> 
            will set the <li> to active whenever 'contacts.list' or one of its decendents is active.**/
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            }
          ]
        )

        .config(['$mdThemingProvider', function($mdThemingProvider) {
          $mdThemingProvider.theme('default')
          .primaryPalette('light-blue')
          .accentPalette('light-green',{
            'default': '500', 
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
          })
          .warnPalette('red');
        }])
        /*.config(['$componentLoaderProvider', function($componentLoaderProvider){

          $componentLoaderProvider.setTemplateMapping(function (componentName) {
          return 'app/components/' + componentName + '/' + componentName + '.html';
          });

        }])*/
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

          $urlRouterProvider
            .when('', '/dashboard');


          $stateProvider
            .state('dashboard',{
              /*abstract: true,*/
              url: '/dashboard',
              templateUrl: 'app/components/dashboard/dashboard.html',
              /*controller: 'DashboardController as dashboard'*/

            })
            .state('staff',{
              /*abstract: true,*/
              url: '/staff',
              templateUrl: 'app/components/staff/staff.html',
              /*controller: 'StaffController as staff'*/

            })
            .state('residents',{
              abstract: true,
              url: '/residents/{residentId}',
              templateUrl: 'app/components/residents/residents.html',
              controller: 'ResidentsController as residents'

            })
            .state('residents.todos',{
              abstract: true,
              url: '/todos',
              templateUrl: 'app/components/residentsTodos/residentsTodos.html',
              controller: 'ResidentsTodosController as todos'

            })
            .state('residents.todos.list',{
              url: '/list',
              templateUrl: 'app/components/residentsTodosList/residentsTodosList.html',
              controller: 'ResidentsTodosListController as todosList'

            })
            .state('residents.todos.types',{
              url: '/types',
              templateUrl: 'app/components/residentsTodosTypes/residentsTodosTypes.html'
            })
            .state('residents.todos.groups',{
              url: '/groups',
              templateUrl: 'app/components/residentsTodosGroups/residentsTodosGroups.html'

            })
            .state('residents.meds',{
              abstract: true,
              url: '/medications',
              templateUrl: 'app/components/residentMeds/residentMeds.html',
              controller: 'ResidentMedsController as meds'

            })
            .state('residents.meds.list',{
              url: '/list',
              templateUrl: 'app/components/residentMedsList/residentMedsList.html',

            });

        }]);
})();


