<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientProfile = new ClientProfile($conn);
// get should not be present
if (array_key_exists("ClientProfileId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$clientProfile->client_name = checkIndex($data, "client_name");
$clientProfile->client_email = checkIndex($data, "client_email");
$clientProfile->client_service = checkIndex($data, "client_service");
$clientProfile->client_contact_person = checkIndex($data, "client_contact_person");
$clientProfile->client_is_active = 1;
$clientProfile->client_created_at = date("Y-m-d H:i:s");
$clientProfile->client_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($referralSource, $referralSource->client_description);
// create
$query = checkCreate($clientProfile);
returnSuccess($clientProfile, "ClientProfile", $query);
