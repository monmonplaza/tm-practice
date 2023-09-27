<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engageCateg = new EngagementCategory($conn);
// get should not be present
if (array_key_exists("engageCateg", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$engageCateg->engagement_category_name = checkIndex($data, "engagement_category_name");
$engageCateg->engagement_category_description = checkIndex($data, "engagement_category_description");
$engageCateg->engagement_category_invoice_description = checkIndex($data, "engagement_category_invoice_description");
$engageCateg->engagement_category_is_active = 1;
$engageCateg->engagement_category_create = date("Y-m-d H:i:s");
$engageCateg->engagement_category_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
// $column_name = strtolower(str_replace(" ", "_", $data["emp_name"]));
// check name
// isNameExist($emp, $emp->emp_name);
// create
$query = checkCreate($engageCateg);
// add column
// checkAddColumn($emp, $column_name);
// update column value after adding
// checkUpdateColumnValue($emp, $column_name);
returnSuccess($engageCateg, "engageCateg", $query);
