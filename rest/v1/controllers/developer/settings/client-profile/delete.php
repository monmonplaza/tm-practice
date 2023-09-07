<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientProfile = new ClientProfile($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("clientProfileId", $_GET)) {
    // get data
    $clientProfile->client_aid = $_GET['clientProfileId'];
    checkId($clientProfile->client_aid);

    $query = checkDelete($clientProfile);
    returnSuccess($clientProfile, "ClientProfile", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
