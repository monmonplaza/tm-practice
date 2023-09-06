<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralType = new ReferralType($conn);
// get should not be present
if (array_key_exists("referralTypeId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$referralType->referral_type_name = checkIndex($data, "referral_type_name");
$referralType->referral_type_description = checkIndex($data, "referral_type_description");
$referralType->referral_type_is_active = 1;
$referralType->referral_type_created_at = date("Y-m-d H:i:s");
$referralType->referral_type_update_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($referralType, $referralType->department_name);
// create
$query = checkCreate($referralType);
returnSuccess($referralType, "Referral Type", $query);
