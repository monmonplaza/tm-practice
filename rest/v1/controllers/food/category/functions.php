<?php
// check association
function isCategoryAssociated($object)
{
    $query = $object->checkCategoryAssociation();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module.");
}

