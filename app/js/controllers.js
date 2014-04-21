'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone) {
	$scope.phones = Phone.query();
	$scope.orderProp = 'age';
  
	// Defines additional options such as onScrollEnd and other runtime settings
    // exposed by iScroll can be defined per id attribute
    $scope.$parent.myScrollOptions = {
        snap: false,
        onScrollEnd: function ()
        {
            //alert('finshed scrolling');
        }
    };

    // expose refreshiScroll() function for ng-onclick or other meth
    $scope.refreshiScroll = function ()
    {
        $scope.$parent.myScroll['wrapper'].refresh();
    };

}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
