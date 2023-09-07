<?php
class UserProfile
{
    public $user_profile_aid;
    public $user_profile_first_name;
    public $user_profile_last_name;
    public $user_profile_department;
    public $user_profile_supervisor;
    public $user_profile_is_active;
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
            $sql .= "( user_profile_first_name, ";
            $sql .= "user_profile_last_name, ";
            $sql .= "user_profile_department, ";
            $sql .= "user_profile_supervisor, ";
            $sql .= "user_profile_is_active, ";
            $sql .= "user_profile_created_at, ";
            $sql .= "user_profile_update_at ) values ( ";
            $sql .= ":user_profile_first_name, ";
            $sql .= ":user_profile_last_name, ";
            $sql .= ":user_profile_department, ";
            $sql .= ":user_profile_supervisor, ";
            $sql .= ":user_profile_is_active, ";
            $sql .= ":user_profile_created_at, ";
            $sql .= ":user_profile_update_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_profile_first_name" => $this->user_profile_first_name,
                "user_profile_last_name" => $this->user_profile_last_name,
                "user_profile_department" => $this->user_profile_department,
                "user_profile_supervisor" => $this->user_profile_supervisor,
                "user_profile_is_active" => $this->user_profile_is_active,
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
            $sql .= "order by user_profile_is_active desc, ";
            $sql .= "user_profile_first_name asc, ";
            $sql .= "user_profile_last_name asc ";
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
            $sql .= "where user_profile_aid = :user_profile_aid ";
            $sql .= "order by user_profile_first_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_profile_aid" => $this->user_profile_aid,
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
            $sql .= "user_profile_first_name = :user_profile_first_name, ";
            $sql .= "user_profile_last_name = :user_profile_last_name, ";
            $sql .= "user_profile_department = :user_profile_department, ";
            $sql .= "user_profile_supervisor = :user_profile_supervisor, ";
            $sql .= "user_profile_update_at = :user_profile_update_at ";
            $sql .= "where user_profile_aid = :user_profile_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_profile_first_name" => $this->user_profile_first_name,
                "user_profile_last_name" => $this->user_profile_last_name,
                "user_profile_department" => $this->user_profile_department,
                "user_profile_supervisor" => $this->user_profile_supervisor,
                "user_profile_update_at" => $this->user_profile_update_at,
                "user_profile_aid" => $this->user_profile_aid,
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
            $sql .= "user_profile_is_active = :user_profile_is_active, ";
            $sql .= "user_profile_update_at = :user_profile_update_at ";
            $sql .= "where user_profile_aid = :user_profile_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_profile_is_active" => $this->user_profile_is_active,
                "user_profile_update_at" => $this->user_profile_update_at,
                "user_profile_aid" => $this->user_profile_aid,
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
            $sql .= "where user_profile_aid = :user_profile_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_profile_aid" => $this->user_profile_aid,
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
            $sql = "select user_profile_first_name from {$this->tblUserProfile} ";
            $sql .= "where user_profile_first_name = :user_profile_first_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_profile_first_name" => "{$this->user_profile_first_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
