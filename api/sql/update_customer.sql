/*UPDATE customers
   SET c_name = ':cname',
       c_address = ':address',
        c_city = ':city',
      o_id=1,
     c_contact = ':contact',
       c_active = :active,
      c_news = :news
 WHERE c_id = :id;*/
UPDATE customers
   SET c_name = 'cname',
       c_address = 'address',
        c_city = 'city',
      o_id=1,
     c_contact = 'contact',
       c_active = 1,
      c_news = 0
 WHERE c_id = 3;