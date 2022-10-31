( ()=>{

const btn = document.querySelector("[btn-form]");
const inp = document.querySelector('input');

const createTask = (e) => {

    e.preventDefault();
    const valor = inp.value;
    const task = document.createElement("li");
    task.classList.add("card");
    const card = document.querySelector("[task-new]");
    const taskContent = document.createElement("div");
    taskContent.appendChild(checklist());
    const titelTask = document.createElement("span");
    titelTask.classList.add("task");
    titelTask.innerText = valor;
    taskContent.appendChild(titelTask);
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

  //task.innerHTML = content;//
    task.appendChild(taskContent)
    card.appendChild(task);

    task.appendChild(deletList())
    
    inp.value = "";
}

btn.addEventListener("click", createTask)

const checklist = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon")
    i.addEventListener("click", completeTask);

    return i;
}
const deletList = () => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click", deleteIcon);
    return i;
}

const completeTask = (event) =>{
    const elemento = event.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle("far");
    console.log(elemento)
}

const deleteIcon = (event) =>{
    const parent = event.target.parentElement;
    parent.remove();
}

})()