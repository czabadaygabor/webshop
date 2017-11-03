<?php

// Adatbázis kapcsolat beállításai.
define("DBNAME", "pharma");
define("DBUSER", "pharma");
define("DBPASSWORD", "Pharma1");

// Routing (útválasztó) beállításai.
define("PREFIX", "api");
define("SQLDIR", "sql");
$router = array(
    // Select kérések.
    "/customers" => "all_customer.sql",
    "/customers/:id" => "one_customer.sql",
    "/customers/limit/:s" => "limit_customer.sql",
    "/products" => "all_products.sql",
    "/products/:id" => "one_product.sql",
    "/brands" => "gyartok.sql",
    "/invoice" => "all_invoice.sql",
    "/brands/:id" => "egy_gyarto.sql",
    "/orszagok" => "orszagok.sql",
    "/orszagok/:id" => "egy_orszag.sql",
    "/invoice/:id" => "one_invoice.sql",
    "/felhasznalok" => "osszes_felh.sql", 
    "/active" => "active_felh.sql", 
    "/inactive" => "inactive_felh.sql", 
    "/osszhirlevel" => "hirlevel.sql", 
    "/akt_ho" => "akt_ho.sql", 
    "/elozo_ho" => "elozo_ho.sql", 
    "/elerheto_orszagok" => "elerhetoorszagok.sql", 
    "/osszgyarto" => "osszgyarto.sql", 
    "/ossztermek" => "ossztermek.sql", 

    // Insert kérések.
    "/customers/insert" => "add_customer.sql",
    // Update kérések.
    "/customers/update/:id" => "update_customer.sql",
    // Delete kérések.
    "/customers/delete/:id" => "delete_customer.sql"
);