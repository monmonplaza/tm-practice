<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralType = new ReferralType($conn);
// get $_GET data 

if (array_key_exists("referralTypeId", $_GET)) {
    $referralType->referral_type_aid = $_GET['referralTypeId'];
    checkId($referralType->referral_type_aid);
    $query = checkReadById($referralType);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($referralType);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
