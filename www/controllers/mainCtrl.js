angular.module('starter')
  .controller('mainCtrl',function ($scope,$state) {
    console.log('Main start...');

    $scope.btnBack = function () {
      $state.go('login');
      console.log('Logout Pressed')
    };

    $scope.btnHome = function () {
      $state.go('home');
      console.log('home pressed')
    };
    $scope.btnRepair = function () {
      $state.go('repair');
      console.log('repair pressed')
    };
    $scope.btnNews = function () {
      $state.go('news');
      console.log('news pressed')
    };
  });
