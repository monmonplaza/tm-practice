<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$offices = new Offices($conn);
// get should not be present
if (array_key_exists("officeid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$offices->office_name = checkIndex($data, "office_name");
$offices->office_is_active = 1;
$offices->office_description = checkIndex($data, "office_description");
$offices->office_contact_name = checkIndex($data, "office_contact_name");
$offices->office_contact_company = checkIndex($data, "office_contact_company");
$offices->office_contact_home_number = checkIndex($data, "office_contact_home_number");
$offices->office_contact_mobile_number = checkIndex($data, "office_contact_mobile_number");
$offices->office_contact_email = checkIndex($data, "office_contact_email");
$offices->office_address_city = checkIndex($data, "office_address_city");
$offices->office_address_county = checkIndex($data, "office_address_county");
$offices->office_address_state = checkIndex($data, "office_address_state");
$offices->office_address_country = checkIndex($data, "office_address_country");
$offices->office_address_zip = checkIndex($data, "office_address_zip");
$offices->office_created = date("Y-m-d H:i:s");
$offices->office_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["emp_name"]));
// check name
// isNameExist($emp, $emp->emp_name);
// create
$query = checkCreate($offices);
// add column
// checkAddColumn($emp, $column_name);
// update column value after adding
// checkUpdateColumnValue($emp, $column_name);
returnSuccess($offices, "Offices", $query);
