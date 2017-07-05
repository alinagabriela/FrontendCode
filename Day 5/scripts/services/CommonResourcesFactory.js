hrApp.factory('CommonResourcesFactory', function () {
        var baseUrl = "http://10.16.8.77:8181/datamodel/";
        return {
            findAllDepartmentsUrl: baseUrl + "departments/findAll",
            findAllEmployeesUrl: baseUrl + "employees/findAll",
            findAllJobsUrl: baseUrl + "jobs/findAll",
            findAllLocationsUrl: baseUrl + "locations/findAll",
            findOneDepartmentUrl: baseUrl + "departments/findOne/",
            findOneEmployeeUrl: baseUrl + "employees/findOne/",
            findOneJobUrl: baseUrl + "jobs/findOne/",
            findOneLocationUrl: baseUrl + "locations/findOne/",
            deleteDepartmentUrl: baseUrl + "departments/delete",
            deleteEmployeeUrl: baseUrl + "employees/delete",
            deleteJobUrl: baseUrl + "jobs/delete",
            deleteLocationUrl: baseUrl + "locations/delete",
            addDepartmentUrl: baseUrl + "departments/create",
            addEmployeeUrl: baseUrl + "employees/create",
            addJobUrl: baseUrl + "jobs/create",
            addLocationUrl: baseUrl + "locations/create",
            editDepartmentUrl: baseUrl + "departments/edit",
            editEmployeeUrl: baseUrl + "employees/edit",
            editJobUrl: baseUrl + "jobs/edit",
            editLocationUrl: baseUrl + "locations/edit"
        };
    }
);

hrApp.factory('CommonResourcesFactoryBackup', function () {
        var baseUrl = "http://10.16.8.77:8181/hrapp/";
        return {
            findAllDepartmentsUrl: baseUrl + "departments",
            findAllEmployeesUrl: baseUrl + "employees",
            findAllJobsUrl: baseUrl + "jobs",
            findAllLocationsUrl: baseUrl + "locations",
            findOneDepartmentUrl: baseUrl + "departments/",
            findOneEmployeeUrl: baseUrl + "employees/",
            findOneJobUrl: baseUrl + "jobs/",
            findOneLocationUrl: baseUrl + "locations/",
            deleteDepartmentUrl: baseUrl + "departments",
            deleteEmployeeUrl: baseUrl + "employees",
            deleteJobUrl: baseUrl + "jobs",
            deleteLocationUrl: baseUrl + "locations",
            addDepartmentUrl: baseUrl + "departments",
            addEmployeeUrl: baseUrl + "employees",
            addJobUrl: baseUrl + "jobs",
            addLocationUrl: baseUrl + "locations",
            editDepartmentUrl: baseUrl + "departments",
            editEmployeeUrl: baseUrl + "employees",
            editJobUrl: baseUrl + "jobs",
            editLocationUrl: baseUrl + "locations"
        };
    }
);