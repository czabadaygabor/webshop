INSERT INTO brands
(b_name,b_address,o_id,b_city)
   VALUES
     (':bname',':address', (SELECT o_id FROM orszag WHERE o_name=':orszagnev'),':city');



	

