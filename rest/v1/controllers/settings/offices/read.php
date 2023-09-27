<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$offices = new Offices($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("officeid", $_GET)) {
  $offices->office_aid = $_GET['officeid'];
  checkId($offices->office_aid);
  $query = checkReadById($offices);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($offices);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();