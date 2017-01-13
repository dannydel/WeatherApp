'use strict';

angular.module('desktopApp')
  .controller('MainCtrl', [ '$scope', '$http',function ($scope, $http) {

  $scope.fetch = function(zipcode){
      $http.get('http://api.openweathermap.org/data/2.5/weather?zip='
                  + zipcode
                  + ',us&mode=json&units=imperial&APPID=4c496d6e361d93a2e6e17aa42ae2ef4a').
        then(function(response){
          console.log(response);
          $scope.myWeather = response.data;
          $scope.ImagePath = "http://openweathermap.org/img/w/" + $scope.myWeather.weather[0].icon +".png"
        }).catch(function(response){
          console.log("This is an error: " + response.status, response.data);
        }).finally(function(){
          console.log("Finished getting weather.")
        });
      }
  }]);
