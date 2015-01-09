 angular
  .module('tasklist')
  .controller("ListController", function ($scope, Tasklist, supersonic) {
    $scope.tasklists = null;
    $scope.showSpinner = true;

    Tasklist.all().whenChanged( function (tasklists) {
        $scope.$apply( function () {
          $scope.tasklists = tasklists;
          $scope.showSpinner = false;
        });
    });
  });