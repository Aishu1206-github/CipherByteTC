const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){        //when iput box is empty then display this msg
        alert("You must write something");
    }
    else{                   //When we write sompwthing then else part is executed     
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);     //cross sign
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){    //if we click on list then list is checked
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){  //if we click on span then remove the task
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//show the data whenever we will open the website again
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();