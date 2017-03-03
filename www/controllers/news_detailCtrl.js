angular.module('starter')
  .controller('news_detailCtrl',function ($scope,$state,$stateParams) {
    console.log('News_detail Start...');

    $scope.btnBack = function () {
      console.log('Back Pressed');
      $state.go('news');
    }

    $scope.txtTitle = $stateParams.title;
    $scope.txtDescription = $stateParams.description;
  });
