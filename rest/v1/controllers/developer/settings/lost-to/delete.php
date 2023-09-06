<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostTo = new LostTo($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("lostToId", $_GET)) {
    // get data
    $lostTo->lost_to_aid = $_GET['lostToId'];
    checkId($lostTo->lost_to_aid);

    $query = checkDelete($lostTo);
    returnSuccess($lostTo, "LostTo", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
