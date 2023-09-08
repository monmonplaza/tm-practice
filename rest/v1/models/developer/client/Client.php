<?php
class Client
{
    public $client_aid;
    public $client_id;
    public $client_first_name;
    public $client_last_name;
    public $client_description;
    public $client_is_active;
    public $client_created_at;
    public $client_update_at;

    public $lastInsertedId;
    public $connection;
    public $tblClient;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClient = "trainingtm_client";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblClient} ";
            $sql .= "( client_id, ";
            $sql .= "client_first_name, ";
            $sql .= "client_last_name, ";
            $sql .= "client_description, ";
            $sql .= "client_is_active, ";
            $sql .= "client_update_at, ";
            $sql .= "client_created_at ) values ( ";
            $sql .= ":client_id, ";
            $sql .= ":client_first_name, ";
            $sql .= ":client_last_name, ";
            $sql .= ":client_description, ";
            $sql .= ":client_is_active, ";
            $sql .= ":client_update_at, ";
            $sql .= ":client_created_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_id" => $this->client_id,
                "client_first_name" => $this->client_first_name,
                "client_last_name" => $this->client_last_name,
                "client_description" => $this->client_description,
                "client_is_active" => $this->client_is_active,
                "client_update_at" => $this->client_update_at,
                "client_created_at" => $this->client_created_at,
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
            $sql .= " {$this->tblClient} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_first_name asc, ";
            $sql .= "client_last_name asc ";
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
            $sql = "select * from {$this->tblClient} ";
            $sql .= "where client_aid  = :client_aid  ";
            $sql .= "order by client_first_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_aid " => $this->client_aid,
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
            $sql = "update {$this->tblClient} set ";
            $sql .= "client_id = :client_id, ";
            $sql .= "client_first_name = :client_first_name, ";
            $sql .= "client_last_name = :client_last_name, ";
            $sql .= "client_description = :client_description, ";
            $sql .= "client_update_at = :client_update_at ";
            $sql .= "where client_aid  = :client_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_id" => $this->client_id,
                "client_first_name" => $this->client_first_name,
                "client_last_name" => $this->client_last_name,
                "client_description" => $this->client_description,
                "client_update_at" => $this->client_update_at,
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
            $sql = "update {$this->tblClient} set ";
            $sql .= "client_is_active = :client_is_active, ";
            $sql .= "client_update_at = :client_update_at ";
            $sql .= "where client_aid  = :client_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_is_active" => $this->client_is_active,
                "client_update_at" => $this->client_update_at,
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
            $sql = "delete from {$this->tblClient} ";
            $sql .= "where client_aid  = :client_aid  ";
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
            $sql = "select client_first_name from {$this->tblClient} ";
            $sql .= "where client_first_name = :client_first_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_first_name" => "{$this->client_first_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
