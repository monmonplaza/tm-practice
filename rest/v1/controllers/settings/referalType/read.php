<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referalType = new ReferalType($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("reftypeid", $_GET)) {
  $referalType->referral_type_aid = $_GET['reftypeid'];
  checkId($referalType->referral_type_aid);
  $query = checkReadById($referalType);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($referalType);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();