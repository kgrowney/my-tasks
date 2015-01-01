angular
  .module('tasklist')
  .controller("EditController", function ($scope, Tasklist, supersonic) {
    $scope.tasklist = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Tasklist.find(steroids.view.params.id).then( function (tasklist) {
      $scope.$apply(function() {
        $scope.tasklist = tasklist;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.tasklist.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
