<?php

class Activities
{
    public $settings_activities_aid;
    public $settings_activities_name;
    public $settings_activities_is_active;
    public $settings_activities_id;
    public $settings_activities_description;
    public $settings_activities_invoice_description;
    public $settings_activities_created;
    public $settings_activities_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblActivities;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblActivities = "tmv1_settings_activities";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblActivities} ";
          $sql .= "order by settings_activities_is_active desc, ";
          $sql .= "settings_activities_aid asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function create()
  {
    try {
      $sql = "insert into {$this->tblActivities} ";
      $sql .= "(settings_activities_name, ";
      $sql .= "settings_activities_is_active, ";
      $sql .= "settings_activities_id, ";
      $sql .= "settings_activities_description, ";
      $sql .= "settings_activities_invoice_description, ";
      $sql .= "settings_activities_created, ";
      $sql .= "settings_activities_datetime ) values ( ";
      $sql .= ":settings_activities_name, ";
      $sql .= ":settings_activities_is_active, ";
      $sql .= ":settings_activities_id, ";
      $sql .= ":settings_activities_description, ";
      $sql .= ":settings_activities_invoice_description, ";
      $sql .= ":settings_activities_created, ";
      $sql .= ":settings_activities_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "settings_activities_name" => $this->settings_activities_name,
        "settings_activities_is_active" => $this->settings_activities_is_active,
        "settings_activities_id" => $this->settings_activities_id,
        "settings_activities_description" => $this->settings_activities_description,
        "settings_activities_invoice_description" => $this->settings_activities_invoice_description,
        "settings_activities_created" => $this->settings_activities_created,
        "settings_activities_datetime" => $this->settings_activities_datetime,
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
      $sql = "update {$this->tblActivities} set ";
      $sql .= "settings_activities_name = :settings_activities_name, ";
      $sql .= "settings_activities_id = :settings_activities_id, ";
      $sql .= "settings_activities_description = :settings_activities_description, ";
      $sql .= "settings_activities_invoice_description = :settings_activities_invoice_description, ";
      $sql .= "settings_activities_created = :settings_activities_created, ";
      $sql .= "settings_activities_datetime = :settings_activities_datetime ";
      $sql .= "where settings_activities_aid = :settings_activities_aid";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "settings_activities_name" => $this->settings_activities_name,
        "settings_activities_id" => $this->settings_activities_id,
        "settings_activities_description" => $this->settings_activities_description,
        "settings_activities_invoice_description" => $this->settings_activities_invoice_description,
        "settings_activities_created" => $this->settings_activities_created,
        "settings_activities_datetime" => $this->settings_activities_datetime,
        "settings_activities_aid" => $this->settings_activities_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblActivities} ";
      $sql .= "where settings_activities_aid  = :settings_activities_aid  ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "settings_activities_aid" => $this->settings_activities_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function active()
    {
    try {
    $sql = "update {$this->tblActivities} set ";
    $sql .= "settings_activities_is_active = :settings_activities_is_active, ";
    $sql .= "settings_activities_datetime = :settings_activities_datetime ";
    $sql .= "where settings_activities_aid = :settings_activities_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "settings_activities_is_active" => $this->settings_activities_is_active,
    "settings_activities_datetime" => $this->settings_activities_datetime,
    "settings_activities_aid" => $this->settings_activities_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}