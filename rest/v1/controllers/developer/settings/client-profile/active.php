<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/client-profile/ClientProfile.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientProfile = new ClientProfile($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("clientProfileId", $_GET)) {
    // check data
    checkPayload($data);
    $clientProfile->client_aid = $_GET['clientProfileId'];
    $clientProfile->client_is_active = trim($data["isActive"]);
    // $clientProfile->client_updated_at = date("Y-m-d H:i:s");
    checkId($clientProfile->client_aid);
    $query = checkActive($clientProfile);
    http_response_code(200);
    returnSuccess($clientProfile, "ClientProfile", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
