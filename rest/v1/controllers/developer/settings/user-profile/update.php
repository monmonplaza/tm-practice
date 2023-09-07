<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$userProfile = new UserProfile($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("userProfileId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $userProfile->user_profile_aid = $_GET['userProfileId'];
    $userProfile->user_profile_first_name = checkIndex($data, "user_profile_first_name");
    $userProfile->user_profile_last_name = checkIndex($data, "user_profile_last_name");
    $userProfile->user_profile_department = checkIndex($data, "user_profile_department");
    $userProfile->user_profile_supervisor = checkIndex($data, "user_profile_supervisor");
    $userProfile->user_profile_update_at = date("Y-m-d H:i:s");
    checkId($userProfile->user_profile_aid);
    // update
    $query = checkUpdate($userProfile);
    returnSuccess($userProfile, "Referral Type", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
