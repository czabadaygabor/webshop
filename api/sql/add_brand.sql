INSERT INTO products 
(b_name,b_address,b_city,o_id)
   VALUES
     (':bname',':baddress',':bcity', (SELECT o_id FROM orszag WHERE o_name=':orszagnev'));



	

