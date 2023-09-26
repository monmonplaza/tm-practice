<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$act = new Activities($conn);
// get should not be present
if (array_key_exists("actid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$act->settings_activities_name = checkIndex($data, "settings_activities_name");
$act->settings_activities_is_active = 1;
$act->settings_activities_id = checkIndex($data, "settings_activities_id");
$act->settings_activities_description = checkIndex($data, "settings_activities_description");
$act->settings_activities_invoice_description = checkIndex($data, "settings_activities_invoice_description");
$act->settings_activities_created = date("Y-m-d H:i:s");
$act->settings_activities_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["act_name"]));
// check name
// isNameExist($act, $act->act_name);
// create
$query = checkCreate($act);
// add column
// checkAddColumn($act, $column_name);
// update column value after adding
// checkUpdateColumnValue($act, $column_name);
returnSuccess($act, "act", $query);
