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
    // get data
    $userProfile->user_profile_aid = $_GET['userProfileId'];
    checkId($userProfile->user_profile_aid);

    $query = checkDelete($userProfile);
    returnSuccess($userProfile, "User Profile", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
