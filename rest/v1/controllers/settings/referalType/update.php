<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$refType = new ReferalType($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("reftypeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $refType->emp_aid = $_GET['reftypeid'];
  $refType->emp_name = checkIndex($data, "referral_type_name");
  $refType->emp_position = checkIndex($data, "emp_position");
  $refType->emp_datetime = date("Y-m-d H:i:s");
  checkId($emp->emp_aid);
  // update
  $query = checkUpdate($refType);
  returnSuccess($refType, "Employees", $query);
}

// return 404 error if endpoint not available
checkEndpoint();