<?php

function checkReadAllDepartment($object)
{
    $query = $object->readAllDepartment();
    checkQuery($query, "Empty records. (read all Department)");
    return $query;
}
