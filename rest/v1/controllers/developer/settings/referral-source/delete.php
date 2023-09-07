<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralSource = new ReferralSource($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("referralSourceId", $_GET)) {
    // get data
    $referralSource->referral_source_aid = $_GET['referralSourceId'];
    checkId($referralSource->referral_source_aid);

    $query = checkDelete($referralSource);
    returnSuccess($referralSource, "ReferralSource", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
