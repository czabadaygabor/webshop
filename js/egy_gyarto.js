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

            tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + "' class='input_gyarto'></td>";

        }
    }
    content += tr + "</tr>";

    targetTable.querySelector("tbody").innerHTML = content;
}

// gombok


document.getElementById("insgomb").addEventListener("click", function () {

    var b_id = document.getElementById("b_id").value;
    var b_name = document.getElementById("b_name").value;
    var b_address = document.getElementById("b_address").value;
    var b_city = document.getElementById("b_city").value;
    var o_name = document.getElementById("o_name").value;
    var customer = {
        id: b_id,
        bname: b_name,
        address: b_address,
        city: b_city,
        orszagnev: o_name
    };
    console.log(customer.id);
    console.log(customer.bname);
    console.log(customer.address);
    console.log(customer.city);
    console.log(customer.orszagnev);
    var hivas = "api/customers/binsert";
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});


document.getElementById("updgomb").addEventListener("click", function () {
    var b_id = document.getElementById("b_id").value;
    var b_name = document.getElementById("b_name").value;
    var b_address = document.getElementById("b_address").value;
    var b_city = document.getElementById("b_city").value;
    var o_name = document.getElementById("o_name").value;
    var customer = {
        id: b_id,
        bname: b_name,
        address: b_address,
        city: b_city,
        orszagnev: o_name
    };
    var hivas = "api/customers/bupdate/" + b_id;
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});

document.getElementById("delgomb").addEventListener("click", function () {
    var b_id = document.getElementById("b_id").value;
    var customer = {
        id: b_id
    };
    console.log(customer.id);
    var hivas = "api/customers/bdelete/" + customer.id;
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});