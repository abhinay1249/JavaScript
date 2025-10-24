const todolist = [];

function addTodoList(){
    const input_value = document.querySelector(".js-input-value");
    const text =input_value.value;

    todolist.push(text);
    console.log(todolist);
    input_value.value='';

    document.querySelector(".js-print-todo").innerHTML=`${todolist}`;
}


function keys(){
    if(event.key === 'Enter') addTodoList();
}