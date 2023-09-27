<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engageCateg = new EngagementCategory($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("engagecategid", $_GET)) {
  $engageCateg->engagement_category_aid = $_GET['engagecategid'];
  checkId($engageCateg->engagement_category_aid);
  $query = checkReadById($engageCateg);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($engageCateg);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();