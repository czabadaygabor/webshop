SELECT i_number, i_date, i_total, c_name, if(i_complaint=1,'Igen', 'Nem') AS i_complaint, i_coupon_code, i_coupon_perc
FROM invoice i, customers c
WHERE
i.c_id=c.c_id;