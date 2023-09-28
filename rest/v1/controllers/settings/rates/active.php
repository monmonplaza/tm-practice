<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/settings/rates/rates.php';


// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$rates = new Rates($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();
  if (array_key_exists("ratesid", $_GET)) {
    // check data
    checkPayload($data);
    $rates->settings_rates_aid = $_GET['ratesid'];
    $rates->settings_rates_is_active = trim($data["isActive"]);
    checkId($rates->settings_rates_aid);
    $query = checkActive($rates);
    http_response_code(200);
    returnSuccess($rates, "Rates", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
