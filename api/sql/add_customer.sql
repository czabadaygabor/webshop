INSERT INTO customers 
(c_name, c_address,c_city,o_id,c_contact,c_active,c_news)
   VALUES
     (':cname',':address',':city', (SELECT o_id FROM orszag WHERE o_name=':orszagnev'),':contact',:active,:news);
