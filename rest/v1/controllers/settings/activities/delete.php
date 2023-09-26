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
  // get data
  $activities->settings_activities_aid  = $_GET['actid'];
  checkId($activities->settings_activities_aid );
  

  $query = checkDelete($activities);

  returnSuccess($activities, "Activities", $query);
}

// return 404 error if endpoint not available
checkEndpoint();