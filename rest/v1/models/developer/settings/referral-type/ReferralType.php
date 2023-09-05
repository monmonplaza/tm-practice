<?php
class ReferralType
{
    public $referral_type_aid;
    public $referral_type_name;
    public $referral_type_description;
    public $referral_type_department_id;
    public $referral_type_is_active;
    public $referral_type_created_at;
    public $referral_type_update_at;

    public $connection;
    public $lastInsertedId;
    public $tblReferralType;
    public $tblDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReferralType = "trainingtm_referral_type";
        $this->tblDepartment = "trainingtm_department";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblReferralType} ";
            $sql .= "( referral_type_name, ";
            $sql .= "referral_type_description, ";
            $sql .= "referral_type_department_id, ";
            $sql .= "referral_type_is_active, ";
            $sql .= "referral_type_created_at, ";
            $sql .= "referral_type_update_at ) values ( ";
            $sql .= ":referral_type_name, ";
            $sql .= ":referral_type_description, ";
            $sql .= ":referral_type_department_id, ";
            $sql .= ":referral_type_is_active, ";
            $sql .= ":referral_type_created_at, ";
            $sql .= ":referral_type_update_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_name" => $this->referral_type_name,
                "referral_type_description" => $this->referral_type_description,
                "referral_type_department_id" => $this->referral_type_department_id,
                "referral_type_is_active" => $this->referral_type_is_active,
                "referral_type_created_at" => $this->referral_type_created_at,
                "referral_type_update_at" => $this->referral_type_update_at,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // public function readAll()
    // {
    //     try {
    //         $sql = "select tempalte.engagement_template_invoice_description, ";
    //         $sql .= "tempalte.engagement_template_description, ";
    //         $sql .= "tempalte.engagement_template_name, ";
    //         $sql .= "tempalte.engagement_template_rates, ";
    //         $sql .= "tempalte.engagement_template_is_active, ";
    //         $sql .= "tempalte.engagement_template_office_id, ";
    //         $sql .= "tempalte.engagement_template_category_id, ";
    //         $sql .= "tempalte.engagement_template_biller_id, ";
    //         $sql .= "tempalte.engagement_template_review_id, ";
    //         $sql .= "tempalte.engagement_template_manager_id, ";
    //         $sql .= "tempalte.engagement_template_aid, ";
    //         $sql .= "office.office_name, ";
    //         $sql .= "category.engagement_category_name ";
    //         $sql .= "from {$this->tblEngagement} as tempalte, ";
    //         $sql .= "{$this->tblCategory} as category, ";
    //         $sql .= "{$this->tblOffice} as office ";
    //         $sql .= "where tempalte.engagement_template_category_id = category.engagement_category_aid ";
    //         $sql .= "and tempalte.engagement_template_office_id = office.office_aid ";
    //         $sql .= "order by tempalte.engagement_template_is_active desc, ";
    //         $sql .= "tempalte.engagement_template_description asc ";
    //         $query = $this->connection->query($sql);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "referral.referral_type_aid, ";
            $sql .= "referral.referral_type_name, ";
            $sql .= "referral.referral_type_description, ";
            $sql .= "referral.referral_type_department_id, ";
            // $sql .= "referral.referral_type_is_active ";
            // $sql .= "referral.referral_type_update_at ";
            $sql .= "department.department_name ";
            // $sql .= "department.department_created ";
            // $sql .= "department.department_datetime ";
            $sql .= "from ";
            $sql .= "{$this->tblReferralType} as referral, ";
            $sql .= "{$this->tblDepartment} as department ";
            $sql .= "where referral.referral_type_department_id = department.department_aid ";
            $sql .= "order by referral.referral_type_is_active desc, ";
            $sql .= "referral.referral_type_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function readAllDepartment()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblDepartment} ";
            $sql .= "order by department_is_active desc, ";
            $sql .= "department_name desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblReferralType} ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $sql .= "order by referral_type_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_aid" => $this->referral_type_aid,
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
            $sql = "update {$this->tblReferralType} set ";
            $sql .= "referral_type_name = :referral_type_name, ";
            $sql .= "referral_type_description = :referral_type_description, ";
            $sql .= "referral_type_department_id = :referral_type_department_id, ";
            $sql .= "referral_type_update_at = :referral_type_update_at ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_name" => $this->referral_type_name,
                "referral_type_description" => $this->referral_type_description,
                "referral_type_department_id" => $this->referral_type_department_id,
                "referral_type_update_at" => $this->referral_type_update_at,
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
            $sql = "update {$this->tblReferralType} set ";
            $sql .= "referral_type_is_active = :referral_type_is_active, ";
            $sql .= "referral_type_update_at = :referral_type_update_at ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_is_active" => $this->referral_type_is_active,
                "referral_type_update_at" => $this->referral_type_update_at,
                "referral_type_aid" => $this->referral_type_aid,
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
            $sql = "delete from {$this->tblReferralType} ";
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

    // // validator 
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select employee_last_name, ";
    //         $sql .= "employee_first_name, ";
    //         $sql .= "employee_aid ";
    //         $sql .= "from {$this->tblEmployee} ";
    //         $sql .= "where employee_department_id = :department_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "department_aid" => $this->department_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    // name
    public function checkName()
    {
        try {
            $sql = "select referal_type_name from {$this->tblReferralType} ";
            $sql .= "where referal_type_name = :referal_type_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referal_type_name" => "{$this->referral_type_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
