<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$rates = new Rates($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("ratesid", $_GET)) {
  // get data
  $rates->settings_rates_aid = $_GET['ratesid'];
  checkId($rates->settings_rates_aid);

  $query = checkDelete($rates);

  returnSuccess($rates, "Rates", $query);
}

// return 404 error if endpoint not available
checkEndpoint();