var targetTable = document.querySelector("#stattabla");
var felh;
var active;
var inactive;
var osszhirlevel;
var elozo_ho;
var akt_ho;
var ossztermek;
var osszgyarto;
var elerhetoorszagok;
var sorrendben = [];


function felh_lekerdez() {
    getJson("api/felhasznalok", function (felhasznalok) {
        felh = felhasznalok[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Összes felhasználók száma:</td><td>" + felh + "</td></tr>";
        //targetTable.querySelector("tbody").innerHTML = content;
        //content = "";

    });

    getJson("api/active", function (felhasznalok2) {
        active = felhasznalok2[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Aktív felhasználók száma:</td><td>" + active + "</td></tr>";
    });



    getJson("api/inactive", function (felhasznalok3) {
        inactive = felhasznalok3[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Inaktív felhasználók száma:</td><td>" + inactive + "</td></tr>";

    });

    getJson("api/osszhirlevel", function (felhasznalok4) {
        osszhirlevel = felhasznalok4[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Hírleveles felhasználók száma:</td><td>" + osszhirlevel + "</td></tr>";
    });

    getJson("api/akt_ho", function (felhasznalok5) {
        akt_ho = felhasznalok5[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Aktuális hó forgalma:</td><td>" + akt_ho + "</td></tr>";
    });



    getJson("api/elozo_ho", function (felhasznalok6) {
        elozo_ho = felhasznalok6[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Előző hó forgalma:</td><td>" + elozo_ho + "</td></tr>";
    });



    getJson("api/elerheto_orszagok", function (felhasznalok7) {
        elerhetoorszagok = felhasznalok7[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Elérhető országok száma:</td><td>" + elerhetoorszagok + "</td></tr>";
    });

    getJson("api/osszgyarto", function (felhasznalok8) {
        osszgyarto = felhasznalok8[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Gyártók száma:</td><td>" + osszgyarto + "</td></tr>";
    });

    getJson("api/ossztermek", function (felhasznalok9) {
        ossztermek = felhasznalok9[0].db;
        targetTable.querySelector("tbody").innerHTML += "<tr><td>Termékek száma:</td><td>" + ossztermek + "</td></tr>";

    });
    // targetTable.querySelector("tbody").innerHTML = content;
    // content = "";
};
felh_lekerdez();