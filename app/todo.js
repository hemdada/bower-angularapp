function TodoCtrl($scope) {
    $scope.todos = [
        {title:"sample1", done:false},
        {title:"example1", done:false}
    ];
    $scope.addTodo = function () {
        $scope.todos.push({title:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    }
    $scope.getTotalTodo = function () {
        return $scope.todos.length;
    }

    $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(function (todo) {
            return !todo.done
        })
    }

}