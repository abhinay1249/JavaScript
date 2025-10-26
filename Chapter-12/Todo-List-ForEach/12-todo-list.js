const todolist = JSON.parse(localStorage.getItem('todolist')) ||[];

rendertodoList();

function rendertodoList(){
    let todoHtml ='';

    todolist.forEach((todoObject,index)=>{
        const{name,date} = todoObject;

        const htmlValues = `
            <div> ${name}</div>
            <div> ${date} </div>
                <button 
                    class="css-delete js-delete">Delete
                </button>
        `;
        todoHtml+=htmlValues;
    })
    document.querySelector(".js-div-tag").innerHTML=todoHtml;

    document.querySelectorAll('.js-delete').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            todolist.splice(index,1)
            rendertodoList();
            localStorage.setItem('todolist',JSON.stringify(todolist));
        })
    });
    
   // console.log(todoHtml);
}

document.querySelector('.js-add').addEventListener('click',() => {
    addTodoList();
});

function addTodoList(){
    const input_value = document.querySelector(".js-input-value");
    const text =input_value.value;

    const input_date = document.querySelector(".js-date");

    const date = input_date.value;

    todolist.push({
        name:text,
        date
    });
    //console.log(todolist);
    input_value.value='';
    rendertodoList();

    localStorage.setItem('todolist',JSON.stringify(todolist));
}


function keys(){
    if(event.key === 'Enter') addTodoList();
}