<?php
// check association
function isTagAssociated($object)
{
    $query = $object->checkTagAssociation();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module.");
}

