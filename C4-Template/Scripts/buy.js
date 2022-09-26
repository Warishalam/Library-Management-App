let container = document.getElementById("container")

if(!localStorage.getItem("buy"))
{
     localStorage.setItem("buy",JSON.stringify([]))
}


function displaydata()
{
    let data = JSON.parse(localStorage.getItem("buy"))

    console.log(data)
    for(let i = 0 ; i < data.length;i++)
    {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        th.innerText = data[i].name
        th.setAttribute("class","th")
        let th2 = document.createElement("th")
        th2.innerText = data[i].author
        th2.setAttribute("class","th")
        let th3 = document.createElement("th")
        th3.innerText = data[i].desc
        th3.setAttribute("class","th")
        let th4 = document.createElement("th")
        th4.innerText = data[i].added
        th4.setAttribute("class","th")
        let th5 = document.createElement("th")
        th5.innerText = data[i].category
        th5.setAttribute("class","th")
        
        let th6 = document.createElement("th")
        th6.innerText = data[0].price
        th6.setAttribute("class","th")
        tr.append(th,th2,th3,th4,th5,th6)
        container.append(tr)
       
    }
}
displaydata()