<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$location = new Location($conn);
// get $_GET data 

if (array_key_exists("locationId", $_GET)) {
    $location->location_aid = $_GET['locationId'];
    checkId($location->location_aid);
    $query = checkReadById($location);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($location);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
