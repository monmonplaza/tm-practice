<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/settings/referaltype/referaltype.php';


// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referalType = new ReferalType($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();
  if (array_key_exists("reftypeid", $_GET)) {
    // check data
    checkPayload($data);
    $referalType->referral_type_aid = $_GET['reftypeid'];
    $referalType->referral_type_is_active = trim($data["isActive"]);
    checkId($referalType->referral_type_aid);
    $query = checkActive($referalType);
    http_response_code(200);
    returnSuccess($referalType, "Referral Type", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
