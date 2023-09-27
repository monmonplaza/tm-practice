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
  // get data
  $offices->office_aid = $_GET['officeid'];
  checkId($offices->office_aid);

  $query = checkDelete($offices);

  returnSuccess($offices, "Offices", $query);
}

// return 404 error if endpoint not available
checkEndpoint();