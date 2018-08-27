// Code goes here
  var app = angular.module("myApp",[]);
  app.controller("MyController",function($scope,$http){
    $http.get('https://api.github.com/users/lakdivian').then(
      function(response){
        $scope.name = response.data.name;
        $scope.location = response.data.location;
        $http.get(response.data.repos_url).then(function(response){
          $scope.repo_data = response.data;
        })
      }
    )
    $scope.message = "Hello Angular";
  }
)