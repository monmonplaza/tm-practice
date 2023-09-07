<?php
class LostReason
{
    public $lost_reason_aid ;
    public $lost_reason_is_active;
    public $lost_reason_first_name;
    public $lost_reason_last_name;
    public $lost_reason_description;
    public $lost_reason_created_at;
    public $lost_reason_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblLostReason;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLostReason = "trainingtm_lost_reason";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblLostReason} ";
            $sql .= "( lost_reason_first_name, "; 
            $sql .= "lost_reason_last_name, ";
            $sql .= "lost_reason_description, ";
            $sql .= "lost_reason_is_active, ";
            $sql .= "lost_reason_created_at, ";
            $sql .= "lost_reason_updated_at ) values ( ";
            $sql .= ":lost_reason_first_name, "; 
            $sql .= ":lost_reason_last_name, "; 
            $sql .= ":lost_reason_description, "; 
            $sql .= ":lost_reason_is_active, ";
            $sql .= ":lost_reason_created_at, ";
            $sql .= ":lost_reason_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_reason_first_name" => $this->lost_reason_first_name,
                "lost_reason_last_name" => $this->lost_reason_last_name,
                "lost_reason_description" => $this->lost_reason_description,
                "lost_reason_is_active" => $this->lost_reason_is_active,
                "lost_reason_created_at" => $this->lost_reason_created_at,
                "lost_reason_updated_at" => $this->lost_reason_updated_at,
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
            $sql .= " {$this->tblLostReason} ";
            $sql .= "order by lost_reason_is_active desc, ";
            $sql .= "lost_reason_first_name asc ";
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
            $sql = "select * from {$this->tblLostReason} ";
            $sql .= "where lost_reason_aid = :lost_reason_aid ";
            $sql .= "order by lost_reason_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_reason_aid" => $this->lost_reason_aid,
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
            $sql = "update {$this->tblLostReason} set ";
            $sql .= "lost_reason_first_name = :lost_reason_first_name, ";
            $sql .= "lost_reason_last_name = :lost_reason_last_name, ";
            $sql .= "lost_reason_description = :lost_reason_description, ";
            $sql .= "lost_reason_updated_at = :lost_reason_updated_at ";
            $sql .= "where lost_reason_aid = :lost_reason_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_reason_first_name" => $this->lost_reason_first_name,
                "lost_reason_last_name" => $this->lost_reason_last_name,
                "lost_reason_description" => $this->lost_reason_description,
                "lost_reason_updated_at" => $this->lost_reason_updated_at,
                "lost_reason_aid" => $this->lost_reason_aid,
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
            $sql = "update {$this->tblLostReason} set ";
            $sql .= "lost_reason_is_active = :lost_reason_is_active, ";
            $sql .= "lost_reason_updated_at = :lost_reason_updated_at ";
            $sql .= "where lost_reason_aid = :lost_reason_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_reason_is_active" => $this->lost_reason_is_active,
                "lost_reason_updated_at" => $this->lost_reason_updated_at,
                "lost_reason_aid" => $this->lost_reason_aid,
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
            $sql = "delete from {$this->tblLostReason} ";
            $sql .= "where lost_reason_aid = :lost_reason_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_reason_aid" => $this->lost_reason_aid,
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
            $sql = "select lost_reason_name from {$this->tblLostReason} ";
            $sql .= "where lost_reason_name = :lost_reason_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_reason_name" => "{$this->lost_reason_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
