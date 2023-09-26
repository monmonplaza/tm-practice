<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$tag = new Tag($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("tagid", $_GET)) {
    $tag->tag_aid = $_GET['tagid'];
    checkId($tag->tag_aid);
    $query = checkReadById($tag);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($tag);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
