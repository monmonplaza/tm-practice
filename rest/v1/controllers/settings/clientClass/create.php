<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientClass = new ClientClass($conn);
// get should not be present
if (array_key_exists("empid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$clientClass->client_class_name = checkIndex($data, "client_class_name");
$clientClass->client_class_is_active = 1;
$clientClass->client_class_created = date("Y-m-d H:i:s");
$clientClass->client_class_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["emp_name"]));
// check name
// isNameExist($emp, $emp->emp_name);
// create
$query = checkCreate($clientClass);
// add column
// checkAddColumn($emp, $column_name);
// update column value after adding
// checkUpdateColumnValue($emp, $column_name);
returnSuccess($clientClass, "ClientClass", $query);
