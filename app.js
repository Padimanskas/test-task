(function(angular) {
  'use strict';

  angular.module('app', ['xeditable' ,'app.whiteboard', 'app.upload']).

  controller('tagsCtrl', function($scope) {
    $scope.tags = [],
    $scope.img = '';

    $scope.addTag = function(left, top) {
      $scope.tags.push({
        top: top,
        left: left
      });
    };


    $scope.deactiveTags = function(){
      $scope.tags.forEach(function(tag){
        tag.active = false;
      });
    };

    $scope.toggle = function(tag) {
      $scope.deactiveTags();
      tag.active = true;
    };

    $scope.remTags = function() {
      $scope.tags = [];
    };


    $scope.addTag(300, 300);
    $scope.addTag(500, 150);
    $scope.addTag(330, 170);

  });

})(window.angular);