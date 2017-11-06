UPDATE brands
   SET b_name = ':bname',
       b_address = ':address',
        b_city = ':city',
      o_id=(SELECT o_id FROM orszag WHERE o_name=':orszagnev')
 WHERE b_id = :id;
