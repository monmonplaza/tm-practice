<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wonReason = new WonReason($conn);
// get $_GET data 

if (array_key_exists("wonReasonId", $_GET) ) {
    $wonReason->won_reason_aid = $_GET['wonReasonId'];
    checkId($wonReason->won_reason_aid);
    $query = checkReadById($wonReason);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($wonReason);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
