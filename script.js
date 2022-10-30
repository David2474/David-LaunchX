const btn = document.querySelector("[btn-form]");
let inp = document.querySelector('input');

const createTask = () =>{
    e.preventDefault();
    console.log(inp.value)
    inp.value = "";
}

btn.addEventListener("click", createTask())
