var tableData = [];
var targetTable = document.querySelector("#rendelesek-tabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
var id = location.href.split("=")[1];
rendelesek_lekerdez();


function rendelesek_lekerdez() {
    console.log(id);
    getJson("api/invoice/" + id, function (invoice) {
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
    targetTable.querySelector("thead tr").innerHTML = head;

    //tbody generálása

    var azonosito = 0;
    var content = "";
    for (var k in data) {
        var tr = "<tr>";
        for (var j in data[k]) {
            if (j == "i_number") {
                tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + " szerk' disabled ></td>";
                azonosito = data[k][j];
            } else {
                tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + " szerk' class='input_rendeles'></td>";

            }
        }
        tr += "<td><input type='button' value='OK' id='" + azonosito + " szerk' class=button_vevo></td>";
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