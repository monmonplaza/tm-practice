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
    // get data
    $tag->tag_aid = $_GET['tagid'];
    checkId($tag->tag_aid);
    $query = checkDelete($tag);
    returnSuccess($tag, "tag", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
