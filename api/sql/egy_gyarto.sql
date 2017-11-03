SELECT b_id , b_name, b_address, b_city, o_name
FROM brands
INNER JOIN orszag ON brands.o_id=orszag.o_id
WHERE b_id=:id;