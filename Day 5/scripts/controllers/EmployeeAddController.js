hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'EmployeeService', 'DepartmentsService', 'JobService', 'ManagerService',
        function($scope, $http, $location, CommonResourcesFactory, EmployeeService, DepartmentsService, JobService, ManagerService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
        $scope.departments = [];
        $scope.jobs = [];
        $scope.managers = [];

        /*EmployeeService.findById()
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees service: " + err);
            });*/

        DepartmentsService.findDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at departaments service: " + err);
            });

        JobService.findJob()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs service: " + err);
            });

        ManagerService.findManager()
            .then(function (res) {
                for(var i in res.data) {
                    if(res.data[i].managerId) {
                        var isValid = 1;
                        for (var j in $scope.managers) {
                            if (res.data[i].managerId.employeeId === $scope.managers[j].employeeId) {
                                isValid = 0;
                                break;
                            }
                        }
                        if(isValid) {
                            $scope.managers.push(res.data[i].managerId);
                        }
                    }
                }
            }, function (err) {
                console.log("Error at jobs service: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);