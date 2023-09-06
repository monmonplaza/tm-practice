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
    // check data
    checkPayload($data);
    // get data
    $referralSource->referral_source_aid = $_GET['referralSourceId'];
    $referralSource->referral_source_name = checkIndex($data, "referral_source_name");
    $referralSource->referral_source_description = checkIndex($data, "referral_source_description");
    $referralSource->referral_source_referral_type_id = checkIndex($data, "referral_source_referral_type_id");
    $referralSource->referral_source_update_at = date("Y-m-d H:i:s");
    checkId($referralSource->referral_source_aid);
    // update
    $query = checkUpdate($referralSource);
    returnSuccess($referralSource, "Referral Source", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
