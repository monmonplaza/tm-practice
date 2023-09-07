<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralSource = new ReferralSource($conn);
// get $_GET data 

if (array_key_exists("referralSourceId", $_GET) ) {
    $referralSource->referral_source_aid = $_GET['referralSourceId'];
    checkId($referralSource->referral_source_aid);
    $query = checkReadById($referralSource);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($referralSource);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
