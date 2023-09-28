<?php

class ReferalType
{
    public $referral_type_aid ;
    public $referral_type_name;
    public $referral_type_is_active;
    public $referral_type_created;
    public $referral_type_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblEmployees;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReferalType = "tmv1_settings_referral_type";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblReferalType} ";
          $sql .= "order by referral_type_is_active desc, ";
          $sql .= "referral_type_name asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function create()
  {
    try {
      $sql = "insert into {$this->tblReferalType} ";
      $sql .= "( referral_type_name, ";
      $sql .= "referral_type_is_active, ";
      $sql .= "referral_type_created, ";
      $sql .= "referral_type_datetime ) values ( ";
      $sql .= ":referral_type_name, ";
      $sql .= ":referral_type_is_active, ";
      $sql .= ":referral_type_created, ";
      $sql .= ":referral_type_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "referral_type_name" => $this->referral_type_name,
        "referral_type_is_active" => $this->referral_type_is_active,
        "referral_type_created" => $this->referral_type_created,
        "referral_type_datetime" => $this->referral_type_datetime,
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
      $sql = "update {$this->tblReferalType} set ";
      $sql .= "referral_type_name = :referral_type_name, ";
      $sql .= "referral_type_datetime = :referral_type_datetime ";
      $sql .= "where referral_type_aid = :referral_type_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "referral_type_name" => $this->referral_type_name,
        "referral_type_datetime" => $this->referral_type_datetime,
        "referral_type_aid" => $this->referral_type_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblReferalType} ";
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

  // active
  public function active()
    {
    try {
    $sql = "update {$this->tblReferalType} set ";
    $sql .= "referral_type_is_active = :referral_type_is_active, ";
    $sql .= "referral_type_datetime = :referral_type_datetime ";
    $sql .= "where referral_type_aid = :referral_type_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "referral_type_is_active" => $this->referral_type_is_active,
    "referral_type_datetime" => $this->referral_type_datetime,
    "referral_type_aid" => $this->referral_type_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}