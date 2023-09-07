<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$userProfile = new UserProfile($conn);
// get $_GET data 

if (array_key_exists("userProfileId", $_GET)) {
    $userProfile->user_profile_aid = $_GET['userProfileId'];
    checkId($userProfile->user_profile_aid);
    $query = checkReadById($userProfile);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($userProfile);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
