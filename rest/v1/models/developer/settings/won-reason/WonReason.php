<?php
class WonReason
{
    public $won_reason_aid ;
    public $won_reason_is_active;
    public $won_reason_first_name;
    public $won_reason_last_name;
    public $won_reason_description;
    public $won_reason_id;
    public $won_reason_type;
    public $won_reason_created_at;
    public $won_reason_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblWonReason;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWonReason = "trainingtm_won_reason";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblWonReason} ";
            $sql .= "( won_reason_first_name, "; 
            $sql .= "won_reason_last_name, ";
            $sql .= "won_reason_description, ";
            $sql .= "won_reason_id, ";
            $sql .= "won_reason_type, ";
            $sql .= "won_reason_is_active, ";
            $sql .= "won_reason_created_at, ";
            $sql .= "won_reason_updated_at ) values ( ";
            $sql .= ":won_reason_first_name, "; 
            $sql .= ":won_reason_last_name, "; 
            $sql .= ":won_reason_description, "; 
            $sql .= ":won_reason_id, "; 
            $sql .= ":won_reason_type, "; 
            $sql .= ":won_reason_is_active, ";
            $sql .= ":won_reason_created_at, ";
            $sql .= ":won_reason_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_first_name" => $this->won_reason_first_name,
                "won_reason_last_name" => $this->won_reason_last_name,
                "won_reason_description" => $this->won_reason_description,
                "won_reason_id" => $this->won_reason_id,
                "won_reason_type" => $this->won_reason_type,
                "won_reason_is_active" => $this->won_reason_is_active,
                "won_reason_created_at" => $this->won_reason_created_at,
                "won_reason_updated_at" => $this->won_reason_updated_at,
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
            $sql .= "from {$this->tblWonReason} ";
            $sql .= "order by won_reason_is_active desc, ";
            $sql .= "won_reason_first_name asc ";
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
            $sql = "select * from {$this->tblWonReason} ";
            $sql .= "where won_reason_aid = :won_reason_aid ";
            $sql .= "order by won_reason_first_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_aid" => $this->won_reason_aid,
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
            $sql = "update {$this->tblWonReason} set ";
            $sql .= "won_reason_first_name = :won_reason_first_name, ";
            $sql .= "won_reason_last_name = :won_reason_last_name, ";
            $sql .= "won_reason_description = :won_reason_description, ";
            $sql .= "won_reason_id = :won_reason_id, ";
            $sql .= "won_reason_type = :won_reason_type, ";
            $sql .= "won_reason_updated_at = :won_reason_updated_at ";
            $sql .= "where won_reason_aid = :won_reason_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_first_name" => $this->won_reason_first_name,
                "won_reason_last_name" => $this->won_reason_last_name,
                "won_reason_description" => $this->won_reason_description,
                "won_reason_id" => $this->won_reason_id,
                "won_reason_type" => $this->won_reason_type,
                "won_reason_updated_at" => $this->won_reason_updated_at,
                "won_reason_aid" => $this->won_reason_aid,
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
            $sql = "update {$this->tblWonReason} set ";
            $sql .= "won_reason_is_active = :won_reason_is_active, ";
            $sql .= "won_reason_updated_at = :won_reason_updated_at ";
            $sql .= "where won_reason_aid = :won_reason_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_is_active" => $this->won_reason_is_active,
                "won_reason_updated_at" => $this->won_reason_updated_at,
                "won_reason_aid" => $this->won_reason_aid,
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
            $sql = "delete from {$this->tblWonReason} ";
            $sql .= "where won_reason_aid = :won_reason_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_aid" => $this->won_reason_aid,
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
            $sql = "select won_reason_first_name from {$this->tblWonReason} ";
            $sql .= "where won_reason_first_name = :won_reason_first_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_first_name" => "{$this->won_reason_first_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
