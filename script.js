const form = document.querySelector("#taskForm");
const input = document.querySelector("#taskInput");
const tasks = document.querySelector(".tasks");

const header = document.createElement("h1");
header.textContent = "Tasks";
form.appendChild(header);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = input.value;
  console.log(userData);

  if (!userData) {
    alert("Give some task before submit");
    return;
  }

  const task = document.createElement("div");
  tasks.appendChild(task);

  const content = document.createElement("div");
  content.classList.add("content-container");

  task.appendChild(content);

  //check
  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("checkbox")
  content.appendChild(check);

 

  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.classList.add("form-control");
  taskInput.classList.add("w-50");
  // taskInput.classList.add("checkedElement")

  taskInput.setAttribute("readonly", "readonly");
  taskInput.value = userData;
  content.appendChild(taskInput);

  const editIcon = document.createElement("span");
  editIcon.innerHTML = '<i class="fas fa-edit"></i>';
  editIcon.classList.add("edit-icon");
  content.appendChild(editIcon);

  const delIcon = document.createElement("span");
  delIcon.innerHTML = '<i class="fas fa-trash">';
  delIcon.classList.add("del-icon");
  content.appendChild(delIcon);

  input.value = "";

  //edit
  editIcon.addEventListener("click", () => {
    if (editIcon.innerHTML == '<i class="fas fa-edit"></i>') {
      taskInput.removeAttribute("readonly", "readonly");
      editIcon.innerHTML = '<i class="fas fa-paste"></i>';
      taskInput.focus();
    } else {
      taskInput.setAttribute("readonly", "readonly");
      editIcon.innerHTML = '<i class="fas fa-edit"></i>';
    }
  });

  //delete

  delIcon.addEventListener("click", () => {
    tasks.removeChild(task);
  });

  //check functionality


  // check.addEventListener('click',()=>{
  //     check.classList.toggle('check1')
  // })

  // if(check.checked ==true){
  //     taskInput.classList.add("checkedElement");
  //     console.log(check)
  // }

  check.addEventListener("change", function(e) {
    if (this.checked) {
        taskInput.classList.add("checkedElement");
    } else {
        taskInput.classList.remove("checkedElement");
    }
});
  
});
