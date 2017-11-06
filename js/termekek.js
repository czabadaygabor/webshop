var tableData = [];
var targetTable = document.querySelector("#termekek-tabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
termekek_lekerdez();


function termekek_lekerdez() {
    getJson("api/products", function (products) {
        tableData = products;
        fillTable(tableData);
    })
};

function fillTable(data) {
    // Fejléc generálása.
    var head = "";
    for (var k in data[0]) {
        head += "<th>" + (dict[k] || "-") + "</th>";
    }
    head += "<th>Szerkesztés</th>";
    targetTable.querySelector("thead tr").innerHTML = head;


    var content = "";
    for (var k in data) {
        var tr = "<tr>";
        for (var j in data[k]) {
            tr += "<td>" + data[k][j] + "</td>";
        }
        tr += "<td><a href='egy_termek.html?id=" + (parseInt(data[k].p_id)) + "' class=button_termek>Szerkesztés</td>";
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