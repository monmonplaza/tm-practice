<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wonReason = new WonReason($conn);
// get should not be present
if (array_key_exists("wonReasonId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$wonReason->won_reason_first_name = checkIndex($data, "won_reason_first_name");
$wonReason->won_reason_last_name = checkIndex($data, "won_reason_last_name");
$wonReason->won_reason_description = checkIndex($data, "won_reason_description");
$wonReason->won_reason_id = checkIndex($data, "won_reason_id");
$wonReason->won_reason_type = checkIndex($data, "won_reason_type");
$wonReason->won_reason_is_active = 1;
$wonReason->won_reason_created_at = date("Y-m-d H:i:s");
$wonReason->won_reason_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($referralSource, $referralSource->won_reason_description);
// create
$query = checkCreate($wonReason);
returnSuccess($wonReason, "WonReason", $query);
