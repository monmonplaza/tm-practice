<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/referral-type/referralType.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralType = new ReferralType($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("ReferralTypeId", $_GET)) {
    // check data
    checkPayload($data);
    $referralType->referral_type_aid = $_GET['ReferralTypeId'];
    $referralType->referral_type_is_active = trim($data["isActive"]);
    // $referralType->department_datetime = date("Y-m-d H:i:s");
    checkId($referralType->referral_type_aid);
    $query = checkActive($referralType);
    http_response_code(200);
    returnSuccess($referralType, "Referral Type", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
