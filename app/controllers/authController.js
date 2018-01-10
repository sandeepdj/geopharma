app.controller('authCtrl', function($scope, $state, $rootScope, Data) {


    $scope.login = {};
    $scope.doLogin = function(customer) {
        Data.post('login', { customer: customer }).then(function(results) {
            Data.toast(results);
            if (results.status == "success") {
                // getroles();
                var uid = results.uid;
                $state.go('app.Home', {}, { reload: true });
            }
        });
    };




});