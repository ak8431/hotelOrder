var app = angular.module('myapp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'registerController'
            })
            .when('/menu', {
                templateUrl: 'views/menu.html',
                controller: 'menuController'
            })
            .when('/add_item', {
                templateUrl: 'views/add_item.html',
                controller: 'additemController'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

app.controller('indexController', ['$scope','$rootScope', function($scope,$rootScope) {
    $rootScope.user = {
        name: "Amit Kumar",
        hotel_name: "Rocker's Club"
    };
}]);

app.controller('loginController', function($scope, $http, $rootScope, $location) {
    $scope.user = {
        email_id: $scope.email_id,
        password: $scope.password
    }
    $scope.validate = function() {
        if ($scope.user.email_id == '') {
            alert('Error Please enter email');
            return false;
        } else if ($scope.user.password == '') {
            alert('Error Please enter password');
            return false;
        }
        return true;
    }

    $scope.login = function() {
        if (!$scope.validate()) {
            return;
        }
        $http.post('https://queue-less.herokuapp.com/api/login', $scope.user).success(function(data, status, headers, config) {
            console.log(data)
            if (data.success) {
                console.log($scope.user.email_id)
                $rootScope.useremail = $scope.user.email_id;
                localStorage.setItem('key',$rootScope.useremail);
                $location.path('/menu');
            } else {
                console.log(data.message)
                $scope.api = data.message;
            }

        });

    };
});


app.controller('registerController', function($scope, $http, $rootScope, $location) {
    $scope.register = function() {
        $scope.hotel = {
            name: $scope.hotel.name,
            phone_no: $scope.hotel.phone_no,
            email_id: $scope.hotel.email_id,
            password: $scope.hotel.password
        }
        console.log($scope.hotel)
        $http.post('https://queue-less.herokuapp.com/api/register', $scope.hotel).success(function(data) {
            console.log(data)
            if (data.success) {
                // alert("success")
                $scope.hotel={
                    name:'',
                    phone_no:'',
                    email_id:'',
                    password:''
                }
                $location.path('/login');

            } else {
                console.log(data.message)
                $scope.api=data.message;
            }
        });

    };
});

app.controller('menuController',function($scope,$http,$location,$rootScope) {
    // $rootScope.useremail=$scope.email_id
    $scope.init = function() {
        $http({
            url: 'https://queue-less.herokuapp.com/api/get_items',
            method: 'GET',
            headers: {
                'key':$rootScope.useremail,
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            $scope.items = response.data.data;
        }, function(response) {});
    }
    $scope.init();

    $scope.delete = function(index){
        $scope.items.splice(index$scope.items.indexOf(item),1);
    }
});


app.controller('additemController',function($scope, $http, $rootScope,$location) {
    $scope.additemdetails = function() {
        $scope.item = {
            item_name:$scope.item_name,
            item_price:$scope.item_price
        }
        $http.post('https://queue-less.herokuapp.com/api/additem', $scope.item).success(function(response) {
            console.log(response)
            if (response.message) {
                $scope.item = {};
                $location.path('/menu');
            } else {
                console.log(response.message)
            }
        });
    }
});

