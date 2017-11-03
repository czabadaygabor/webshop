UPDATE customers 
    SET c_name = ':cname', 
        c_address = ':address',
        c_city = ':city',
        o_id=':'( SELECT o_id FROM orszag WHERE o_name=':orszagnev'),
        c_contact = ':contact',
        c_active = ':active',
        c_news = ':news'
    WHERE c_id = ':id';