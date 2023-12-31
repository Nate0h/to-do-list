
import {createTask, modifyTask,} from "./index.js"
import {createProject} from "./projects.js"
const addProject = document.getElementById('add-project');
const projectForm = document.getElementById("project-form");
const cancel = document.getElementById('cancel');
const add = document.getElementById('add');


addProject.addEventListener("click", function(){
    projectForm.classList.remove("hidden");
  })
  
  
  cancel.addEventListener("click", function(){
    projectForm.reset();
    projectForm.classList.add("hidden");
  })
  
  add.addEventListener("click", function(){
    if(projectForm.elements[0].value){
    createProject();
    projectForm.reset();
    projectForm.classList.add("hidden");
    }
  });

export const dialog = document.getElementById("dialog-1");
export const dialog2 = document.getElementById("dialog-2");
export const dialog3 = document.getElementById("dialog-3");

//This can probably be removed and imported
const addTask = document.querySelector(".addTask");
const closeButton = document.querySelector("#dialog-1 button");
const closeButton2 = document.querySelector("#dialog-2 button");
const closeButton3 = document.querySelector("#dialog-3 button");
export const form = document.querySelector("#form-container-1");
export const form2 = document.querySelector("#form-container-2");

addTask.addEventListener("click", () => {
  dialog.showModal();
});


// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
  form.reset();
});

closeButton2.addEventListener("click", () => {
  dialog2.close();
  form.reset();
});

closeButton3.addEventListener("click", () => {
  dialog3.close();
});


form.addEventListener("submit", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  //if task already exists we call a function to modify targeted 
  createTask();
   // Have to send the select box value here.
  dialog.close();
  form.reset();
});

form2.addEventListener("submit", (event) => {
  event.preventDefault(); // We don't want to submit this fake form

  modifyTask();
   // Have to send the select box value here.
  dialog2.close();
  form2.reset();
});


export * from "./dom.js"