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
  // check data
  checkPayload($data);
  // get data
  $engageCateg->engagement_category_aid = $_GET['engagecategid'];
  $engageCateg->engagement_category_name = checkIndex($data, "engagement_category_name");
  $engageCateg->engagement_category_description = checkIndex($data, "engagement_category_description");
  $engageCateg->engagement_category_invoice_description = checkIndex($data, "engagement_category_invoice_description");
  $engageCateg->engagement_category_datetime = date("Y-m-d H:i:s");
  checkId($engageCateg->engagement_category_aid);
  // update
  $query = checkUpdate($engageCateg);
  returnSuccess($engageCateg, "engageCateg", $query);
}

// return 404 error if endpoint not available
checkEndpoint();