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

// Gomok config

document.getElementById("updgomb").addEventListener("click", function () {
    var o_id = document.getElementById("o_id").value;
    var o_name = document.getElementById("o_name").value;
    var o_distance = document.getElementById("o_distance").value;
    var o_shipping_fee = document.getElementById("o_shipping_fee").value;
    if (document.getElementById("o_isavailable").value == "Igen") {
        var o_isavailable = 1;
    } else {
        var o_isavailable = 0;
    }

    var customer = {
        id: o_id,
        oname: o_name,
        odistance: o_distance,
        oshippingfee: o_shipping_fee,
        oisavailable: o_isavailable
    };

    console.log(customer.id);
    console.log(customer.oname);
    console.log(customer.odistance);
    console.log(customer.oshippingfee);
    console.log(customer.oisavailable);
    var hivas = "api/customers/oupdate/" + customer.id;
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});

document.getElementById("delgomb").addEventListener("click", function () {
    var o_id = document.getElementById("o_id").value;
    var customer = {
        id: o_id
    };
    var hivas = "api/customers/odelete/" + customer.id;
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});

document.getElementById("insgomb").addEventListener("click", function () {
    var o_id = document.getElementById("o_id").value;
    var o_name = document.getElementById("o_name").value;
    var o_distance = document.getElementById("o_distance").value;
    var o_shipping_fee = document.getElementById("o_shipping_fee").value;
    if (document.getElementById("o_isavailable").value == "Igen") {
        var o_isavailable = 1;
    } else {
        var o_isavailable = 0;
    }

    var customer = {
        id: o_id,
        oname: o_name,
        odistance: o_distance,
        oshippingfee: o_shipping_fee,
        oisavailable: o_isavailable
    };

    console.log(customer.id);
    console.log(customer.oname);
    console.log(customer.odistance);
    console.log(customer.oshippingfee);
    console.log(customer.oisavailable);

    var hivas = "api/customers/oinsert";
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});