<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// require 'functions.php';
// use needed classes
require '../../../models/settings/clientclass/clientclass.php';


// check database connection

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientClass = new ClientClass($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
  checkApiKey();
  if (array_key_exists("clientclassid", $_GET)) {
    // check data
    checkPayload($data);
    $clientClass->client_class_aid = $_GET['clientclassid'];
    $clientClass->client_class_is_active = trim($data["isActive"]);
    checkId($clientClass->client_class_aid);
    $query = checkActive($clientClass);
    http_response_code(200);
    returnSuccess($clientClass, "Client Class", $query);
  }
  // return 404 error if endpoint not available
  checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
