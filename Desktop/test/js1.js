var form = document.getElementById("addform")
var idtems = document.getElementById("items")
form.addEventListener('submit', addevent);
idtems.addEventListener('click', removeitems)
var li;
function addevent(e){
    e.preventDefault();  //to prevent submission of empty form
    var newItem = document.getElementById("item").value
    
    li = document.createElement('li')

    li.className = 'list-group-flush border-bottom border-dark ';
    
    var addbutton = document.createElement('button'); 
    var delbutton = document.createElement('button');
    var day = new Date();
    var date = day.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    var date__ = document.createElement("date_");
    date__ = document.createTextNode(date);
    li.appendChild(date__);
    addbutton.className = 'btn btn-success btn-sm btn-md float-right add mr-2 mb-2';
    delbutton.className = 'btn btn-danger btn-sm btn-md float-right delete mb-2';
    var texting = document.createTextNode(newItem);
    addbutton.appendChild(document.createTextNode('+'));
    delbutton.appendChild(document.createTextNode('X'));
    addbutton.addEventListener('click', addbox);
    // var oddli = document.querySelectorAll('li')
    // if(parseInt(oddli.length)%2 == 0){
    //     li.style.background = 'gainsboro'
    // }

    li.appendChild(texting);
    li.appendChild(date__)
    li.appendChild(delbutton);
    li.appendChild(addbutton);
    idtems.appendChild(li);
    
}

function removeitems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete the note?'))
        {
            var removeItem = e.target.parentElement;
            idtems.removeChild(removeItem)
        }
        
    }
}

function addbox(e){
    if(e.target.classList.contains('add')){
        
            var li = document.getElementsByClassName("list-group-flush")
            console.log(li[0])    
        }
}
