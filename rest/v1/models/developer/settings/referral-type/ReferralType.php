<?php
class ReferralType
{
    public $referral_type_aid;
    public $referral_type_name;
    public $referral_type_is_active;
    public $referral_type_created_at;
    public $referral_type_update_at;

    public $connection;
    public $lastInsertedId;
    public $tblReferralType;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReferralType = "trainingtm_referral_type";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblReferralType} ";
            $sql .= "( referral_type_name, ";
            $sql .= "referral_type_is_active, ";
            $sql .= "referral_type_created_at, ";
            $sql .= "referral_type_update_at ) values ( ";
            $sql .= ":referral_type_name, ";
            $sql .= ":referral_type_is_active, ";
            $sql .= ":referral_type_created_at, ";
            $sql .= ":referral_type_update_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_name" => $this->referral_type_name,
                "referral_type_is_active" => $this->referral_type_is_active,
                "referral_type_created_at" => $this->referral_type_created_at,
                "referral_type_update_at" => $this->referral_type_update_at,
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
            $sql .= " {$this->tblReferralType} ";
            $sql .= "order by referral_type_is_active desc, ";
            $sql .= "referral_type_name asc ";
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
            $sql = "select * from {$this->tblReferralType} ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $sql .= "order by referral_type_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_aid" => $this->referral_type_aid,
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
            $sql = "update {$this->tblReferralType} set ";
            $sql .= "referral_type_name = :referral_type_name, ";
            $sql .= "referral_type_update_at = :referral_type_update_at ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_name" => $this->referral_type_name,
                "referral_type_update_at" => $this->referral_type_update_at,
                "referral_type_aid" => $this->referral_type_aid,
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
            $sql = "update {$this->tblReferralType} set ";
            $sql .= "referral_type_is_active = :referral_type_is_active, ";
            $sql .= "referral_type_update_at = :referral_type_datetime ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_is_active" => $this->referral_type_is_active,
                "referral_type_datetime" => $this->referral_type_update_at,
                "referral_type_aid" => $this->referral_type_aid,
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
            $sql = "delete from {$this->tblReferralType} ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_aid" => $this->referral_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // validator 
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select employee_last_name, ";
    //         $sql .= "employee_first_name, ";
    //         $sql .= "employee_aid ";
    //         $sql .= "from {$this->tblEmployee} ";
    //         $sql .= "where employee_department_id = :department_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "department_aid" => $this->department_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    // name
    public function checkName()
    {
        try {
            $sql = "select department_name from {$this->tblReferralType} ";
            $sql .= "where department_name = :department_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "department_name" => "{$this->referral_type_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
