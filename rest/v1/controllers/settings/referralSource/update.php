<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$refSource  = new ReferralSource($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("referralsourceid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $refSource->referral_source_aid  = $_GET['referralsourceid'];
  $refSource->referral_source_name = checkIndex($data, "referral_source_name");
  $refSource->referral_source_datetime = date("Y-m-d H:i:s");
  checkId($refSource->referral_source_aid);
  // update
  $query = checkUpdate($refSource);
  returnSuccess($refSource, "Referral Source", $query);
}

// return 404 error if endpoint not available
checkEndpoint();