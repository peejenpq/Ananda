angular.module('starter')

  .controller('loginCtrl',function ($scope,$http,$state,$ionicPopup) {
    console.log('Login Start....');
    $scope.resultAction = "";
    $scope.form = {};

    $scope.btnLogin = function () {
      console.log($scope.form.txt_user);
      console.log($scope.form.txt_pass);
      console.log('Login Pressed');

      if($scope.form.txt_user == '1') {
        $state.go('main');
      }
      $http(
        {
          url:'http://localhost:800/wsAnanda/login.php',
          method:'POST',
          data:{
            'var_user':$scope.form.txt_user,
            'var_pass':$scope.form.txt_pass
          }
        }//http

      ).then(function (response) {
        console.log(response);
        console.log(response.data.results);

        if(response.data.results == '1'){
          $state.go('main');
        }
        else if(response.data.results == 'not match'){
          $scope.showAlert('Username or Password Incorrect!');
        }
        else if(response.data.results == 'Error'){
          console.log('Error Please contact Admin');
          $scope.showAlert('System Error');
        }
      },function (error) {
        $scope.resultAction = "System Error";
      });
      // An alert dialog
      $scope.showAlert = function(msg) {
        var alertPopup = $ionicPopup.alert({
          title: 'Warning Message',
          template: msg
        });
      };
      //--------------------------------------------
    };//btnLogin

  });
