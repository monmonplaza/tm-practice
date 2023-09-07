<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$client = new Client($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("clientId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $client->client_aid = $_GET['clientId'];
    $client->client_first_name = checkIndex($data, "client_first_name");
    $client->client_last_name = checkIndex($data, "client_last_name");
    $client->client_description = checkIndex($data, "client_description");
    $client->client_update_at = date("Y-m-d H:i:s");
    checkId($client->client_aid);
    // update
    $query = checkUpdate($client);
    returnSuccess($client, "Client", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
