angular.module('starter')
  .controller('homeCtrl',function ($scope,$state) {
    console.log('Home start...');
    $scope.btnBack = function () {
      $state.go('main');
    };

    $scope.btnEdit = function () {
      $state.go('edit');
    };

  });
