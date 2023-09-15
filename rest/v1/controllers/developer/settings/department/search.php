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
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true); 

// check data
checkPayload($data);
   
    if (empty($_GET)) {
        // get task id from query string
        $department->department_search = checkIndex($data, "search");
        $query = checkSearch($department);
        http_response_code(200);
        getQueriedData($query); 
    }

// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
