<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/settings/activities/activities.php';


// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$emp = new Employees($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();
  if (array_key_exists("empid", $_GET)) {
    // check data
    checkPayload($data);
    $emp->emp_aid = $_GET['empid'];
    $emp->emp_is_active = trim($data["isActive"]);
    checkId($emp->emp_aid);
    $query = checkActive($emp);
    http_response_code(200);
    returnSuccess($emp, "Employee", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
