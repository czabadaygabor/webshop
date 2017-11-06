INSERT INTO products 
(p_name,b_id,p_price,p_sale,p_description)
   VALUES
     (':pname',(SELECT b_id FROM brands WHERE b_name=':gyartonev'),':pprice',':psale', ':pdesc' );





