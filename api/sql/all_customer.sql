SELECT c.c_id,c.c_name,c.c_address,c.c_city,o.o_name,c.c_contact,c.c_active,c.c_news
FROM customers c, orszag o
WHERE
c.o_id=o.o_id;