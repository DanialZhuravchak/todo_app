angular.module('categories',[
	'todo.models.categories'
]) 
	.config(function($stateProvider){
		$stateProvider
			.state('todo.categories', {
				url:'/',
				views:{
					'categories@':{
						controller: 'CategoriesCtrl',
						templateUrl: 'app/categories/categories.tmpl.html'
					},
					'tasks@':{
						controller: 'TasksCtrl',
						templateUrl: 'app/categories/tasks/tasks.tmpl.html'
					}
				}
			})
	})
	.controller('CategoriesCtrl', function CategoriesCtrl($scope){
		
	})
	.controller('TasksCtrl', function TasksCtrl($scope){

	});