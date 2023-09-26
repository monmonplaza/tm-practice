<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$activities = new Activities($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("actid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $activities->settings_activities_aid = $_GET['actid'];
  $activities->settings_activities_name = checkIndex($data, "settings_activities_name");
  $activities->settings_activities_id = checkIndex($data, "settings_activities_id");
  $activities->settings_activities_description = checkIndex($data, "settings_activities_description");
  $activities->settings_activities_invoice_description = checkIndex($data, "settings_activities_invoice_description");
  $activities->settings_activities_created = date("Y-m-d H:i:s");
  $activities->settings_activities_datetime = date("Y-m-d H:i:s");
  checkId($activities->settings_activities_aid);
  // update
  $query = checkUpdate($activities);
  returnSuccess($activities, "Activities", $query);
}

// return 404 error if endpoint not available
checkEndpoint();