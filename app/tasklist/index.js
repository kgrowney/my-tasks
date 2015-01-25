angular.module('tasklist', [
  /* Declare any module-specific dependencies here */
  'common'
]).service('DateDiff',function () {
  return {
    calculateDays:function (date){
      var ms= (1000 * 60 * 60 * 24);
      var created_at = new Date(date);
      var day_diff = Math.floor((new Date()- created_at) / ms);
      return day_diff<7; //If not older than 7 days returns true and renders your task

    }
  }
});