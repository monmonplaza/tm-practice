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
    // get data
    $location->location_aid  = $_GET['locationId'];
    checkId($location->location_aid);

    $query = checkDelete($location);
    returnSuccess($location, "Location", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
