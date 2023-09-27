<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$department = new Department($conn);
// get should not be present
if (array_key_exists("departmentid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$department->department_name = checkIndex($data, "department_name");
$department->department_is_active = 1;
$department->department_created = date("Y-m-d H:i:s");
$department->department_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["emp_name"]));
// check name
// isNameExist($emp, $emp->emp_name);
// create
$query = checkCreate($department);
// add column
// checkAddColumn($emp, $column_name);
// update column value after adding
// checkUpdateColumnValue($emp, $column_name);
returnSuccess($department, "emp", $query);
