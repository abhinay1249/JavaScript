const todolist = JSON.parse(localStorage.getItem('todolist'))||[];

rendertodoList();

function rendertodoList(){
    let todoHtml ='';

    for(let i = 0; i < todolist.length;i++){
        const todoObject = todolist[i];
        // const name = todolist.name;
        // const date = todolist.name;

        // const {name} = todoObject;
        // const {date} = todoObject;

        const{name,date} = todoObject;

        const htmlValues = `
            <div> ${name}</div>
            <div> ${date} </div>
                <button     
                    onclick="todolist.splice(${i},1)
                    rendertodoList();
                    saveStorage();"
                    class="css-delete" >Delete
                </button>
        `;
        todoHtml+=htmlValues;
    }
    document.querySelector(".js-div-tag").innerHTML=todoHtml;
   console.log(todoHtml);
}

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

    saveStorage();
}

function saveStorage(){
    localStorage.setItem('todolist',JSON.stringify(todolist));
}
function keys(){
    if(event.key === 'Enter') addTodoList();
}