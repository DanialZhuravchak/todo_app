angular.module('todoApp', [
  'ui.router',
  'categories',
  'categories.tasks'
  ])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('todo', { 
        url: '',
        abstract: true
      });
      $urlRouterProvider.otherwise('/');
  })
.controller('MainController', function($scope){
  $scope.categories = [
        {"id": 0, "name": "Робота"},
        {"id": 1, "name": "Навчання"},
        {"id": 2, "name": "Стартап"},
        {"id": 3, "name": "Політех"}, 
      ];
  $scope.tasks = [
    {"id": 0,"title":"Зробити туду list на ангулярі.", "category":"Робота", "info":"Просто додаткова інфа"},
    {"id": 1,"title":"Написати lean", "category":"Стартап", "info":"Просто додаткова інфа"},
    {"id": 2,"title":"Купити зошит", "category":"Політех", "info":"Просто додаткова інфа"},
    {"id": 3,"title":"Вивчити angular2", "category":"Навчання", "info":"Просто додаткова інфа"},
    {"id": 4,"title":"Написати апу на джанго", "category":"Робота", "info":"Просто додаткова інфа"}
  ];

  $scope.isCreating = false;
  $scope.isEditing = false;
  $scope.currentCategory = null;
  $scope.editedTask = null;

  function isCurrentCategory(category) { 
    return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
  }

  function setCurrentCategory(category) { 
    $scope.currentCategory = category;

    cancelCreating();
    cancelEditing();
  }

  $scope.isCurrentCategory = isCurrentCategory;
  $scope.setCurrentCategory = setCurrentCategory;

  function setEditedTask(task) { 
    $scope.editedTask = angular.copy(task);
  }

  function isSelectedTask(taskId) { 
    return $scope.editedTask !== null && $scope.editedTask.id === taskId;
  }

  $scope.setEditedTask = setEditedTask;
  $scope.isSelectedTask = isSelectedTask;

  function resetCreateForm() { 
    $scope.task = { 
      title: '',
      category: $scope.currentCategory.name,
      info: '' 
    };
  }   
  //------------------------------------------------
  // CRUD(Create, Update, Delete) 
  //------------------------------------------------
  
  function createTask(task) { 
    task.id = $scope.tasks.length;
    $scope.tasks.push(task);
    resetCreateForm();
  }


  function updateTask(task) { 
    var index = _.findIndex($scope.tasks, function(t) { 
      return t.id == task.id;
    }); 
    $scope.tasks[index] = task;

    $scope.editedTask = null; 
    $scope.isEditing = false; 
  }

  function deleteTask(task) { 
    _.remove($scope.task, function(t) { 
      return t.id == task.id;
    });
  }

  $scope.createTask = createTask;
  $scope.updateTask = updateTask; 
  $scope.deleteTask = deleteTask;


  //------------------------------------------------
  // CREATING AND EDITING TASKS 
  //------------------------------------------------

  // Creating 
  function shouldShowCreating() { 
    return $scope.currentCategory && !$scope.isEditing;
  }

  function startCreating() { 
    $scope.isCreating = true;
    $scope.isEditing = false; 
    resetCreateForm();
  } 

  function cancelCreating() { 
    $scope.isCreating = false; 
  }


  $scope.startCreating = startCreating;
  $scope.cancelCreating = cancelCreating; 
  $scope.shouldShowCreating = shouldShowCreating; 

  // Editing 
  function startEditing() { 
    $scope.isCreating = false;
    $scope.isEditing = true; 
  }

  function cancelEditing() { 
    $scope.isEditing = false; 
    $scope.editedTask = null;
  }

  function shouldShowEditing() { 
    return $scope.isEditing && !$scope.isCreating;
  }

  
  
  $scope.startEditing = startEditing; 
  $scope.cancelEditing = cancelEditing;
  $scope.shouldShowEditing = shouldShowEditing;


});


