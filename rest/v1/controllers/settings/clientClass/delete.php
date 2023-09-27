<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientClass = new ClientClass($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("clientclassid", $_GET)) {
  // get data
  $clientClass->client_class_aid  = $_GET['clientclassid'];
  checkId($clientClass->client_class_aid);
  

  $query = checkDelete($clientClass);

  returnSuccess($clientClass, "Client Class", $query);
}

// return 404 error if endpoint not available
checkEndpoint();