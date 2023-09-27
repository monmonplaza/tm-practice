<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/settings/offices/offices.php';


// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$offices = new Offices($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();
  if (array_key_exists("officeid", $_GET)) {
    // check data
    checkPayload($data);
    $offices->office_aid = $_GET['officeid'];
    $offices->office_is_active = trim($data["isActive"]);
    checkId($offices->office_aid);
    $query = checkActive($offices);
    http_response_code(200);
    returnSuccess($offices, "Referral Type", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
