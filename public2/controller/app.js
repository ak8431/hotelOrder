var app=angular.module('myapp',[]);
// app.config($routeProvider,$locationprovider
// 	.when()
// );

app.controller('indexController',[$scope,function($scope){
	$scope.user={
			name : "Amit Kumar",
			hotel_name : "Rocker's Club"
		};
	$scope.items=[
	{item_name : "Non-veg Biryani" ,item_price : 1000},
	{item_name : "Veg-Biryani" ,item_price : 700}
	]
}]);


app.controller('additemController',function($scope){
		$scope.msg="Hello";
		$scope.user={
				name : "Amit Kumar",
				hotel_name : "Rocker's Club"
			};

			$scope.additemdetails=function(){
				window.location.assign("add_item.html")
			}
	});