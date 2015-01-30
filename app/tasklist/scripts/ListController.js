 angular
  .module('tasklist')
  .controller("ListController", function ($scope, Tasklist, supersonic, DateDiff) {
    $scope.tasklists = null;
    $scope.showSpinner = true;

    $scope.newTask=function (tasklist){
      return DateDiff.calculateDays(tasklist.updated_at);
  }

    Tasklist.all().whenChanged( function (tasklists) {
        $scope.$apply( function () {
          $scope.tasklists = tasklists;
          $scope.showSpinner = false;
        });
    });
  });