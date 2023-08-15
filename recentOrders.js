var myArray = [
    {
        "id": 1,
        "name": "Alex",
        "price": "$200",
        "payment": "Paid",
        "status": "Delivered"
    },
    {
        "id": 1,
        "name": "Monica",
        "price": "$180",
        "payment": "Pending",
        "status": "Return"
    },
    {
        "id": 1,
        "name": "Alexandar",
        "price": "$240",
        "payment": "Delivered",
        "status": "Pending"
    },
    {
        "id": 1,
        "name": "Tyler",
        "price": "$110",
        "payment": "Paid",
        "status": "Delivered"
    },
    {
        "id": 1,
        "name": "Nicole",
        "price": "$85",
        "payment": "Paid",
        "status": "In Progress"
    },
    {
        "id": 1,
        "name": "Tim",
        "price": "$135",
        "payment": "Paid",
        "status": "Delivered"
    },
    {
        "id": 1,
        "name": "Steven",
        "price": "$145",
        "payment": "Pending",
        "status": "Return"
    },
    {
        "id": 1,
        "name": "Tyler",
        "price": "$50",
        "payment": "Pending",
        "status": "Pending"
    },
    {
        "id": 1,
        "name": "Annie",
        "price": "$155",
        "payment": "Paid",
        "status": "Pendng"
    },
    {
        "id": 1,
        "name": "Kartik",
        "price": "$90",
        "payment": "Paid",
        "status": "Delivered"
    },
    {
        "id": 1,
        "name": "Steffano",
        "price": "$178",
        "payment": "Pending",
        "status": "In Progress"
    }
]

buildTable(myArray)

function buildTable(data){
    var table = document.getElementById('data-output')

    for(var i = 0; i < data.length; i++){
        var row = `
            <tr>
                <td>${data[i].name}</td>
                <td>${data[i].price}</td>
                <td>${data[i].payment}</td>
                <td>${data[i].status}</td>
            </tr>`
        table.innerHTML += row
    }
}

//fetch("products.json")
//.then(function(response){
//    return response.json();
//})
//
//.then(function(products){
//    let placeholder = document.querySelector("#data-output");
//    let out = "";
//    for(let product of products){
//        out =+ `
//            <tr>
//                <td>${product.name}</td>
//                <td>${product.price}</td>
//                <td>${product.payment}</td>
//                <td>${product.status}</td>
//            </tr>
//        `;
//    }
//
//    placeholder.innerHTML = out;
//})