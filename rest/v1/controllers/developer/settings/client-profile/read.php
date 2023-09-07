<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientProfile = new ClientProfile($conn);
// get $_GET data 

if (array_key_exists("clientProfileId", $_GET) ) {
    $clientProfile->client_aid = $_GET['clientProfileId'];
    checkId($clientProfile->client_aid);
    $query = checkReadById($clientProfile);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($clientProfile);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
