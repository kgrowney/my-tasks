angular
  .module('tasklist')
  .controller("ShowController", function ($scope, Tasklist, supersonic) {
    $scope.tasklist = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Tasklist.find($scope.dataId).then( function (tasklist) {
        $scope.$apply( function () {
          $scope.tasklist = tasklist;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.tasklist.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });