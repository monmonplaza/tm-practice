<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/user-profile/UserProfile.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$userProfile = new UserProfile($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("userProfileId", $_GET)) {
    // check data
    checkPayload($data);
    $userProfile->user_profile_aid = $_GET['userProfileId'];
    $userProfile->user_profile_is_active = trim($data["isActive"]);
    $userProfile->user_profile_update_at = date("Y-m-d H:i:s");
    checkId($userProfile->user_profile_aid);
    $query = checkActive($userProfile);
    http_response_code(200);
    returnSuccess($userProfile, "User Profile", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
