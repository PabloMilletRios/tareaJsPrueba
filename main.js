//div conatiner // div search //div.form.butotn btn-add // 
//div li-container // div empty // div task-count 


const seleccionarDivs = document.querySelectorAll("div");

seleccionarDivs[0].className = "container";
seleccionarDivs[1].className = "search";
seleccionarDivs[2].className = "li-container";
seleccionarDivs[3].className = "empty";
seleccionarDivs[4].className = "task-count";

const button  = document.querySelector("button");
button.className = "btn-add";
let input = document.querySelector("input");
const ul = document.querySelector("ul");



let contadorTask = 0;


button.addEventListener('click',(e)=> {
  e.preventDefault();
  addTarea();
})

function addTarea(){
  let text = input.value;
  console.log(text)
  if (text === "") {
    alert("Debes agregar una tarea");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const span  = document.createElement("span");
    span.textContent = text;
    console.log(span.textContent);
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X";
    deleteButton.className = "btn-delete";


    p.append(span);
    li.append(p,deleteButton);
    ul.appendChild(li);

    contadorTask++; 

    input.value = "";

    deleteLi();
    deletePendingTask();
    incrementearContador();
    tachar();
  }
}

function deleteLi (){
 const deleteButtons = document.querySelectorAll(".btn-delete"); 
 deleteButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const liCercano = e.target.closest('li'); 
      if (liCercano) {
        liCercano.remove(); 
        contadorTask--;
      }
      incrementearContador();
      deletePendingTask();
})
});
}

function tachar() {
  const spanTachar = document.querySelectorAll("span");
  spanTachar.forEach(span => {
    span.addEventListener('click', (e) => {
      if (span.style.textDecoration === 'line-through') {
        span.style.textDecoration = 'none'; 
      } else {
        span.style.textDecoration = 'line-through';
      }
    });
  });
}



function deletePendingTask(){
  const pDivDelete = seleccionarDivs[3].getElementsByTagName("p")
  console.log(pDivDelete[0].textContent);
  if(contadorTask > 0){
    console.log(contadorTask);
    pDivDelete[0].textContent = " ";
  }
  else{
    pDivDelete[0].textContent = "You have no pending tasks";
  }
}

function incrementearContador(){
  const pDivContador = seleccionarDivs[4].getElementsByTagName("span");
  console.log(pDivContador[1].textContent);
  pDivContador[1].textContent = contadorTask;
}

