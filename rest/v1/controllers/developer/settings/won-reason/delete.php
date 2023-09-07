<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wonReason = new WonReason($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("wonReasonId", $_GET)) {
    // get data
    $wonReason->won_reason_aid = $_GET['wonReasonId'];
    checkId($wonReason->won_reason_aid);

    $query = checkDelete($wonReason);
    returnSuccess($wonReason, "WonReason", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
