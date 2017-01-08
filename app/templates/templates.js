angular.module('storeApp.templates', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/templates', {
                            templateUrl: 'templates/templates.html',
                            controller: 'TemplatesController'
                        })
                        .when('/templates/:productId', {
                            templateUrl: 'templates/template-detail.html',
                            controller: 'TemplateDetailController'
                        });
            }])
        .controller('TemplatesController', ['$scope', '$http', function ($scope, $http) {
                $http.get('json/product.json').success(function (response) {
                    $scope.products = response;
                });
            }])
        .controller('TemplateDetailController', ['$scope', '$routeParams', '$http', '$filter', function ($scope, $routeParams, $http, $filter) {
                var productId = $routeParams.productId;
                $http.get('json/product.json').success(function (response) {
                    $scope.product = $filter('filter')(response, function (data) {
                        return data.id = productId;
                    })[productId-1];
                    $scope.mainImage = $scope.product.images[0].name;
                });
            }]);
