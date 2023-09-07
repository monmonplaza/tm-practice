<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$userProfile = new UserProfile($conn);
// get should not be present
if (array_key_exists("userProfileId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$userProfile->user_profile_first_name = checkIndex($data, "user_profile_first_name");
$userProfile->user_profile_last_name = checkIndex($data, "user_profile_last_name");
$userProfile->user_profile_department = checkIndex($data, "user_profile_department");
$userProfile->user_profile_supervisor = checkIndex($data, "user_profile_supervisor");
$userProfile->user_profile_is_active = 1;
$userProfile->user_profile_created_at = date("Y-m-d H:i:s");
$userProfile->user_profile_update_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($referralType, $referralType->department_name);
// create
$query = checkCreate($userProfile);
returnSuccess($userProfile, "User Profile", $query);
