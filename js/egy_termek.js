var tableData = [];
var targetTable = document.querySelector("#termekek-tabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
var cid = location.href.split("=")[1];
termekek_lekerdez();


function termekek_lekerdez() {
    console.log(cid);
    getJson("api/products/" + cid, function (products) {
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
    targetTable.querySelector("thead tr").innerHTML = head;

    var content = "";
    for (var k in data) {
        var tr = "<tr>";
        for (var j in data[k]) {
            if (j != "c_active" && j != "c_news") {
                if (j == "c_id") {
                    tr += "<td><input type='text' value='" + data[k][j] + "' id='" + k + "_" + j + " szerk' disabled ></td>";
                } else {
                    tr += "<td><input type='text' value='" + data[k][j] + "' id='" + k + "_" + j + " szerk' class=input_vevo></td>";
                }

                console.log(k + "_" + j);
            } else {
                tr += "<td><input type='checkbox'";
                if (data[k][j] == 1) {
                    tr += " checked ";
                }
                tr += " id='" + k + " szerk' class=input_vevo></td>";
            }
        }
        tr += "<td><input type='button' value='OK' id='" + k + " szerk' class=button_termek></td>";
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