<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/food/tag/Tag.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$tag = new Tag($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("tagid", $_GET)) {
        // check data
        checkPayload($data);
        $tag->tag_aid = $_GET['tagid'];
        $tag->tag_is_active = trim($data["isActive"]);
        checkId($tag->tag_aid);
        $query = checkActive($tag);
        http_response_code(200);
        returnSuccess($tag, "tag", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
