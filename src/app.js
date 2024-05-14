import addSubjects from "./modules/addingAssignments";
import loadSubjects from "./modules/loadingAssignments";

const addForm = document.querySelector('#addData');

addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addSubjects();
})

loadSubjects()