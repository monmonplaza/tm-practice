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
    // check data
    checkPayload($data);
    // get data
    $clientProfile->client_aid = $_GET['clientProfileId'];
    $clientProfile->client_name = checkIndex($data, "client_name");
    $clientProfile->client_email = checkIndex($data, "client_email");
    $clientProfile->client_service = checkIndex($data, "client_service");
    $clientProfile->client_contact_person = checkIndex($data, "client_contact_person");
    $clientProfile->client_updated_at= date("Y-m-d H:i:s");
    checkId($clientProfile->client_aid);
    // update
    $query = checkUpdate($clientProfile);
    returnSuccess($clientProfile, "ClientProfile", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
