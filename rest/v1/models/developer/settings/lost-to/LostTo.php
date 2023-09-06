<?php
class LostTo
{
    public $lost_to_aid;
    public $lost_to_description;
    public $lost_to_first_name;
    public $lost_to_last_name;
    public $lost_to_name;
    public $lost_to_is_active;
    public $lost_to_created_at;
    public $lost_to_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblLostTo;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLostTo = "trainingtm_lost_to";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblLostTo} ";
            $sql .= "( lost_to_description, "; 
            $sql .= "lost_to_first_name, ";
            $sql .= "lost_to_last_name, ";
            $sql .= "lost_to_name, ";
            $sql .= "lost_to_is_active, ";
            $sql .= "lost_to_created_at, ";
            $sql .= "lost_to_updated_at ) values ( ";
            $sql .= ":lost_to_description, ";
            $sql .= ":lost_to_first_name, ";
            $sql .= ":lost_to_last_name, "; 
            $sql .= ":lost_to_name, "; 
            $sql .= ":lost_to_is_active, ";
            $sql .= ":lost_to_created_at, ";
            $sql .= ":lost_to_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_description" => $this->lost_to_description,
                "lost_to_first_name" => $this->lost_to_first_name,
                "lost_to_last_name" => $this->lost_to_last_name,
                "lost_to_name" => $this->lost_to_name,
                "lost_to_is_active" => $this->lost_to_is_active,
                "lost_to_created_at" => $this->lost_to_created_at,
                "lost_to_updated_at" => $this->lost_to_updated_at,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblLostTo} ";
            $sql .= "order by lost_to_is_active desc, ";
            $sql .= "lost_to_description asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
 

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblLostTo} ";
            $sql .= "where lost_to_aid = :lost_to_aid ";
            $sql .= "order by lost_to_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_aid" => $this->lost_to_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblLostTo} set ";
            $sql .= "lost_to_description = :lost_to_description, ";
            $sql .= "lost_to_first_name = :lost_to_first_name, ";
            $sql .= "lost_to_last_name = :lost_to_last_name, ";
            $sql .= "lost_to_name = :lost_to_name, ";
            $sql .= "lost_to_updated_at = :lost_to_updated_at ";
            $sql .= "where lost_to_aid = :lost_to_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_description" => $this->lost_to_description,
                "lost_to_first_name" => $this->lost_to_first_name,
                "lost_to_last_name" => $this->lost_to_last_name,
                "lost_to_name" => $this->lost_to_name,
                "lost_to_updated_at" => $this->lost_to_updated_at,
                "lost_to_aid" => $this->lost_to_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblLostTo} set ";
            $sql .= "lost_to_is_active = :lost_to_is_active, ";
            $sql .= "lost_to_updated_at = :lost_to_updated_at ";
            $sql .= "where lost_to_aid = :lost_to_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_is_active" => $this->lost_to_is_active,
                "lost_to_updated_at" => $this->lost_to_updated_at,
                "lost_to_aid" => $this->lost_to_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblLostTo} ";
            $sql .= "where lost_to_aid = :lost_to_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_aid" => $this->lost_to_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
 
    // name
    public function checkName()
    {
        try {
            $sql = "select lost_to_description from {$this->tblLostTo} ";
            $sql .= "where lost_to_description = :lost_to_description ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_description" => "{$this->lost_to_description}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
