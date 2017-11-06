UPDATE orszag
   SET 
o_name=':oname',
o_distance=:odistance,
o_shipping_fee= :oshippingfee,
o_isavailable=:oisavailable

 WHERE o_id = :id;

