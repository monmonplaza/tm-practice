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
  // get data
  $refSource->referral_source_aid  = $_GET['referralsourceid'];
  checkId($refSource->referral_source_aid );

  $query = checkDelete($refSource);

  returnSuccess($refSource, "Referral Source", $query);
}

// return 404 error if endpoint not available
checkEndpoint();