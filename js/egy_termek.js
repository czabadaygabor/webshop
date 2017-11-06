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

    //tbody generálása

    var azonosito = 0;
    var content = "";
    for (var k in data) {
        var tr = "<tr>";
        for (var j in data[k]) {
            if (j == "p_id") {
                tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + "' disabled ></td>";
                azonosito = data[k][j];
            } else {
                tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + "' class=input_vevo></td>";

            }
        }
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


document.getElementById("updgomb").addEventListener("click", function () {
    var p_id = document.getElementById("p_id").value;
    var p_name = document.getElementById("p_name").value;
    var b_name = document.getElementById("b_name").value;
    var p_price = document.getElementById("p_price").value;
    var p_sale = document.getElementById("p_sale").value;
    var p_desc = document.getElementById("p_description").value;

    var customer = {
        id: p_id,
        pname: p_name,
        gyartonev: b_name,
        pprice: p_price,
        psale: p_sale,
        pdesc: p_desc
    };
    console.log(customer.pname);
    console.log(customer.gyartonev);
    console.log(customer.pprice);
    console.log(customer.psale);
    console.log(customer.pdesc);
    var hivas = "api/customers/pupdate/" + customer.id;
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});

document.getElementById("delgomb").addEventListener("click", function () {
    var p_id = document.getElementById("p_id").value;
    var customer = {
        id: p_id
    };
    var hivas = "api/customers/pdelete/" + customer.id;
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});
document.getElementById("insgomb").addEventListener("click", function () {
    var p_id = document.getElementById("p_id").value;
    var p_name = document.getElementById("p_name").value;
    var b_name = document.getElementById("b_name").value;
    var p_price = document.getElementById("p_price").value;
    var p_sale = document.getElementById("p_sale").value;
    var p_desc = document.getElementById("p_description").value;

    var customer = {
        id: p_id,
        pname: p_name,
        gyartonev: b_name,
        pprice: p_price,
        psale: p_sale,
        pdesc: p_desc
    };

    var hivas = "api/customers/pinsert";
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});