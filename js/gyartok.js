var tableData = [];
var targetTable = document.querySelector("#gyartok-tabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
gyartok_lekerdez();


function gyartok_lekerdez() {
    getJson("api/brands", function (brands) {
        tableData = brands;
        fillTable(tableData);
    })
};

function fillTable(data) {
    // Fejléc generálása.
    var head = "";
    for (var k in data[0]) {
        head += "<th>" + (dict[k] || "-") + "</th>";
    }
    targetTable.querySelector("thead tr").innerHTML = head;

    var content = "";
    for (var k in data) {
        var tr = "<tr>";
        for (var j in data[k]) {
            tr += "<td>" + data[k][j] + "</td>";
        }
        tr += "<td><a href='egy_gyarto.html?id=" + (parseInt(k) + 1) + "' class=button_vevo>Szerkesztés</td>";
        content += tr + "</tr>";
    }
    targetTable.querySelector("tbody").innerHTML = content;
}