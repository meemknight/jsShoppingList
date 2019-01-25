
let shop = document.getElementById("shop");
let list = document.getElementById("lista");
let fin = document.getElementById("fin");

shop.addEventListener("keyup", function(event) 
{
    event.preventDefault();
    if (event.keyCode === 13)
    {
      addElement();
    }
});


function addElement()
{
    let temp = document.createElement("li");
    temp.innerHTML ="<e>" + shop.value + "</e> <button onclick = 'edit(this.parentElement.firstElementChild)'>Edit</button>  <button onclick = 'removeElement(this.parentElement)'>Delete</button>  <button onclick = 'submit(this.parentElement)'>Submit</button>"
    //temp.innerText = shop.value;
    shop.value = "";
    list.appendChild(temp);
}


function removeElement(element)
{
    element.parentElement.removeChild(element);
}

function doneEdit(element)
{
    let text = element.firstElementChild.value;
    element.innerHTML = text;
}

function edit(element)
{
    let text = element.innerText || element.firstElementChild.value;
    element.innerHTML = "<input type='text', class='mb-4'>";
    element.firstElementChild.value = text;
    element.addEventListener("keyup", function(event) 
    {
        event.preventDefault();
        if (event.keyCode === 13)
        {
        doneEdit(element);
        }
    });
}

function submit(element)
{
    let temp = document.createElement("li");
    temp.innerHTML = element.firstElementChild.innerText || element.firstElementChild.firstElementChild.value;
    fin.appendChild(temp);
    removeElement(element);
    sortElements();
}

function sort(a, b) {
    return a.innerHTML.toLowerCase().localeCompare(b.innerHTML.toLowerCase());
}

function sortElements()
{

    for(let x = 0; x < fin.childElementCount; x++)
    {
        for(let i = 1; i < fin.childElementCount ; i++)
        {
            let a = fin.querySelector("li:nth-child("+i+")");
            let b = fin.querySelector("li:nth-child("+(i+1)+")");

            if(sort(a, b) > 0)
            {
                let aa = a.innerText;
                let bb = b.innerText;

                fin.querySelector("li:nth-child("+i+")").innerText = bb;
                fin.querySelector("li:nth-child("+(i+1)+")").innerText = aa;
            }
        }
    }
        

}