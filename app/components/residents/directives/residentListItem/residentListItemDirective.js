/**
 * @desc This directive
 */
(function(){
	'use strict';

	angular.module('alcomyApp.residents')

		.directive('alResidentListItem', residentListItem);

		function residentListItem(){
			return {
				restrict: 'E',
				replace: true,
				templateUrl: 'app/components/residents/directives/residentListItem/residentListItem.html',
				scope: {
					resident: '='
				}
			};
		}
})();

