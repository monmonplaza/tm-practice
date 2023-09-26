<?php

class Employees
{
    public $emp_aid;
    public $emp_name;
    public $emp_is_active;
    public $emp_position;
    public $emp_created;
    public $emp_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblEmployees;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEmployees = "vr_employee";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblEmployees} ";
          $sql .= "order by emp_is_active desc, ";
          $sql .= "emp_name asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function create()
  {
    try {
      $sql = "insert into {$this->tblEmployees} ";
      $sql .= "( emp_name, ";
      $sql .= "emp_position, ";
      $sql .= "emp_is_active, ";
      $sql .= "emp_created, ";
      $sql .= "emp_datetime ) values ( ";
      $sql .= ":emp_name, ";
      $sql .= ":emp_position, ";
      $sql .= ":emp_is_active, ";
      $sql .= ":emp_created, ";
      $sql .= ":emp_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "emp_name" => $this->emp_name,
        "emp_position" => $this->emp_position,
        "emp_is_active" => $this->emp_is_active,
        "emp_created" => $this->emp_created,
        "emp_datetime" => $this->emp_datetime,
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
      $sql = "update {$this->tblEmployees} set ";
      $sql .= "emp_name = :emp_name, ";
      $sql .= "emp_position = :emp_position, ";
      $sql .= "emp_datetime = :emp_datetime ";
      $sql .= "where emp_aid = :emp_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "emp_name" => $this->emp_name,
        "emp_position" => $this->emp_position,
        "emp_datetime" => $this->emp_datetime,
        "emp_aid" => $this->emp_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblEmployees} ";
      $sql .= "where emp_aid = :emp_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "emp_aid" => $this->emp_aid,
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
    $sql = "update {$this->tblEmployees} set ";
    $sql .= "emp_is_active = :emp_is_active, ";
    $sql .= "emp_datetime = :emp_datetime ";
    $sql .= "where emp_aid = :emp_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "emp_is_active" => $this->emp_is_active,
    "emp_datetime" => $this->emp_datetime,
    "emp_aid" => $this->emp_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}