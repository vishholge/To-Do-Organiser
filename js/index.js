const todoBlock = document.getElementById("to-do-block");


const createTodo = () => {
    let todoProirityInput = document.getElementById("todo-priority-input");
    let todoInput = document.getElementById("todo-input");
    let todoDeadline = document.getElementById("todo-deadline");



    // creating to - do card 
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

    // adding text to card body
    span.innerText = todoProirityInput.value;
    cardTitle.innerText = todoInput.value;
    delBtn.innerText = 'Delete';
    datespan.innerText = todoDeadline.value.toLocaleDateString();
 
    console.log(new Date(datespan.innerText).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }));



    cardBody.appendChild(cardTitle);
    cardBody.appendChild(delBtn);
    cardHeader.appendChild(span);
    cardHeader.appendChild(datespan);
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody);

    todoBlock.appendChild(cardDiv);
    
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
