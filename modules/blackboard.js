(function (angular) {
  'use strict';

  angular.module('app.blackboard', []).

  directive('blackboard', function () {
    return {
      link : function (scope, element, attribute) {

        scope.setBackground = function () {
          return {
            'background-image' : 'url(' + scope.img + ')',
            'background-repeat' : 'no-repeat',
            'background-size' : 'contain'
          };
        };

        scope.onClick = function (e) {
          if($(e.target).hasClass('tag') || $(e.target).hasClass('active-tag')) return;
          scope.addTag(e.offsetX - 15, e.offsetY - 30);
          scope.deactiveTags();
        };

      }
    }
  });

})(window.angular);
