<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralType = new ReferralType($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("departmentId", $_GET)) {
    $referralType->referral_type_aid = $_GET['departmentId'];
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
