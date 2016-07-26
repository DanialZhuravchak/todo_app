var app = angular.module('todoApp', []);

app.controller('MainCtrl', function($scope){
  $scope.categories = [
        {"id": 0, "name": "Робота"},
        {"id": 1, "name": "Навчання"},
        {"id": 2, "name": "Стартап"},
        {"id": 3, "name": "Політех"}, 
      ];
  $scope.tasks = [
    {"id": 0,"content":"Зробити туду list на ангулярі.", "category":"Робота"},
    {"id": 1,"content":"Написати lean", "category":"Стартап"},
    {"id": 2,"content":"Купити зошит", "category":"Політех"},
    {"id": 3,"content":"Вивчити angular2", "category":"Навчання"},
    {"id": 4,"content":"Написати апу на джанго", "category":"Робота"},
  ];

  $scope.currentCategory = null; 

  function setCurrentCategory(category) { 
    $scope.currentCategory = category;
  }

  function isCurrentCategory(category) { 
    return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
  }

  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;

  //------------------------------------------------
  // CREATING AND EDITING TASKS 
  //------------------------------------------------

  $scope.isCreating = false; 
  $scope.isEditing = false;

  function startCreating() { 
    $scope.isCreating = true;
    $scope.isEditing = false; 
  } 

  function cancelCreating() { 
    $scope.isCreating = false; 
  }

  function startEditing() { 
    $scope.isCreating = false;
    $scope.isEditing = true; 
  }

  function cancelEditing() { 
    $scope.isEditing = false; 
  }

  function shouldShowCreating() { 
    return $scope.currentCategory && !$scope.isEditing;
  }


  function shouldShowEditing() { 
    return $scope.isEditing && !$scope.Creating;
  }

  
  $scope.startCreating = startCreating;
  $scope.cancelCreating = cancelCreating; 
  $scope.startEditing = startEditing; 
  $scope.cancelEditing = cancelEditing;
  $scope.shouldShowCreating = shouldShowCreating; 
  $scope.shouldShowEditing = shouldShowEditing;

});


