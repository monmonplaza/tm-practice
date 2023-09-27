<?php

class Department
{
    public $department_aid;
    public $department_is_active;
    public $department_name;
    public $department_created;
    public $department_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDepartment = "tmv1_settings_department";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblDepartment} ";
          $sql .= "order by department_is_active desc, ";
          $sql .= "department_name asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function create()
  {
    try {
      $sql = "insert into {$this->tblDepartment} ";
      $sql .= "( department_name, ";
      $sql .= "department_is_active, ";
      $sql .= "department_created, ";
      $sql .= "department_datetime ) values ( ";
      $sql .= ":department_name, ";
      $sql .= ":department_is_active, ";
      $sql .= ":department_created, ";
      $sql .= ":department_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "department_name" => $this->department_name,
        "department_is_active" => $this->department_is_active,
        "department_created" => $this->department_created,
        "department_datetime" => $this->department_datetime,
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
      $sql = "update {$this->tblDepartment} set ";
      $sql .= "department_name = :department_name, ";
      $sql .= "department_datetime = :department_datetime ";
      $sql .= "where department_aid = :department_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "department_name" => $this->department_name,
        "department_datetime" => $this->department_datetime,
        "department_aid" => $this->department_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblDepartment} ";
      $sql .= "where department_aid = :department_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "department_aid" => $this->department_aid,
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
    $sql = "update {$this->tblDepartment} set ";
    $sql .= "department_is_active = :department_is_active, ";
    $sql .= "department_datetime = :department_datetime ";
    $sql .= "where department_aid = :department_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "department_is_active" => $this->department_is_active,
    "department_datetime" => $this->department_datetime,
    "department_aid" => $this->department_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}