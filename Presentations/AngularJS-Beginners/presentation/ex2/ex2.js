angular.module('MyApp', []);

angular.module('MyApp').controller('MyController', function ( $scope, $http ) {
    $scope.FetchJoke = function() {
        $http.get( "http://api.icndb.com/jokes/random")
            .then( function(response) {
                $scope.data = response.data;
                console.log($scope.data);
            });

        // $scope.data = {
        //     value: {
        //         id: 100,
        //         joke: 'Chuck Norris can install iTunes without installing Quicktime.'
        //     }
        // };

    };
});
