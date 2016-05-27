(function (angular) {
  'use strict';

angular.module('app.upload', ['ngFileUpload']).

controller('uploadCtrl', ['$scope', 'Upload', function ($scope, Upload, $timeout) {

      $scope.$watch('file', function () {
        $scope.upload($scope.file);
      });

      $scope.log = '';

      $scope.upload = function (file) {
        if (file) {
          if (!file.$error) {
            Upload.upload({
              url : 'http://localhost:3000/uploads',
              data : {
                file : file
              }
            }).then(function (resp) {
              $scope.log = JSON.stringify(resp.data);
              $scope.$parent.img = resp.data.path;
              $scope.$parent.remTags();

            }, null, function (evt) {
              var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
              $scope.log = 'progress: ' + progressPercentage;
            });

          }

        }
      };
    }
  ]);

})(window.angular);