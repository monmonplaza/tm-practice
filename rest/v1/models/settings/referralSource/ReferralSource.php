<?php

class Rates
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
      $sql = "insert into {$this->tblRates} ";
      $sql .= "( settings_rates_description, ";
      $sql .= "settings_rates_is_active, ";
      $sql .= "settings_rates_created, ";
      $sql .= "settings_rates_datetime ) values ( ";
      $sql .= ":settings_rates_description, ";
      $sql .= ":settings_rates_is_active, ";
      $sql .= ":settings_rates_created, ";
      $sql .= ":settings_rates_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "settings_rates_description" => $this->settings_rates_description,
        "settings_rates_is_active" => $this->settings_rates_is_active,
        "settings_rates_created" => $this->settings_rates_created,
        "settings_rates_datetime" => $this->settings_rates_datetime,
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
      $sql = "update {$this->tblRates} set ";
      $sql .= "settings_rates_description = :settings_rates_description, ";
      $sql .= "settings_rates_datetime = :settings_rates_datetime ";
      $sql .= "where settings_rates_aid = :settings_rates_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "settings_rates_description" => $this->settings_rates_description,
        "settings_rates_datetime" => $this->settings_rates_datetime,
        "settings_rates_aid" => $this->settings_rates_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblRates} ";
      $sql .= "where settings_rates_aid = :settings_rates_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "settings_rates_aid" => $this->settings_rates_aid,
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
    $sql = "update {$this->tblRates} set ";
    $sql .= "settings_rates_is_active = :settings_rates_is_active, ";
    $sql .= "settings_rates_datetime = :settings_rates_datetime ";
    $sql .= "where settings_rates_aid = :settings_rates_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "settings_rates_is_active" => $this->settings_rates_is_active,
    "settings_rates_datetime" => $this->settings_rates_datetime,
    "settings_rates_aid" => $this->settings_rates_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}