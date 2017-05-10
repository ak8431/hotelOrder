app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/try', {
                templateUrl: 'views/try.html',
                controller: 'tryController'
            })
            .when('/try2', {
                templateUrl: 'views/try2.html',
                controller: 'tryController2'
            })
            .when('/try3', {
                templateUrl: 'views/try3.html',
                controller: 'tryController3'
            })
    });
app.controller('tryController',function($scope){
    $scope.manualStyle = {
        'background-color': 'red',
        'height':'40px',
        'padding-top':'1%',
        'text-align':'center',
        'color':'black'
    }
});

app.controller('tryController2',function($scope){
    $scope.people = [
        {'name': 'Mickey Mouse', 'type':'mouse', 'gender':'male'},
        {'name': 'Donald Duck', 'type':'duck', 'gender':'male'},
        {'name': 'Minnie Mouse', 'type':'mouse', 'gender':'female'},
        {'name': 'Daisy Duck', 'type':'duck', 'gender':'female'},
        {'name': 'Goofy', 'type':'dog?', 'gender':'male'}
    ]
});

app.controller('tryController3',function($scope){
    $scope.people = [
        {'name': 'Mickey Mouse', 'type':'mouse', 'gender':'male'},
        {'name': 'Donald Duck', 'type':'duck', 'gender':'male'},
        {'name': 'Minnie Mouse', 'type':'mouse', 'gender':'female'},
        {'name': 'Daisy Duck', 'type':'duck', 'gender':'female'},
        {'name': 'Goofy', 'type':'dog', 'gender':'male'}
    ]
    $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: []
        };

    $scope.addTopping = function(topping){
        $scope.model.toppings.push(topping);
        $scope.model.search = null;
    }
});