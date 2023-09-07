<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$client = new Client($conn);
// get should not be present
if (array_key_exists("clientId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$client->client_id = checkIndex($data, "client_id");
$client->client_first_name = checkIndex($data, "client_first_name");
$client->client_last_name = checkIndex($data, "client_last_name");
$client->client_description = checkIndex($data, "client_description");
$client->client_is_active = 1;
$client->client_created_at = date("Y-m-d H:i:s");
$client->client_update_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($referralSource, $referralSource->client_description);
// create
$query = checkCreate($client);
returnSuccess($client, "Client", $query);
