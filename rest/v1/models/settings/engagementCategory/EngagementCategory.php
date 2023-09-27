<?php

class EngagementCategory
{
    public $engagement_category_aid ;
    public $engagement_category_name;
    public $engagement_category_description;
    public $engagement_category_invoice_description;
    public $engagement_category_is_active;
    public $engagement_category_create;
    public $engagement_category_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblEngageCateg;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEngageCateg = "tmv1_settings_engagement_category";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblEngageCateg} ";
          $sql .= "order by engagement_category_is_active desc, ";
          $sql .= "engagement_category_name asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function create()
  {
    try {
      $sql = "insert into {$this->tblEngageCateg} ";
      $sql .= "( engagement_category_name, ";
      $sql .= "engagement_category_description, ";
      $sql .= "engagement_category_invoice_description, ";
      $sql .= "engagement_category_is_active, ";
      $sql .= "engagement_category_create, ";
      $sql .= "engagement_category_datetime ) values ( ";
      $sql .= ":engagement_category_name, ";
      $sql .= ":engagement_category_description, ";
      $sql .= ":engagement_category_invoice_description, ";
      $sql .= ":engagement_category_is_active, ";
      $sql .= ":engagement_category_create, ";
      $sql .= ":engagement_category_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "engagement_category_name" => $this->engagement_category_name,
        "engagement_category_description" => $this->engagement_category_description,
        "engagement_category_invoice_description" => $this->engagement_category_invoice_description,
        "engagement_category_is_active" => $this->engagement_category_is_active,
        "engagement_category_create" => $this->engagement_category_create,
        "engagement_category_datetime" => $this->engagement_category_datetime,
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
      $sql = "update {$this->tblEngageCateg} set ";
      $sql .= "engagement_category_name = :engagement_category_name, ";
      $sql .= "engagement_category_description = :engagement_category_description, ";
      $sql .= "engagement_category_invoice_description = :engagement_category_invoice_description, ";
      $sql .= "engagement_category_datetime = :engagement_category_datetime ";
      $sql .= "where engagement_category_aid = :engagement_category_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "engagement_category_name" => $this->engagement_category_name,
        "engagement_category_description" => $this->engagement_category_description,
        "engagement_category_invoice_description" => $this->engagement_category_invoice_description,
        "engagement_category_datetime" => $this->engagement_category_datetime,
        "engagement_category_aid" => $this->engagement_category_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblEngageCateg} ";
      $sql .= "where engagement_category_aid = :engagement_category_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "engagement_category_aid" => $this->engagement_category_aid,
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
    $sql = "update {$this->tblEngageCateg} set ";
    $sql .= "engagement_category_is_active = :engagement_category_is_active, ";
    $sql .= "engagement_category_datetime = :engagement_category_datetime ";
    $sql .= "where engagement_category_aid = :engagement_category_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "engagement_category_is_active" => $this->engagement_category_is_active,
    "engagement_category_datetime" => $this->engagement_category_datetime,
    "engagement_category_aid" => $this->engagement_category_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}