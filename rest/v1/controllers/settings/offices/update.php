<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$offices = new Offices($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("officeid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $offices->office_aid  = $_GET['officeid'];
  $offices->office_name = checkIndex($data, "office_name");
  $offices->office_description = checkIndex($data, "office_description");
  $offices->office_contact_name = checkIndex($data, "office_contact_name");
  $offices->office_contact_company = checkIndex($data, "office_contact_company");
  $offices->office_contact_home_number = checkIndex($data, "office_contact_home_number");
  $offices->office_contact_mobile_number = checkIndex($data, "office_contact_mobile_number");
  $offices->office_contact_email = checkIndex($data, "office_contact_email");
  $offices->office_address_city = checkIndex($data, "office_address_city");
  $offices->office_address_county = checkIndex($data, "office_address_county");
  $offices->office_address_state = checkIndex($data, "office_address_state");
  $offices->office_address_country = checkIndex($data, "office_address_country");
  $offices->office_address_zip = checkIndex($data, "office_address_zip");
  $offices->office_datetime = date("Y-m-d H:i:s");
  checkId($offices->office_aid);
  // update
  $query = checkUpdate($offices);
  returnSuccess($offices, "Offices", $query);
}

// return 404 error if endpoint not available
checkEndpoint();