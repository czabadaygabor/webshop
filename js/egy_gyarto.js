var tableData = [];
var targetTable = document.querySelector("#gyartok-tabla");
var dict = {};
getJson("js/dict2.json", function (json) {
    dict = json;
});
var cid = location.href.split("=")[1];
termekek_lekerdez();


function termekek_lekerdez() {
    console.log(cid);
    getJson("api/brands/" + cid, function (brands) {
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

            console.log(k + "_" + j);
        }
        tr += " id='" + k + " szerk' class=input_gyarto></td>";
    }
    tr += "<td><input type='button' value='OK' id='" + k + " szerk' class=button_gyarto></td>";
    content += tr + "</tr>";
    targetTable.querySelector("tbody").innerHTML = content;
}





/*document.querySelector(".products-btn")
    .addEventListener("click", function () {
        getJson("../api/products", function (products) {
            tableData = products;
            fillTable(tableData);
        });
    });*/