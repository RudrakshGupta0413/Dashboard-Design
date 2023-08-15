var myCustomers = [
    {
        "id": 1,
        "image": "images/Custr-1.jpeg",
        "name": "David",
        "place": "Italy",
        "Orders": "15"
    }
]




buildTable(myCustomers)

function buildTable(data){
    var table = document.getElementById('data-customers')

    for(var i = 0; i < data.length; i++){
        var row = `
            <tr>
                <td><img src='${data[i].image}'</td>
                <td>${data[i].name}</td>
                <td>${data[i].place}</td>
                <td>${data[i].Orders}</td>
            </tr>`
        table.innerHTML += row
    }
}