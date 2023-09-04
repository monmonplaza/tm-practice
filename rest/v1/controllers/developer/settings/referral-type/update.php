<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralType = new ReferralType($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("referralTypeId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $referralType->referral_type_aid = $_GET['referralTypeId'];
    $referralType->referral_type_name = checkIndex($data, "referral_type_name");
    $referralType->referral_type_update_at = date("Y-m-d H:i:s");
    checkId($referralType->referral_type_aid);
    // update
    $query = checkUpdate($referralType);
    returnSuccess($referralType, "Referral Type", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
