<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$location = new Location($conn);
// get should not be present
if (array_key_exists("locationId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$location->location_barrangay = checkIndex($data, "location_barrangay");
$location->location_city = checkIndex($data, "location_city");
$location->location_province = checkIndex($data, "location_province");
$location->location_zip_code = checkIndex($data, "location_zip_code");
$location->location_is_active = 1;
$location->location_created_at = date("Y-m-d H:i:s");
$location->location_update_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($referralType, $referralType->department_name);
// create
$query = checkCreate($location);
returnSuccess($location, "Location", $query);
