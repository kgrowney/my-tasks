angular
  .module('tasklist')
  .controller("IndexController", function ($scope, Tasklist, supersonic) {
    $scope.tasklists = null;
    $scope.showSpinner = true;

  var ms= (1000 * 60 * 60 * 24);
  var now=new Date();
        
 $scope.oldTask=function(task){
        var created_at=task.created_at.split(':')[0];
        var day_diff=Math.floor(created_at-current_date);
        return (day_diff);
    }

    Tasklist.all().whenChanged( function (tasklists) {
        $scope.$apply( function () {
          $scope.tasklists = tasklists;
          $scope.showSpinner = false;
        });
    });
  });
  