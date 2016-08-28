angular.module('categories.tasks', [
	'categories.tasks.create',
	'categories.tasks.edit',
	'todo.models.categories',
	'todo.models.tasks'
])
	.config(function ($stateProvider) {
		$stateProvider
			.state('todo.categories.tasks', {
				url: 'categories/:category',
				views: {
					'tasks@':{
						templateUrl: 'app/categories/tasks/tasks.tmpl.html',
						controller: 'TasksListCtrl as tasksListCtrl'
					}
				}	
			})
		;
	})	
	.controller('TasksListCtrl', function ($stateParams, TasksModel) { 
		var tasksListCtrl = this;
		tasksListCtrl.currentCatgoryName = $stateParams.category;
		TasksModel.getTasks()
		.then(function(result){
			tasksListCtrl.tasks = result;
		});
	})
;