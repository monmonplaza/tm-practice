<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostReason = new LostReason($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("lostReasonId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $lostReason->lost_reason_aid = $_GET['lostReasonId'];
    $lostReason->lost_reason_first_name = checkIndex($data, "lost_reason_first_name");
    $lostReason->lost_reason_last_name = checkIndex($data, "lost_reason_last_name");
    $lostReason->lost_reason_description = checkIndex($data, "lost_reason_description");
    $lostReason->lost_reason_updated_at= date("Y-m-d H:i:s");
    checkId($lostReason->lost_reason_aid);
    // update
    $query = checkUpdate($lostReason);
    returnSuccess($lostReason, "LostReason", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
