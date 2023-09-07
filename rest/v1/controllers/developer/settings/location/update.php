<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$location = new Location($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("locationId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $location->location_aid  = $_GET['locationId'];
    $location->location_barrangay = checkIndex($data, "location_barrangay");
    $location->location_city = checkIndex($data, "location_city");
    $location->location_province = checkIndex($data, "location_province");
    $location->location_zip_code = checkIndex($data, "location_zip_code");
    $location->location_update_at = date("Y-m-d H:i:s");
    checkId($location->location_aid);
    // update
    $query = checkUpdate($location);
    returnSuccess($location, "Location", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
