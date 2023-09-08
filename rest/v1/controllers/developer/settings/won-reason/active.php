<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/won-reason/WonReason.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wonReason = new WonReason($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("wonReasonId", $_GET)) {
    // check data
    checkPayload($data);
    $wonReason->won_reason_aid = $_GET['wonReasonId'];
    $wonReason->won_reason_is_active = trim($data["isActive"]);
    // $won_reasonProfile->won_reason_updated_at = date("Y-m-d H:i:s");
    checkId($wonReason->won_reason_aid);
    $query = checkActive($wonReason);
    http_response_code(200);
    returnSuccess($wonReason, "WonReason", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
