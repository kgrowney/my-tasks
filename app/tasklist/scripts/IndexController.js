angular
  .module('tasklist')
  .controller("IndexController", function ($scope, Tasklist, supersonic, DateDiff) {
    $scope.tasklists = null;
    $scope.showSpinner = true;


  /*var ms= (1000 * 60 * 60 * 24);*/
    
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
  
