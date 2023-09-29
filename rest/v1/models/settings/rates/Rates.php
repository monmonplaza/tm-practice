<?php

class Rates
{
    public $settings_rates_aid;
    public $settings_rates_description;
    public $settings_rates_is_active;
    public $settings_rates_created;
    public $settings_rates_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblRates;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRates = "tmv1_settings_rates";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblRates} ";
          $sql .= "order by settings_rates_is_active desc, ";
          $sql .= "settings_rates_description asc ";
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