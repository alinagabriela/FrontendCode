hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', function ($scope, EmployeeActionsService) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.currentDate = new Date();
}]);
