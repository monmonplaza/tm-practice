<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/referral-source/ReferralSource.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralSource = new ReferralSource($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("referralSourceId", $_GET)) {
    // check data
    checkPayload($data);
    $referralSource->referral_source_aid = $_GET['referralSourceId'];
    $referralSource->referral_source_is_active = trim($data["isActive"]);
    // $referralSource->referral_source_datetime = date("Y-m-d H:i:s");
    checkId($referralSource->referral_source_aid);
    $query = checkActive($referralSource);
    http_response_code(200);
    returnSuccess($referralSource, "ReferralSource", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
