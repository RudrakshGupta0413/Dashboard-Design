var myFollowers = [
    {
        "id": 1,
        "app": "Facebook",
        "followers": "34,367"
    },
    {
        "id": 2,
        "app": "Instagram",
        "followers": "97,857"
    },
    {
        "id": 3,
        "app": "Youbute",
        "followers": "201,857"
    },
    {
        "id": 4,
        "app": "Threads",
        "followers": "21,113"
    },
    {
        "id": 5,
        "app": "Twitter",
        "followers": "25,885"
    },
    {
        "id": 6,
        "app": "Linkdin",
        "followers": "29,973"
    },
]


buildTable(myFollowers)

function buildTable(data){
    var table = document.getElementById('myFollowers-data')

    for(var i = 0; i < data.length; i++){
        var row = `
            <tr>
                <td>${data[i].app}</td>
                <td>${data[i].followers}</td>
            </tr>`
        table.innerHTML += row
    }
}