<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostTo = new LostTo($conn);
// get should not be present
if (array_key_exists("lostToId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$lostTo->lost_to_description = checkIndex($data, "lost_to_description");
$lostTo->lost_to_first_name = checkIndex($data, "lost_to_first_name");
$lostTo->lost_to_last_name = checkIndex($data, "lost_to_last_name");
$lostTo->lost_to_name = checkIndex($data, "lost_to_name");

$lostTo->lost_to_is_active = 1;
$lostTo->lost_to_created_at = date("Y-m-d H:i:s");
$lostTo->lost_to_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($lostTo, $lostTo->lost_to_description);
// create
$query = checkCreate($lostTo);
returnSuccess($lostTo, "LostTo", $query);
