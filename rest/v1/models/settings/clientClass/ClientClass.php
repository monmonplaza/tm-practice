<?php

class ClientClass
{
    public $client_class_aid;
    public $client_class_is_active;
    public $client_class_name;
    public $client_class_created;
    public $client_class_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblClientClass;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClientClass = "tmv1_settings_client_class";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblClientClass} ";
          $sql .= "order by client_class_is_active desc, ";
          $sql .= "client_class_name asc";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function create()
  {
    try {
      $sql = "insert into {$this->tblClientClass} ";
      $sql .= "( client_class_name, ";
      $sql .= "client_class_is_active, ";
      $sql .= "client_class_created, ";
      $sql .= "client_class_datetime ) values ( ";
      $sql .= ":client_class_name, ";
      $sql .= ":client_class_is_active, ";
      $sql .= ":client_class_created, ";
      $sql .= ":client_class_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "client_class_name" => $this->client_class_name,
        "client_class_is_active" => $this->client_class_is_active,
        "client_class_created" => $this->client_class_created,
        "client_class_datetime" => $this->client_class_datetime,
      ]);
      $this->lastInsertedId = $this->connection->lastInsertId();
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function update()
  {
    try {
      $sql = "update {$this->tblClientClass} set ";
      $sql .= "client_class_name = :client_class_name, ";
      $sql .= "client_class_datetime = :client_class_datetime ";
      $sql .= "where client_class_aid = :client_class_aid  ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "client_class_name" => $this->client_class_name,
        "client_class_datetime" => $this->client_class_datetime,
        "client_class_aid" => $this->client_class_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblClientClass} ";
      $sql .= "where client_class_aid = :client_class_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "client_class_aid" => $this->client_class_aid,
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
    $sql = "update {$this->tblClientClass} set ";
    $sql .= "client_class_is_active = :client_class_is_active, ";
    $sql .= "client_class_datetime = :client_class_datetime ";
    $sql .= "where client_class_aid = :client_class_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "client_class_is_active" => $this->client_class_is_active,
    "client_class_datetime" => $this->client_class_datetime,
    "client_class_aid" => $this->client_class_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}