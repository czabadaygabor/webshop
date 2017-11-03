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

    // Insert kérések.
    "/customers/insert" => "add_customer.sql",
    // Update kérések.
    "/customers/update/:id" => "update_customer.sql",
    // Delete kérések.
    "/customers/delete/:id" => "delete_customer.sql"
);