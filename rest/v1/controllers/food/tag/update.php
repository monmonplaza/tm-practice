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
    // check data
    checkPayload($data);
    // get data
    $tag->tag_aid = $_GET['tagid'];
    $tag->tag_name = checkIndex($data, "tag_name");
    $tag->tag_datetime = date("Y-m-d H:i:s");
    checkId($tag->tag_aid);
    // update
    $query = checkUpdate($tag);
    returnSuccess($tag, "tag", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
