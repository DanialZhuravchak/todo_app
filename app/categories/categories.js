angular.module('categories',[
	'todo.models.categories'
]) 
	.config(function($stateProvider){
		$stateProvider
			.state('todo.categories', {
				url:'/',
				views:{
					'categories@':{
						controller: 'CategoriesListCtrl as categoriesListCtrl',
						templateUrl: 'app/categories/categories.tmpl.html'
				}
			}
		})
	})
	.controller('CategoriesListCtrl', function (CategoriesModel){
		var categoriesListCtrl = this;
		CategoriesModel.getCategories()
		.then(function(result){
			categoriesListCtrl.categories = result;
		});
	});