<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/settings/activities/activities.php';


// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$act = new Activities($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();
  if (array_key_exists("actid", $_GET)) {
    // check data
    checkPayload($data);
    $act->settings_activities_aid = $_GET['actid'];
    $act->settings_activities_is_active = trim($data["isActive"]);
    checkId($act->settings_activities_aid);
    $query = checkActive($act);
    http_response_code(200);
    returnSuccess($act, "Activities", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
