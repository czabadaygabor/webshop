-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3306
-- Létrehozás ideje: 2017. Nov 03. 09:08
-- Kiszolgáló verziója: 5.7.19
-- PHP verzió: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `pharma`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE IF NOT EXISTS `brands` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_name` varchar(40) NOT NULL,
  `b_address` varchar(100) NOT NULL,
  `b_city` varchar(50) NOT NULL,
  `o_id` int(11) NOT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `brands`
--

INSERT INTO `brands` (`b_id`, `b_name`, `b_address`, `b_city`, `o_id`) VALUES
(1, 'Hungaropharma Zrt.', '1105 Tündérfürt utca 6.', 'Budapest', 1),
(2, 'EGIS Zrt.', '1101 Keresztúri út 130', 'Budapest', 1),
(3, 'Richter Gyógyszergyár Zrt.', '1103 Gyömrői út 60.', 'Budapest', 1),
(4, 'Phoenix Pharma Zrt. HU', '4836. Béke tér 1.', 'Debrecen', 1),
(5, 'Phoenix Pharma DE', 'DE1245 Oliver Kahn Strasse 6', 'München', 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `customers`
--

DROP TABLE IF EXISTS `customers`;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `customers`
--

INSERT INTO `customers` (`c_id`, `c_name`, `c_address`, `c_city`, `o_id`, `c_contact`, `c_active`, `c_news`) VALUES
(1, 'Teszt Elek', '1103 Teszt utca 1', 'Tesztváros', 1, 'teszt.elek@om.hu', b'0', b'0'),
(2, 'Kiss Pista', '6000 Fő utca 1', 'Békéscsaba', 1, 'pistike@gmail.com', b'1', b'1'),
(3, 'Illés Jácint', '3001 Kiksunfélegyházi út 111.', 'Jászkarajenő', 1, 'elfelejtettem@freemail.hu', b'1', b'0'),
(4, 'Csubakka', 'DE8880 Halálcsillag Strasse 5', 'Nürnberg', 2, 'han.solo@milleniumf.de', b'1', b'1'),
(5, 'Mwigongu Dongu', 'SU7777 Kassalai jalan 33', 'Khartoum', 4, 'dongubongu@allah.su', b'0', b'0'),
(6, 'Id. Szent István', '8888 Bazilika út 1.', 'Székesfehérvár', 1, 'tized@dezsma.hu', b'0', b'1'),
(7, 'Luigi Macho Grande', 'IT9800', 'Pizza Makaroni strada', 6, 'pizanapolyi@nemfinom.it', b'0', b'0'),
(8, 'Ten Sin Han', 'CH888 Kisszékhoember utca 5', 'Songoku', 5, 'erezdacsit@china.kinai', b'1', b'1');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `invoice`
--

DROP TABLE IF EXISTS `invoice`;
CREATE TABLE IF NOT EXISTS `invoice` (
  `i_number` int(11) NOT NULL AUTO_INCREMENT,
  `i_date` date NOT NULL,
  `i_total` int(11) NOT NULL,
  `c_id` int(11) NOT NULL COMMENT 'vásárlót azonosítja',
  `i_complaint` bit(1) NOT NULL DEFAULT b'0',
  `i_coupon_code` varchar(10) DEFAULT NULL,
  `i_coupon_perc` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`i_number`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `invoice`
--

INSERT INTO `invoice` (`i_number`, `i_date`, `i_total`, `c_id`, `i_complaint`, `i_coupon_code`, `i_coupon_perc`) VALUES
(1, '2017-11-01', 2000, 2, b'0', 'HUHA4444', 20),
(2, '2017-10-02', 3000, 1, b'1', NULL, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orszag`
--

DROP TABLE IF EXISTS `orszag`;
CREATE TABLE IF NOT EXISTS `orszag` (
  `o_id` int(11) NOT NULL AUTO_INCREMENT,
  `o_name` varchar(40) NOT NULL,
  `o_distance` int(11) NOT NULL,
  `o_shipping_fee` int(11) NOT NULL,
  `o_isavailable` bit(1) NOT NULL,
  PRIMARY KEY (`o_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `orszag`
--

INSERT INTO `orszag` (`o_id`, `o_name`, `o_distance`, `o_shipping_fee`, `o_isavailable`) VALUES
(1, 'Magyarország', 0, 1000, b'1'),
(2, 'Deuchland', 2000, 10000, b'1'),
(3, 'Sweden', 3000, 20000, b'1'),
(4, 'Sudan', 5000, 0, b'0'),
(5, 'China', 17000, 100000, b'1'),
(6, 'Italy', 1000, 0, b'0');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_name` varchar(40) NOT NULL,
  `b_id` int(11) NOT NULL,
  `p_price` int(11) NOT NULL,
  `p_sale` int(11) DEFAULT NULL,
  `p_description` varchar(250) NOT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `products`
--

INSERT INTO `products` (`p_id`, `p_name`, `b_id`, `p_price`, `p_sale`, `p_description`) VALUES
(1, 'Algopyrin', 2, 880, 10, 'Ez egy fájdalomcsillapító'),
(2, 'Kalmopyrin', 3, 900, NULL, 'Láz és fájdalomcsillapító');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
