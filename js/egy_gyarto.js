var tableData = [];
var targetTable = document.querySelector("#egy-gyarto-tabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
var id = location.href.split("=")[1];
gyartok_lekerdez();


function gyartok_lekerdez() {
    console.log(id);
    getJson("api/brands/" + id, function (brands) {
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

    //tbody generálása
    var content = "";
    for (var k in data) {
        var tr = "<tr>";
        for (var j in data[k]) {

            tr += "<td><input type='text' value='" + data[k][j] + "' id='" + k + "_" + j + " szerk' class='input_gyarto'></td>";

        }
    }
    content += tr + "</tr>";

    targetTable.querySelector("tbody").innerHTML = content;
}