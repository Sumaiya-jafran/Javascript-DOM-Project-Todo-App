// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search throygh the todo-list


let toDoListUl = document.querySelector(".todo-list");
let toDOLi = document.querySelector(".todo");
let form = document.querySelector("form");
let formInput = document.querySelector(".todo-input");
let checkBtn = document.querySelector('.check');
let deleteBtn = document.querySelector('.trash')

//event-listener
form.addEventListener("submit", function (event){
    event.preventDefault();
    let userInput = formInput.value;
    console.log("submit btn click");
//div create
    let todoDiv = document.createElement('div');
    todoDiv.className = "todo";
    let todoLi = document.createElement('li');
    todoLi.className = "todo-item";
    todoLi.innerText = userInput;
    todoDiv.append(todoLi);
    let checkBtn = document.createElement('button');
    checkBtn.className = 'check';
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.append(checkBtn);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'trash';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.append(deleteBtn);

    // append the div into the parent list

    toDoListUl.append(todoDiv);
    formInput.value = "";

});

// checkBtn.addEventListener('click', function(){
//     let todoDiv = checkBtn.previousElementSibling;
//    todoDiv.classList.add ("completed");
// });
// deleteBtn.addEventListener('click', function(){
//     let todoDiv = deleteBtn.parentNode;
//     todoDiv.classList.add('drop-effect');
//     todoDiv.addEventListener("transitionend", function(){
//         todoDiv.remove();
//     });
//     // setTimeout(function(){
//     //     todoDiv.remove();
//     // },1000); 
// });

toDoListUl.addEventListener('click',function(event){
if(event.target.className === 'check'){
    let todoDiv = event.target.previousElementSibling;
    todoDiv.classList.add ("completed");
}
else if (event.target.className === 'trash'){
    let todoDiv = event.target.parentNode;
        todoDiv.classList.add('drop-effect');
        todoDiv.addEventListener("transitionend", function(){
        todoDiv.remove();
    });
}

})