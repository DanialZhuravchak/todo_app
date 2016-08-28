angular.module('todo.models.tasks', [
	
])
	.service('TasksModel',  function($http){
		var model = this;
		URLS = {
			FETCH: 'data/tasks.json'
		};

		 function extract(result){ 
		 	return result.data;
		 }
		 function cacheTasks(result){
		 	tasks = extract(result);
		 	return tasks;
		 }
  		model.getTasks = function(){ 
  			return $http.get(URLS.FETCH).then(cacheTasks); 
  		}
	})
;