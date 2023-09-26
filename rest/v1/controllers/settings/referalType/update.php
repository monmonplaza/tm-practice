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
  // check data
  checkPayload($data);
  // get data
  $referalType->referral_type_aid  = $_GET['reftypeid'];
  $referalType->referral_type_name = checkIndex($data, "referral_type_name");
  $referalType->referral_type_datetime = date("Y-m-d H:i:s");
  checkId($referalType->referral_type_aid);
  // update
  $query = checkUpdate($referalType);
  returnSuccess($referalType, "ReferalType", $query);
}

// return 404 error if endpoint not available
checkEndpoint();