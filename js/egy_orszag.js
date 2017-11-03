var tableData = [];
var targetTable = document.querySelector("#orszagtabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
var id = location.href.split("=")[1];
egyorszag_lekerdez();


function egyorszag_lekerdez() {
    getJson("api/orszagok/" + id, function (egyorszag) {
        tableData = egyorszag;
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
            if (j == "o_id") {
                tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + "' disabled ></td>";
            } else {
                tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + "' class='input_vevo'></td>";
            }

        }
    }
    content += tr + "</tr>";

    targetTable.querySelector("tbody").innerHTML = content;
}