<?php
class ClientProfile
{
    public $client_aid;
    public $client_is_active;
    public $client_name;
    public $client_email;
    public $client_service;
    public $client_contact_person;
    public $client_created_at;
    public $client_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblClientProfile;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClientProfile = "trainingtm_client_profile";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblClientProfile} ";
            $sql .= "( client_name, "; 
            $sql .= "client_email, ";
            $sql .= "client_service, ";
            $sql .= "client_contact_person, ";
            $sql .= "client_is_active, ";
            $sql .= "client_created_at, ";
            $sql .= "client_updated_at ) values ( ";
            $sql .= ":client_name, "; 
            $sql .= ":client_email, "; 
            $sql .= ":client_service, "; 
            $sql .= ":client_contact_person, "; 
            $sql .= ":client_is_active, ";
            $sql .= ":client_created_at, ";
            $sql .= ":client_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_name" => $this->client_name,
                "client_email" => $this->client_email,
                "client_service" => $this->client_service,
                "client_contact_person" => $this->client_contact_person,
                "client_is_active" => $this->client_is_active,
                "client_created_at" => $this->client_created_at,
                "client_updated_at" => $this->client_updated_at,
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
            $sql .= " {$this->tblClientProfile} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_name asc ";
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
            $sql = "select * from {$this->tblClientProfile} ";
            $sql .= "where client_aid = :client_aid ";
            $sql .= "order by client_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_aid" => $this->client_aid,
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
            $sql = "update {$this->tblClientProfile} set ";
            $sql .= "client_name = :client_name, ";
            $sql .= "client_updated_at = :client_updated_at ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_name" => $this->client_name,
                "client_updated_at" => $this->client_updated_at,
                "client_aid" => $this->client_aid,
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
            $sql = "update {$this->tblClientProfile} set ";
            $sql .= "client_is_active = :client_is_active, ";
            $sql .= "client_updated_at = :client_updated_at ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_is_active" => $this->client_is_active,
                "client_updated_at" => $this->client_updated_at,
                "client_aid" => $this->client_aid,
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
            $sql = "delete from {$this->tblClientProfile} ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_aid" => $this->client_aid,
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
            $sql = "select client_name from {$this->tblClientProfile} ";
            $sql .= "where client_name = :client_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_name" => "{$this->client_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
