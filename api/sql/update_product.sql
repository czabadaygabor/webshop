UPDATE products
   SET   p_name = ':pname',
         b_id = (SELECT b_id FROM brands WHERE b_name=':gyartonev'),
         p_price = ':pprice',
         p_sale = ':psale',
         p_description = ':pdesc'
 WHERE   p_id = ':id' ;