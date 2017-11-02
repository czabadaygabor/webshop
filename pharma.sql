--customers tábla


CREATE TABLE IF NOT EXISTS `customers` (
  
`c_id` int(11) NOT NULL AUTO_INCREMENT,
  
`c_name` varchar(40) NOT NULL,
  
`c_address` varchar(100) NOT NULL,
  
`c_city` varchar(50) NOT NULL,
  
`o_id` int(11) NOT NULL,
  
`c_contact` varchar(50) NOT NULL,
  
`c_active` bit(1) NOT NULL,
  
`c_news` bit(1) NOT NULL,
  
PRIMARY KEY (`c_id`)
) 
ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--products tábla
CREATE TABLE IF NOT EXISTS `products` (
  
`p_id` int(11) NOT NULL AUTO_INCREMENT,
  
`p_name` varchar(40) NOT NULL,
  
`b_id` int(11) NOT NULL,
  
`p_price` int(11) NOT NULL,
  
`p_sale` int(11) NULL,
  
`p_description` varchar(250) NOT NULL,
  
PRIMARY KEY (`p_id`)
) 

ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--brands tábla


CREATE TABLE IF NOT EXISTS `brands` (
  
`b_id` int(11) NOT NULL AUTO_INCREMENT,
  
`b_name` varchar(40) NOT NULL,
  
`b_address` varchar(100) NOT NULL,
  
`b_city` varchar(50) NOT NULL,
  
`o_id` int(11) NOT NULL,
  
PRIMARY KEY (`b_id`)
) 
ENGINE=InnoDB DEFAULT CHARSET=utf8;

--orszag

CREATE TABLE IF NOT EXISTS `orszag` (
  
`o_id` int(11) NOT NULL AUTO_INCREMENT,
 
`o_name` varchar(40) NOT NULL,
 
`o_distance` int(11) NOT NULL,
 
`o_shipping_fee` int(11) NOT NULL,
 
`o_isavailable` bit(1) NOT NULL,
  
PRIMARY KEY (`o_id`)
) 
ENGINE=InnoDB DEFAULT CHARSET=utf8;

--számla (invoice) tábla
CREATE TABLE IF NOT EXISTS `invoice` (
  `i_number` int(11) NOT NULL AUTO_INCREMENT,
  `i_date` date NOT NULL,
  `i_total` int(11) NOT NULL,
  `c_id` int(11) NOT NULL COMMENT 'vásárlót azonosítja',
  `i_complaint` bit(1) NOT NULL DEFAULT b'0',
  `i_coupon_code` varchar(10) DEFAULT NULL,
  `i_coupon_perc` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`i_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

