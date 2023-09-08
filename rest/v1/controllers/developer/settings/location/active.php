<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/location/Location.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$location = new Location($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("locationId", $_GET)) {
    // check data
    checkPayload($data);
    $location->location_aid = $_GET['locationId'];
    $location->location_is_active = trim($data["isActive"]);
    $location->location_update_at = date("Y-m-d H:i:s");
    checkId($location->location_aid);
    $query = checkActive($location);
    http_response_code(200);
    returnSuccess($location, "Location", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
