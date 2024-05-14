const tableBody = document.querySelector('#tableBody');
let savedTables = JSON.parse(localStorage.getItem('savedTables')) || [];

const addSubjects = () => {
    const tableRow = document.createElement('tr');

    if (document.querySelector('#addSubject').value.length > 0 && 
        document.querySelector('#addPriority').value.length > 0 && 
        document.querySelector('#addDueDate').value.length > 0) {
        tableBody.appendChild(tableRow)
        
        const subjectCell = document.createElement('td');
        subjectCell.textContent = document.querySelector('#addSubject').value;

        const priorityCell = document.createElement('td');
        priorityCell.textContent = document.querySelector('#addPriority').value;

        const dueDateCell = document.createElement('td');
        dueDateCell.textContent = document.querySelector('#addDueDate').value;

        const statusCell = document.createElement('td');
        statusCell.classList.add('tableStatus')
        statusCell.textContent = 'Incomplete';

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            tableBody.removeChild(tableRow);
            savedTables = savedTables.filter(entry => entry.subject !== subjectCell.textContent);
            localStorage.setItem('savedTables', JSON.stringify(savedTables));
        });

        const currStatus = document.createElement('td');
        const newCheck = document.createElement('input');
        newCheck.type = 'checkbox';
        newCheck.setAttribute('id', 'compCheckbox');

        newCheck.addEventListener('change', () => {
            if (newCheck.checked){
                statusCell.textContent = 'Complete';
                subjectCell.classList.add('subjComplete');
                localStorage.setItem('savedTables', JSON.stringify(savedTables));
            } else {
                statusCell.textContent = 'Incomplete';
                subjectCell.classList.remove('subjComplete');
            }
        })
        currStatus.appendChild(newCheck);

        tableRow.appendChild(subjectCell);
        tableRow.appendChild(priorityCell);
        tableRow.appendChild(dueDateCell);
        tableRow.appendChild(statusCell);
        tableRow.appendChild(currStatus);
        tableRow.appendChild(removeCell);

        const newTable = {
            subject: subjectCell.textContent,
            priority: priorityCell.textContent,
            dueDate: dueDateCell.textContent,
            status: 'Incomplete',
            checkbox: currStatus
        }
        if(savedTables.length > 0){
            savedTables.push(newTable);
        } else {
            savedTables = [newTable]
        };

        localStorage.setItem('savedTables', JSON.stringify(savedTables));
    }
    console.log(JSON.parse(localStorage.getItem('savedTables')))
};

export default addSubjects;