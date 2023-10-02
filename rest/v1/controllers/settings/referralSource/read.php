<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$refSource = new ReferralSource($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("referralsourceid", $_GET)) {
  $refSource->referral_source_aid  = $_GET['referralsourceid'];
  checkId($refSource->referral_source_aid );
  $query = checkReadById($refSource);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($refSource);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();