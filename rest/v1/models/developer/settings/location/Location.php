<?php
class Location
{
    public $location_aid;
    public $location_barrangay;
    public $location_city;
    public $location_province;
    public $location_zip_code;
    public $location_is_active;
    public $user_profile_update_at;
    public $user_profile_created_at;

    public $lastInsertedId;
    public $connection;
    public $tblUserProfile;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUserProfile = "trainingtm_user_profile";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblUserProfile} ";
            $sql .= "( location_barrangay, ";
            $sql .= "location_city, ";
            $sql .= "location_province, ";
            $sql .= "location_zip_code, ";
            $sql .= "location_is_active, ";
            $sql .= "user_profile_created_at, ";
            $sql .= "user_profile_update_at ) values ( ";
            $sql .= ":location_barrangay, ";
            $sql .= ":location_city, ";
            $sql .= ":location_province, ";
            $sql .= ":location_zip_code, ";
            $sql .= ":location_is_active, ";
            $sql .= ":user_profile_created_at, ";
            $sql .= ":user_profile_update_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "location_barrangay" => $this->location_barrangay,
                "location_city" => $this->location_city,
                "location_province" => $this->location_province,
                "location_zip_code" => $this->location_zip_code,
                "location_is_active" => $this->location_is_active,
                "user_profile_created_at" => $this->user_profile_created_at,
                "user_profile_update_at" => $this->user_profile_update_at,
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
            $sql .= " {$this->tblUserProfile} ";
            $sql .= "order by location_is_active desc, ";
            $sql .= "location_barrangay asc, ";
            $sql .= "location_city asc ";
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
            $sql = "select * from {$this->tblUserProfile} ";
            $sql .= "where location_aid = :location_aid ";
            $sql .= "order by location_barrangay asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "location_aid" => $this->location_aid,
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
            $sql = "update {$this->tblUserProfile} set ";
            $sql .= "location_barrangay = :location_barrangay, ";
            $sql .= "location_city = :location_city, ";
            $sql .= "location_province = :location_province, ";
            $sql .= "location_zip_code = :location_zip_code, ";
            $sql .= "user_profile_update_at = :user_profile_update_at ";
            $sql .= "where location_aid = :location_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "location_barrangay" => $this->location_barrangay,
                "location_city" => $this->location_city,
                "location_province" => $this->location_province,
                "location_zip_code" => $this->location_zip_code,
                "user_profile_update_at" => $this->user_profile_update_at,
                "location_aid" => $this->location_aid,
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
            $sql = "update {$this->tblUserProfile} set ";
            $sql .= "location_is_active = :location_is_active, ";
            $sql .= "user_profile_update_at = :user_profile_update_at ";
            $sql .= "where location_aid = :location_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "location_is_active" => $this->location_is_active,
                "user_profile_update_at" => $this->user_profile_update_at,
                "location_aid" => $this->location_aid,
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
            $sql = "delete from {$this->tblUserProfile} ";
            $sql .= "where location_aid = :location_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "location_aid" => $this->location_aid,
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
            $sql = "select location_barrangay from {$this->tblUserProfile} ";
            $sql .= "where location_barrangay = :location_barrangay ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "location_barrangay" => "{$this->location_barrangay}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
