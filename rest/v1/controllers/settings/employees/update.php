<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$emp = new Employees($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("empid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $emp->emp_aid = $_GET['empid'];
  $emp->emp_name = checkIndex($data, "emp_name");
  $emp->emp_position = checkIndex($data, "emp_position");
  $emp->emp_datetime = date("Y-m-d H:i:s");
  checkId($emp->emp_aid);
  // update
  $query = checkUpdate($emp);
  returnSuccess($emp, "Employees", $query);
}

// return 404 error if endpoint not available
checkEndpoint();