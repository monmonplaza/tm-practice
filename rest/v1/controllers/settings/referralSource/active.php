<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/settings/referralsource/referralsource.php';


// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$refSource = new ReferralSource($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();
  if (array_key_exists("referralsourceid", $_GET)) {
    // check data
    checkPayload($data);
    $refSource->referral_source_aid = $_GET['referralsourceid'];
    $refSource->referral_source_is_active = trim($data["isActive"]);
    checkId($refSource->referral_source_aid);
    $query = checkActive($refSource);
    http_response_code(200);
    returnSuccess($refSource, "Referral Source", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
