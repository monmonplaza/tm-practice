<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostTo = new LostTo($conn);
// get $_GET data 

if (array_key_exists("lostToId", $_GET) ) {
    $lostTo->lost_to_aid = $_GET['lostToId'];
    checkId($lostTo->lost_to_aid);
    $query = checkReadById($lostTo);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($lostTo);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
