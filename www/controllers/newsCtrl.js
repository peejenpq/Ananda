angular.module('starter')

  .controller('newsCtrl',function ($scope,$state) {

    $scope.btnBack = function () {
      $state.go('main');
    };

    $scope.myDataArray = [
      {
        title: 'เชิญร่วมงานปาร์ตี้ชั้น 15',
        description: 'งานฉลองครบรอบ'
      },
      {
        title: 'แจ้งการปิดประตู 2',
        description: 'ปิดเเพื่อซ่อมบำรุงวันที่ 12/2/60 - 15/2/60'
      },
      {
        title: 'ฟิตเนสเปิดบริการแล้ววันนี้ โปรโมชั่นมากมาย',
        description: 'สมัครวันนี้โปรโมชั่นมากมาย'
      }
    ];

    $scope.btnDetail = function (data) {
      console.log(data);
      console.log('btn Detail Pressed');
      $state.go('news_detail',{title:data.title,description:data.description});
    }
  });
