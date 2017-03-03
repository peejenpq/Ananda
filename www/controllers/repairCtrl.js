angular.module('starter')
  .controller('repairCtrl',function ($scope,$state,$ionicPopup, $cordovaCamera) {
    console.log('Repair start...');
    $scope.btnBack = function () {
      $state.go('main');
    };

    $scope.takePicture = function() {
      var options = {
        quality : 75,
        destinationType : Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // An error occured. Show a message to the user
      });
    }

    $scope.btnSendForm = function() {
      console.log('Confirm Press.....');

      var confirmPopup = $ionicPopup.confirm({
        title: 'Confirm!'
      });

      confirmPopup.then(function (res) {
        if (res) {
          console.log('Ok');
          $state.go('main')
        } else {
          console.log('Cancel');
        }
      });
    }

  });
