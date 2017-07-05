hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, EmployeeService) {

        /*
        $scope.employee = {
         "id": 100,
         "firstName": "Steven",
         "lastName": "King",
         "email": "SKING",
         "phoneNumber": "515.123.4567",
         "hireDate": "1987-06-17",
         "jobId": 1,
         "salary": 24000.00,
         "commissionPct": null,
         "managerId": null,
         "departmentId": 90
         };
         */

        // Handle a promise
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $scope.back = function () {
            $location.url('/employeeList');
        }
    }]);