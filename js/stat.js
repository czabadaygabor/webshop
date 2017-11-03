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
var content = "";

function felh_lekerdez() {
    getJson("api/felhasznalok", function (felhasznalok) {
        felh = felhasznalok[0].db;
        content += "<tr><td>Összes felhasználók száma:</td><td>" + felh + "</td></tr>";
    });


    getJson("api/active", function (felhasznalok) {
        active = felhasznalok[0].db;
        content += "<tr><td>Aktív felhasználók száma:</td><td>" + active + "</td></tr>";
    });



    getJson("api/inactive", function (felhasznalok) {
        inactive = felhasznalok[0].db;
        content += "<tr><td>Inaktív felhasználók száma:</td><td>" + inactive + "</td></tr>";

    });

    getJson("api/osszhirlevel", function (felhasznalok) {
        osszhirlevel = felhasznalok[0].db;
        content += "<tr><td>Hírleveles felhasználók száma:</td><td>" + osszhirlevel + "</td></tr>";
    });

    getJson("api/akt_ho", function (felhasznalok) {
        akt_ho = felhasznalok[0].db;
        content += "<tr><td>Aktuális hó forgalma:</td><td>" + akt_ho + "</td></tr>";
    });



    getJson("api/elozo_ho", function (felhasznalok) {
        elozo_ho = felhasznalok[0].db;
        content += "<tr><td>Előző hó forgalma:</td><td>" + elozo_ho + "</td></tr>";
    });



    getJson("api/elerheto_orszagok", function (felhasznalok) {
        elerhetoorszagok = felhasznalok[0].db;
        content += "<tr><td>Elérhető országok száma:</td><td>" + elerhetoorszagok + "</td></tr>";
    });

    getJson("api/osszgyarto", function (felhasznalok) {
        osszgyarto = felhasznalok[0].db;
        content += "<tr><td>Gyártók száma:</td><td>" + osszgyarto + "</td></tr>";
    });

    getJson("api/ossztermek", function (felhasznalok) {
        ossztermek = felhasznalok[0].db;
        content += "<tr><td>Termékek száma:</td><td>" + ossztermek + "</td></tr>";
        targetTable.querySelector("tbody").innerHTML = content;
    });
};
felh_lekerdez();