app.controller('authCtrl', function($scope, $state, $rootScope, Data) {

    $scope.login = {};
    $scope.login.email = '9845354756';
    $scope.login.password = 'admin';
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

    $scope.dash = true;

    $scope.actme = function(datya) {
        console.log(datya);
    }
});