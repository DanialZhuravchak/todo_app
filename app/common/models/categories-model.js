angular.module('todo.models.categories',[

])
	.service('CategoriesModel', function($http){
		var model = this; 
		URLS = { 
			FETCH: 'data/categories.json'
		};

		function extract(result) {
			result.data;
		}

		function cacheCategories(result){ 
			categories = extract(result);
			return categories;
		}
		model.getCategories = function () { 
			return $http.get(URLS.FETCH).then(cacheCategories);
		}
	})
;