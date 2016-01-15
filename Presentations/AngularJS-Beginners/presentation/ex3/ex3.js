angular.module('MyApp', []);

angular.module('MyApp').controller('MyController', function ( $scope, $http ) {

    $scope.FetchJokes = function() {
        $http.get( "http://api.icndb.com/jokes/random/3")
        .then( function(response) {
            $scope.data = response.data;
        });
    };

    /*$scope.data = {
        "type": "success",
        "value": [
            { "id": 513, "joke": "Chuck Norris does not...",
              "categories": ["nerdy"] },
            { "id": 156, "joke": "There is no such...",
              "categories": [] },
            { "id": 249, "joke": "Maslow's theory...",
              "categories": [] }
        ]
    }*/

});