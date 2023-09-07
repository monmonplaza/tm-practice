<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostReason = new LostReason($conn);
// get $_GET data 

if (array_key_exists("lostReasonId", $_GET) ) {
    $lostReason->lost_reason_aid = $_GET['lostReasonId'];
    checkId($lostReason->lost_reason_aid);
    $query = checkReadById($lostReason);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($lostReason);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
