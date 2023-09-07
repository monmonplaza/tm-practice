<?php
class ReferralSource
{
    public $referral_source_aid;
    public $referral_source_name;
    public $referral_source_is_active;
    public $referral_source_created_at;
    public $referral_source_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblReferralSource;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReferralSource = "trainingtm_referral_source";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblReferralSource} ";
            $sql .= "( referral_source_name, "; 
            $sql .= "referral_source_is_active, ";
            $sql .= "referral_source_created_at, ";
            $sql .= "referral_source_updated_at ) values ( ";
            $sql .= ":referral_source_name, "; 
            $sql .= ":referral_source_is_active, ";
            $sql .= ":referral_source_created_at, ";
            $sql .= ":referral_source_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_source_name" => $this->referral_source_name,
                "referral_source_is_active" => $this->referral_source_is_active,
                "referral_source_created_at" => $this->referral_source_created_at,
                "referral_source_updated_at" => $this->referral_source_updated_at,
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
            $sql .= " {$this->tblReferralSource} ";
            $sql .= "order by referral_source_is_active desc, ";
            $sql .= "referral_source_name asc ";
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
            $sql = "select * from {$this->tblReferralSource} ";
            $sql .= "where referral_source_aid = :referral_source_aid ";
            $sql .= "order by referral_source_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_source_aid" => $this->referral_source_aid,
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
            $sql = "update {$this->tblReferralSource} set ";
            $sql .= "referral_source_name = :referral_source_name, ";
            $sql .= "referral_source_updated_at = :referral_source_updated_at ";
            $sql .= "where referral_source_aid = :referral_source_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_source_name" => $this->referral_source_name,
                "referral_source_updated_at" => $this->referral_source_updated_at,
                "referral_source_aid" => $this->referral_source_aid,
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
            $sql = "update {$this->tblReferralSource} set ";
            $sql .= "referral_source_is_active = :referral_source_is_active, ";
            $sql .= "referral_source_updated_at = :referral_source_updated_at ";
            $sql .= "where referral_source_aid = :referral_source_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_source_is_active" => $this->referral_source_is_active,
                "referral_source_updated_at" => $this->referral_source_updated_at,
                "referral_source_aid" => $this->referral_source_aid,
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
            $sql = "delete from {$this->tblReferralSource} ";
            $sql .= "where referral_source_aid = :referral_source_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_source_aid" => $this->referral_source_aid,
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
            $sql = "select referral_source_name from {$this->tblReferralSource} ";
            $sql .= "where referral_source_name = :referral_source_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_source_name" => "{$this->referral_source_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
