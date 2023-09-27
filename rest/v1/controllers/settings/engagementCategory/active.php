<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/settings/engagementcategory/engagementcategory.php';


// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engageCateg = new EngagementCategory($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();
  if (array_key_exists("engagecategid", $_GET)) {
    // check data
    checkPayload($data);
    $engageCateg->engagement_category_aid = $_GET['engagecategid'];
    $engageCateg->engagement_category_is_active = trim($data["isActive"]);
    checkId($engageCateg->engagement_category_aid);
    $query = checkActive($engageCateg);
    http_response_code(200);
    returnSuccess($engageCateg, "EngagementCategory", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
