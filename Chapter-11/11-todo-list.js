const todolist = [];

rendertodoList();

function rendertodoList(){
    let todoHtml ='';

    for(let i = 0; i < todolist.length;i++){
        const values = todolist[i];
        const htmlValues = `
            <p> 
                ${values} 
                <button     
                    onclick="todolist.splice(${i},1)
                    rendertodoList();">Delete
                </button>
            </p>
        `;
        todoHtml+=htmlValues;
    }
    document.querySelector(".js-div-tag").innerHTML=todoHtml;
   // console.log(todoHtml);
}

function addTodoList(){
    const input_value = document.querySelector(".js-input-value");
    const text =input_value.value;

    todolist.push(text);
    //console.log(todolist);
    input_value.value='';
    rendertodoList();
}


function keys(){
    if(event.key === 'Enter') addTodoList();
}