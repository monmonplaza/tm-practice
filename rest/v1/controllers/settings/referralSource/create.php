<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$refSource = new ReferralSource($conn);
// get should not be present
if (array_key_exists("ratesid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$refSource->referral_source_name = checkIndex($data, "referral_source_name");
$refSource->referral_source_is_active = 1;
$refSource->referral_source_create = date("Y-m-d H:i:s");
$refSource->referral_source_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["emp_name"]));
// check name
// isNameExist($emp, $emp->emp_name);
// create
$query = checkCreate($refSource);
// add column
// checkAddColumn($emp, $column_name);
// update column value after adding
// checkUpdateColumnValue($emp, $column_name);
returnSuccess($refSource, "emp", $query);
