uis.directive('uiSelectBindAttrs',
  function() {

  return {
    restrict: 'A',
    controller: function($scope, $element, $attrs) {
      var attrsObj = $scope.$eval($attrs.ngBindAttrs);
      angular.forEach(attrsObj, function(value, key) {
        $attrs.$set(key, value);
      });
    }
  };
});
