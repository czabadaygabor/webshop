var tableData = [];
var targetTable = document.querySelector("#vevok-tabla");
var dict = {};
getJson("js/dict.json", function (json) {
    dict = json;
});
var cid = location.href.split("=")[1];
vevok_lekerdez();


function vevok_lekerdez() {
    getJson("api/customers/" + cid, function (customers) {
        tableData = customers;
        fillTable(tableData);
    })
}

function fillTable(data) {
    // Fejléc generálása.
    var head = "";
    for (var k in data[0]) {
        head += "<th>" + (dict[k] || "-") + "</th>";
    }
    targetTable.querySelector("thead tr").innerHTML = head;
    var azonosito = 0;
    var content = "";
    for (var k in data) {
        var tr = "<tr>";
        for (var j in data[k]) {
            if (j != "c_active" && j != "c_news") {
                if (j == "c_id") {
                    tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + "' disabled ></td>";
                    azonosito = data[k][j];
                } else {
                    console.log(j);
                    tr += "<td><input type='text' value='" + data[k][j] + "' id='" + j + "' class='input_vevo'></td>";
                }
            } else {
                tr += "<td><input type='checkbox'";
                if (data[k][j] == 1) {
                    tr += " checked ";
                }
                tr += " id='" + j + "' class='input_vevo'></td>";
            }
        }
        //tr += "<td><input type='button' value='OK' id='updater_gomb' class=button_vevo></td>";
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


/*function updater() {
    var c_id = document.getElementById("c_id").value;
    var c_name = document.getElementById("c_name").value;
    var c_address = document.getElementById("c_address").value;
    var c_city = document.getElementById("c_city").lue;
    var o_nev = document.getElementById("o_nev").value;
    var c_contact = document.getElementById("c_contact").value;
    var c_active = document.getElementById("c_active").value;
    var c_news = document.getElementById("c_news").value;

    var customer = {
        cid: c_id,
        cname: c_name,
        address: c_address,
        city: c_city,
        orszagnev: o_nev,
        contact: c_contact,
        active: c_actve,
        news: c_news
    };
    postData('api/customers/update/' + customer[c_id], customer, function (response) {
        console.log(response);
    });


}*/

document.getElementById("insgomb").addEventListener("click", function () {
    var c_id = document.getElementById("c_id").value;
    var c_name = document.getElementById("c_name").value;
    var c_address = document.getElementById("c_address").value;
    var c_city = document.getElementById("c_city").value;
    var o_name = document.getElementById("o_name").value;
    var c_contact = document.getElementById("c_contact").value;
    if (document.getElementById("c_active").checked == true) {
        var c_active = 1;
    } else {
        var c_active = 0;
    }
    if (document.getElementById("c_news").checked == true) {
        var c_news = 1;
    } else {
        var c_news = 0;
    }

    var customer = {
        id: c_id,
        cname: c_name,
        address: c_address,
        city: c_city,
        orszagnev: o_name,
        contact: c_contact,
        active: c_active,
        news: c_news
    };
    console.log(customer.id);
    console.log(customer.cname);
    console.log(customer.address);
    console.log(customer.city);
    console.log(customer.orszagnev);
    console.log(customer.contact);
    console.log(customer.active);
    console.log(customer.news);
    var hivas = "api/customers/insert";
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});


document.getElementById("updgomb").addEventListener("click", function () {
    var c_id = document.getElementById("c_id").value;
    var c_name = document.getElementById("c_name").value;
    var c_address = document.getElementById("c_address").value;
    var c_city = document.getElementById("c_city").value;
    var o_name = document.getElementById("o_name").value;
    var c_contact = document.getElementById("c_contact").value;
    if (document.getElementById("c_active").checked == true) {
        var c_active = 1;
    } else {
        var c_active = 0;
    }
    if (document.getElementById("c_news").checked == true) {
        var c_news = 1;
    } else {
        var c_news = 0;
    }

    var customer = {
        id: c_id,
        cname: c_name,
        address: c_address,
        city: c_city,
        orszagnev: o_name,
        contact: c_contact,
        active: c_active,
        news: c_news
    };
    console.log(customer.id);
    console.log(customer.cname);
    console.log(customer.address);
    console.log(customer.city);
    console.log(customer.orszagnev);
    console.log(customer.contact);
    console.log(customer.active);
    console.log(customer.news);
    var hivas = "api/customers/update/" + c_id;
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});

document.getElementById("delgomb").addEventListener("click", function () {
    var c_id = document.getElementById("c_id").value;
    var customer = {
        id: c_id
    };
    console.log(customer.id);
    var hivas = "api/customers/delete/" + customer.id;
    console.log(hivas);
    postData(hivas, customer, function (response) {
        console.log(response);
    });


});