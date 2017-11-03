var tableData = [];
var targetTable = document.querySelector("#rendelesek-tabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
szamlak_lekerdez();


function szamlak_lekerdez() {
    getJson("api/invoice", function (invoice) {
        tableData = invoice;
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
        tr += "<td><a href='egy_rendeles.html?id=" + (parseInt(k) + 1) + "' class=button_rendeles>Szerkesztés</td>";
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