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
  // get data
  $referalType->referral_type_aid = $_GET['reftypeid'];
  checkId($referalType->referral_type_aid);

  $query = checkDelete($referalType);

  returnSuccess($referalType, "ReferalType", $query);
}

// return 404 error if endpoint not available
checkEndpoint();