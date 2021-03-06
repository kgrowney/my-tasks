angular
  .module('tasklist')
  .controller("NewController", function ($scope, Tasklist, supersonic) {
    $scope.tasklist = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      $scope.tasklist.status = false;
      newtasklist = new Tasklist($scope.tasklist);
      newtasklist.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });