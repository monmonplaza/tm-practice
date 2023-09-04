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
    // get data
    $referralType->referral_type_aid = $_GET['referralTypeId'];
    checkId($referralType->referral_type_aid);

    $query = checkDelete($referralType);
    returnSuccess($referralType, "Referral Type", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
