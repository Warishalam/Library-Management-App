let container = document.getElementById("container")
let total = document.getElementById("book-count")
let filteres = document.getElementById("filter")
if(!localStorage.getItem("book-list"))
{
     localStorage.setItem("book-list",JSON.stringify([]))
}


function displaydata(data)
{
  
    console.log(data)
    container.innerHTML = ""
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
        let buy = document.createElement('button')
        buy.innerText = "BUY"
        buy.setAttribute("class","buybutton")
        buy.onclick = function()
        {
            if(!localStorage.getItem("buy"))
            {
                localStorage.setItem("buy",JSON.stringify([data[i]]))
                alert("added")
            
            }
            else
            {
                let list = JSON.parse(localStorage.getItem("buy"))
                list.push(data[i])
                localStorage.setItem("buy",JSON.stringify(list)) 
                alert("added")

            }
        }
      
        let bookmark = document.createElement('button')
        bookmark.innerText = "Bookmark"
        bookmark.setAttribute("class","bookbutton")
        bookmark.onclick = function()
        {
            if(!localStorage.getItem("bookmark"))
            {
                localStorage.setItem("bookmark",JSON.stringify([data[i]]))
                alert("added")
            }
            else
            {
                let list = JSON.parse(localStorage.getItem("bookmark"))
                list.push(data[i])
                localStorage.setItem("bookmark",JSON.stringify(list)) 
                alert("added")

            }
        }
        let th6 = document.createElement("th")
        th6.innerText = data[0].price
        th6.setAttribute("class","th")
        tr.append(th,th2,th3,th4,th5,buy,bookmark,th6)
        container.append(tr)
       
    }
}

let data = JSON.parse(localStorage.getItem("book-list"))
total.innerText = data.length
displaydata(data)

function filters()
{
    let data = JSON.parse(localStorage.getItem("book-list"))
    data = data.filter((ele)=>{
        return ele.category == filteres.value
    })
   total.innerText = data.length
   displaydata(data)

}