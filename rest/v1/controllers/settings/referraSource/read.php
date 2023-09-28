<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$rates = new Rates($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("rateid", $_GET)) {
  $rates->settings_rates_aid = $_GET['rateid'];
  checkId($rates->settings_rates_aid);
  $query = checkReadById($rates);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($rates);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();