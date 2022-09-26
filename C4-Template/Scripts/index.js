let form = document.getElementById('form')

form.addEventListener('submit' , submit);
if(!localStorage.getItem("book-list"))
{
    localStorage.setItem("book-list",JSON.stringify([]))
}
function submit (event)
{
    event.preventDefault()
    let name = document.getElementById("name")
    let author = document.getElementById("author")
    let desc = document.getElementById("desc")
    let added = document.getElementById("added")
    let category = document.getElementById("category")
    let price = document.getElementById("price")
    
  let list = new data(name.value,author.value,desc.value,added.value,category.value,price.value)
  console.log(list) 
  if(localStorage.getItem("book-list"))
{
    let data = JSON.parse(localStorage.getItem("book-list"))
    data.push(list)
    localStorage.setItem("book-list",JSON.stringify(data))
    alert("added")
}
else
{
    localStorage.setItem("book-list",JSON.stringify([list]))
    alert("added")
}

}

function data(name,author,desc,added,category,price){
    this.name=name;
    this.author=author;
    this.desc = desc;
    this.added= added;
    this.category = category;
    this.price = price;

}