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
  $activities->settings_activities_aid = $_GET['actid'];
  checkId($activities->settings_activities_aid);
  $query = checkReadById($activities);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($activities);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();