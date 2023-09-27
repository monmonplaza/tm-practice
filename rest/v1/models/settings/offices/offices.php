<?php

class Offices
{
    public $office_aid;
    public $office_name;
    public $office_is_active;
    public $office_description;
    public $office_contact_name;
    public $office_contact_company;
    public $office_contact_home_number;
    public $office_contact_mobile_number;
    public $office_contact_email;
    public $office_address_city;
    public $office_address_county;
    public $office_address_state;
    public $office_address_country;
    public $office_address_zip;
    public $office_created;
    public $office_datetime;

    public $connection;
    public $lastInsertedId;
    public $emp_start;
    public $emp_total;
    public $emp_search;

    public $tblOffices;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblOffices = "tmv1_settings_offices";
        
    }

    public function readAll()
      {
        try {
          $sql = "select * from {$this->tblOffices} ";
          $sql .= "order by office_is_active desc, ";
          $sql .= "office_name asc ";
          $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
          $query = false;
        }
        return $query;
      }

      public function create()
  {
    try {
      $sql = "insert into {$this->tblOffices} ";
      $sql .= "( office_name, ";
      $sql .= "office_is_active, ";
      $sql .= "office_description, ";
      $sql .= "office_contact_name, ";
      $sql .= "office_contact_company, ";
      $sql .= "office_contact_home_number, ";
      $sql .= "office_contact_mobile_number, ";
      $sql .= "office_contact_email, ";
      $sql .= "office_address_city, ";
      $sql .= "office_address_county, ";
      $sql .= "office_address_state, ";
      $sql .= "office_address_country, ";
      $sql .= "office_address_zip, ";
      $sql .= "office_created, ";
      $sql .= "office_datetime ) values ( ";
      $sql .= ":office_name, ";
      $sql .= ":office_is_active, ";
      $sql .= ":office_description, ";
      $sql .= ":office_contact_name, ";
      $sql .= ":office_contact_company, ";
      $sql .= ":office_contact_home_number, ";
      $sql .= ":office_contact_mobile_number, ";
      $sql .= ":office_contact_email, ";
      $sql .= ":office_address_city, ";
      $sql .= ":office_address_county, ";
      $sql .= ":office_address_state, ";
      $sql .= ":office_address_country, ";
      $sql .= ":office_address_zip, ";
      $sql .= ":office_created, ";
      $sql .= ":office_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "office_name" => $this->office_name,
        "office_is_active" => $this->office_is_active,
        "office_description" => $this->office_description,
        "office_contact_name" => $this->office_contact_name,
        "office_contact_company" => $this->office_contact_company,
        "office_contact_home_number" => $this->office_contact_home_number,
        "office_contact_mobile_number" => $this->office_contact_mobile_number,
        "office_contact_email" => $this->office_contact_email,
        "office_address_city" => $this->office_address_city,
        "office_address_county" => $this->office_address_county,
        "office_address_state" => $this->office_address_state,
        "office_address_country" => $this->office_address_country,
        "office_address_zip" => $this->office_address_zip,
        "office_created" => $this->office_created,
        "office_datetime" => $this->office_datetime,
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
      $sql = "update {$this->tblOffices} set ";
      $sql .= "office_name = :office_name, ";
      $sql .= "office_description = :office_description, ";
      $sql .= "office_contact_name = :office_contact_name, ";
      $sql .= "office_contact_company = :office_contact_company, ";
      $sql .= "office_contact_home_number = :office_contact_home_number, ";
      $sql .= "office_contact_mobile_number = :office_contact_mobile_number, ";
      $sql .= "office_contact_email = :office_contact_email, ";
      $sql .= "office_address_city = :office_address_city, ";
      $sql .= "office_address_county = :office_address_county, ";
      $sql .= "office_address_state = :office_address_state, ";
      $sql .= "office_address_country = :office_address_country, ";
      $sql .= "office_address_zip = :office_address_zip, ";
      $sql .= "office_datetime = :office_datetime ";
      $sql .= "where office_aid = :office_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "office_name" => $this->office_name,
        "office_description" => $this->office_description,
        "office_contact_name" => $this->office_contact_name,
        "office_contact_company" => $this->office_contact_company,
        "office_contact_home_number" => $this->office_contact_home_number,
        "office_contact_mobile_number" => $this->office_contact_mobile_number,
        "office_contact_email" => $this->office_contact_email,
        "office_address_city" => $this->office_address_city,
        "office_address_county" => $this->office_address_county,
        "office_address_state" => $this->office_address_state,
        "office_address_country" => $this->office_address_country,
        "office_address_zip" => $this->office_address_zip,
        "office_datetime" => $this->office_datetime,
        "office_aid" => $this->office_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function delete()
  {
    try {
      $sql = "delete from {$this->tblOffices} ";
      $sql .= "where office_aid = :office_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "office_aid" => $this->office_aid,
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
    $sql = "update {$this->tblOffices} set ";
    $sql .= "office_is_active = :office_is_active, ";
    $sql .= "office_datetime = :office_datetime ";
    $sql .= "where office_aid = :office_aid ";
    $query = $this->connection->prepare($sql);
    $query->execute([
    "office_is_active" => $this->office_is_active,
    "office_datetime" => $this->office_datetime,
    "office_aid" => $this->office_aid,
    ]);
    } catch (PDOException $ex) {
    $query = false;
    }
    return $query;
  }

}