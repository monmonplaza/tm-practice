<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referalType = new ReferalType($conn);
// get should not be present
if (array_key_exists("reftypeid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$referalType->referral_type_name = checkIndex($data, "referral_type_name");
$referalType->referral_type_is_active = 1;
$referalType->referral_type_created = date("Y-m-d H:i:s");
$referalType->referral_type_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["emp_name"]));
// check name
// isNameExist($emp, $emp->emp_name);
// create
$query = checkCreate($referalType);
// add column
// checkAddColumn($emp, $column_name);
// update column value after adding
// checkUpdateColumnValue($emp, $column_name);
returnSuccess($referalType, "emp", $query);
