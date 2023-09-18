<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/department/Department.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$department = new Department($conn); 
// validate api key 
if (array_key_exists("start", $_GET)) {
    
    $department->department_start = $_GET['start'];
    $department->department_total = 5;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($department->department_start, $department->department_total);

    $query = checkReadLimit($department);
    $total_result = checkReadAll($department);
    http_response_code(200);
    checkReadQuery(
            $query,
            $total_result,
            $department->department_total,
            $department->department_start
        );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
