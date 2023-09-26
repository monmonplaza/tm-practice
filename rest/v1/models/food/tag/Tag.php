<?php
class Tag
{
    public $tag_aid;
    public $tag_is_active;
    public $tag_name;
    public $tag_created;
    public $tag_datetime;

    public $connection;
    public $lastInsertedId;
    public $tag_start;
    public $tag_total;
    public $tag_search;

    public $tbltag;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tbltag = "vr_tag";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tbltag} ";
            $sql .= "( tag_name, ";
            $sql .= "tag_is_active, ";
            $sql .= "tag_created, ";
            $sql .= "tag_datetime ) values ( ";
            $sql .= ":tag_name, ";
            $sql .= ":tag_is_active, ";
            $sql .= ":tag_created, ";
            $sql .= ":tag_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_name" => $this->tag_name,
                "tag_is_active" => $this->tag_is_active,
                "tag_created" => $this->tag_created,
                "tag_datetime" => $this->tag_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tbltag} ";
            $sql .= "order by tag_is_active desc, ";
            $sql .= "tag_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * from {$this->tbltag} ";
            $sql .= "where tag_aid = :tag_aid ";
            $sql .= "order by tag_is_active desc, ";
            $sql .= "tag_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_aid" => $this->tag_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
 

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tbltag} ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->tag_start - 1,
                "total" => $this->tag_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

  
    // search
    public function search()
    {
        try {
            $sql = "select * from {$this->tbltag} ";
            $sql .= "where tag_name like :tag_name ";
            $sql .= "order by tag_is_active desc, ";
            $sql .= "tag_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_name" => "%{$this->tag_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }




    // update
    public function update()
    {
        try {
            $sql = "update {$this->tbltag} set ";
            $sql .= "tag_name = :tag_name, ";
            $sql .= "tag_datetime = :tag_datetime ";
            $sql .= "where tag_aid  = :tag_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_name" => $this->tag_name,
                "tag_datetime" => $this->tag_datetime,
                "tag_aid" => $this->tag_aid,
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
            $sql = "update {$this->tbltag} set ";
            $sql .= "tag_is_active = :tag_is_active, ";
            $sql .= "tag_datetime = :tag_datetime ";
            $sql .= "where tag_aid = :tag_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_is_active" => $this->tag_is_active,
                "tag_datetime" => $this->tag_datetime,
                "tag_aid" => $this->tag_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tbltag} ";
            $sql .= "where tag_aid = :tag_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_aid" => $this->tag_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validator

    // email
    public function checkName()
    {
        try {
            $sql = "select tag_name from {$this->tbltag} ";
            $sql .= "where tag_name = :tag_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tag_name" => "{$this->tag_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
