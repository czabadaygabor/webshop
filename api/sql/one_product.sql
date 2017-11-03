SELECT p_id, p_name, b_name, p_price, p_sale, p_description
FROM products p, brands b
WHERE
p.b_id=b.b_id
and p_id = :id;