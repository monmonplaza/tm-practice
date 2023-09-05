<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require './functions.php';
// use needed classes
require '../../../../models/developer/settings/referral-type/referralType.php';

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralType = new ReferralType($conn);

$query = checkReadAllDepartment($referralType);
http_response_code(200);
getQueriedData($query);
