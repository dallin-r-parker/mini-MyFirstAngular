angular.module('firstApp').controller('mainCtrl', function($scope) {

  $scope.friends = ['dallin', 'trevor', 'mikayda', 'karlee'];

  $scope.addName = function (nameInput) {
    friends.push(nameInput);
  }

});
