<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$employee = new Employees($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("employeeid", $_GET)) {
  $role->emp_aid = $_GET['employeeid'];
  checkId($employee->emp_aid);
  $query = checkReadById($employee);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($employee);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();