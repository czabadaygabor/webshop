var tableData = [];
var targetTable = document.querySelector("#orszagtabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
orszag_lekerdez();


function orszag_lekerdez() {
    getJson("api/orszagok", function (orszag) {
        tableData = orszag;
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
        tr += "<td><a href='egy_orszag.html?id=" + (parseInt(data[k].o_id)) + "' class='button_vevo'>Szerkesztés</td>";
        content += tr + "</tr>";
    }
    targetTable.querySelector("tbody").innerHTML = content;
}

/*document.querySelector(".products-btn")
    .addEventListener("click", function () {
        getJson("../api/products", function (products) {
            tableData = products;
            fillTable(tableData);
        });
    });*/