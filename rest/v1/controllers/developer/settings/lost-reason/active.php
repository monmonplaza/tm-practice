<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/lost-reason/LostReason.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostReason = new LostReason($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("lostReasonId", $_GET)) {
    // check data
    checkPayload($data);
    $lostReason->lost_reason_aid = $_GET['lostReasonId'];
    $lostReason->lost_reason_is_active = trim($data["isActive"]);
    // $lost_reasonProfile->lost_reason_updated_at = date("Y-m-d H:i:s");
    checkId($lostReason->lost_reason_aid);
    $query = checkActive($lostReason);
    http_response_code(200);
    returnSuccess($lostReason, "LostReason", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
