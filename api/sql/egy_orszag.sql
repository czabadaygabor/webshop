SELECT o_id, o_name, o_distance, o_shipping_fee, if(o_isavailable=1,'Igen','Nem') as o_isavailable
FROM orszag
WHERE o_id=:id;