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
  // get data
  $engageCateg->engagement_category_aid = $_GET['engagecategid'];
  checkId($engageCateg->engagement_category_aid);
  

  $query = checkDelete($engageCateg);

  returnSuccess($engageCateg, "engageCateg", $query);
}

// return 404 error if endpoint not available
checkEndpoint();