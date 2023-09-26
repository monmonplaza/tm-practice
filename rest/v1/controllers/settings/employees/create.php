<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$emp = new Employees($conn);
// get should not be present
if (array_key_exists("empid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$emp->emp_name = checkIndex($data, "emp_name");
$emp->emp_position = checkIndex($data, "emp_position");
$emp->emp_is_active = 1;
$emp->emp_created = date("Y-m-d H:i:s");
$emp->emp_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["emp_name"]));
// check name
// isNameExist($emp, $emp->emp_name);
// create
$query = checkCreate($emp);
// add column
// checkAddColumn($emp, $column_name);
// update column value after adding
// checkUpdateColumnValue($emp, $column_name);
returnSuccess($emp, "emp", $query);
