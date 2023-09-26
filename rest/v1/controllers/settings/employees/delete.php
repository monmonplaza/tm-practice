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
  // get data
  $emp->emp_aid = $_GET['empid'];
  checkId($emp->emp_aid);
  

  $query = checkDelete($emp);

  returnSuccess($emp, "Employee", $query);
}

// return 404 error if endpoint not available
checkEndpoint();