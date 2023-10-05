<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$rates = new Rates($conn);
// get should not be present
if (array_key_exists("ratesid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$rates->settings_rates_description = checkIndex($data, "settings_rates_description");
$rates->settings_rates_is_active = 1;
$rates->settings_rates_created = date("Y-m-d H:i:s");
$rates->settings_rates_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["emp_name"]));
// check name
// isNameExist($emp, $emp->emp_name);
// create
$query = checkCreate($rates);
// add column
// checkAddColumn($emp, $column_name);
// update column value after adding
// checkUpdateColumnValue($emp, $column_name);
returnSuccess($rates, "emp", $query);
