const todoBlock = document.getElementById("to-do-block");
let idCount = 1;

const createTodo = () => {
    let todoProirityInput = document.getElementById("todo-priority-input");
    let todoInput = document.getElementById("todo-input");
    //let todoDeadline = document.getElementById("todo-deadline");
    const todoDeadline = new Date(document.getElementById("todo-deadline").value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });

    createTodoDiv(todoProirityInput,todoInput,todoDeadline);
    

}

const createTodoDiv = (todoProirityInput,todoInput,todoDeadline) => {
    let cardDiv = document.createElement("div");
    let cardHeader =  document.createElement("div");
    let span = document.createElement("span");
    let datespan = document.createElement("span");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let delBtn = document.createElement("a");

    

   // adding css class usig javascripts;

   
    cardDiv.classList = "card to-do-card";
    cardHeader.classList = "card-header";
    datespan.classList = "date"
    cardBody.classList = "card-body"
    cardTitle.classList = "card-title";
    delBtn.classList = "btn btn-danger";

    cardDiv.id = "to-do-card-"+ idCount;
    idCount++;

    // adding text to card body
    span.innerText = todoProirityInput.value;
    cardTitle.innerText = todoInput.value;
    delBtn.innerText = 'Delete';
    datespan.innerText = todoDeadline;

    

    console.log(todoDeadline);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(delBtn);
    cardHeader.appendChild(span);
    cardHeader.appendChild(datespan);
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody);

    
    
    switch(span.innerText){
        case 'High':
            span.classList = "badge rounded-pill bg-danger"
            break;
        case 'Medium':
            span.classList = "badge rounded-pill bg-warning text-dark";
            break;
        case 'Low':
            span.classList = "badge rounded-pill bg-info text-dark";
            break;

    }
    
    cardDiv.draggable = "true";


    todoBlock.appendChild(cardDiv);
    cardDiv.addEventListener('dragstart', toDoDragStart)
    delBtn.addEventListener('click', () => {
        cardDiv.style.display = "none";
    })
    // cardDiv.addEventListener('ondragstart',() => {
    //     console.log("hi");
    // })
    // cardDiv.addEventListener('ondrag',() => {
    //     console.log("heelp");
    // })
    

}



{/* <div class="card to-do-card">
    <div class="card-header">
        <span class="badge rounded-pill bg-danger"></span>
        <span class "date "

    </div>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <a class="btn btn-danger">Delete</a>
    </div>
</div> */}
const date = new Date();
console.log(date);
