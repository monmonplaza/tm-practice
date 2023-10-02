<?php

class ReferralSource
{
    public $referral_source_aid;
    public $referral_source_name;
    public $referral_source_is_active;
    public $referral_source_create;
    public $referral_source_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblReferralSrc;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReferralSrc = "tmv1_settings_referral_source";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblReferralSrc} ";
          $sql .= "order by referral_source_is_active desc, ";
          $sql .= "referral_source_name asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function create()
  {
    try {
      $sql = "insert into {$this->tblReferralSrc} ";
      $sql .= "( referral_source_name, ";
      $sql .= "referral_source_is_active, ";
      $sql .= "referral_source_create, ";
      $sql .= "referral_source_datetime ) values ( ";
      $sql .= ":referral_source_name, ";
      $sql .= ":referral_source_is_active, ";
      $sql .= ":referral_source_create, ";
      $sql .= ":referral_source_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "referral_source_name" => $this->referral_source_name,
        "referral_source_is_active" => $this->referral_source_is_active,
        "referral_source_create" => $this->referral_source_create,
        "referral_source_datetime" => $this->referral_source_datetime,
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
      $sql = "update {$this->tblReferralSrc} set ";
      $sql .= "referral_source_name = :referral_source_name, ";
      $sql .= "referral_source_datetime = :referral_source_datetime ";
      $sql .= "where referral_source_aid = :referral_source_aid  ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "referral_source_name" => $this->referral_source_name,
        "referral_source_datetime" => $this->referral_source_datetime,
        "referral_source_aid" => $this->referral_source_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblReferralSrc} ";
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

  // active
  public function active()
    {
    try {
    $sql = "update {$this->tblReferralSrc} set ";
    $sql .= "referral_source_is_active = :referral_source_is_active, ";
    $sql .= "referral_source_datetime = :referral_source_datetime ";
    $sql .= "where referral_source_aid  = :referral_source_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "referral_source_is_active" => $this->referral_source_is_active,
    "referral_source_datetime" => $this->referral_source_datetime,
    "referral_source_aid" => $this->referral_source_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}