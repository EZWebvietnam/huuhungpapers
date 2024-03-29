<?php
class Productmodel extends CI_Model
{
    public function __construct() {
        parent::__construct();
        $this->load->database();
    }
    public function list_product($number,$offset)
    {
        //$sql ="SELECT * FROM product LIMIT $offset,$number";
        $sql ="SELECT * FROM product LIMIT $offset,$number";
        $query = $this->db->query($sql);
        return $query->result_array();
    }
    public function count_product()
    {
        //$sql ="SELECT * FROM product";
        $sql ="SELECT * FROM product";
        $query = $this->db->query($sql);
        return count($query->result_array());
    }
    public function delete_product($id)
    {
        $this->db->delete('product',array('id_product'=>$id));
    }
    public function view_product($id)
    {
        $id = intval($id);
        $sql ="SELECT * FROM product WHERE id_product = $id";
        $query = $this->db->query($sql);
        return $query->result_array();
    }
    public function add_product(array $data)
    {
        $this->db->insert('product',$data);
        return $this->db->insert_id();
    }
    public function update_product($id,array $data)
    {
        $id = intval($id);
        $this->db->where('id_product',$id);
        $this->db->update('product',$data);
    }
    public function delete_user_product($id_product)
    {
        $this->db->delete('user_product',array('id_product'=>$id_product));
    }
     public function delete_user_product_2($id_user)
    {
        $this->db->delete('user_product',array('id_user'=>$id_user));
    }
    public function insert_clip(array $data)
    {
        $this->db->insert('clip_marketing',$data);
        return $this->db->insert_id();
    }
    public function delete_clip($id)
    {
        $this->db->delete('clip_marketing',array('id_product'=>$id));
    }
}
?>