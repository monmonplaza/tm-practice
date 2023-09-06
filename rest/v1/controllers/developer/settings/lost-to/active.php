<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/lost-to/LostTo.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostTo = new LostTo($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("lostToId", $_GET)) {
    // check data
    checkPayload($data);
    $lostTo->lost_to_aid = $_GET['lostToId'];
    $lostTo->lost_to_is_active = trim($data["isActive"]);
    // $lostTo->lost_to_datetime = date("Y-m-d H:i:s");
    checkId($lostTo->lost_to_aid);
    $query = checkActive($lostTo);
    http_response_code(200);
    returnSuccess($lostTo, "LostTo", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
