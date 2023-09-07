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
    // get data
    $lostReason->lost_reason_aid = $_GET['lostReasonId'];
    checkId($lostReason->lost_reason_aid);

    $query = checkDelete($lostReason);
    returnSuccess($lostReason, "LostReason", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
