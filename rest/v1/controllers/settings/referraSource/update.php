<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$rates  = new Rates($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("ratesid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $rates->settings_rates_aid  = $_GET['ratesid'];
  $rates->settings_rates_description = checkIndex($data, "settings_rates_description");
  $rates->settings_rates_datetime = date("Y-m-d H:i:s");
  checkId($rates->settings_rates_aid);
  // update
  $query = checkUpdate($rates);
  returnSuccess($rates, "Rates", $query);
}

// return 404 error if endpoint not available
checkEndpoint();