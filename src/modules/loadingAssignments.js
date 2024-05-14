const tableBody = document.querySelector('#tableBody');

const loadSubjects = () => {
    let savedTables = JSON.parse(localStorage.getItem('savedTables')) || [];
    if (savedTables.length > 0) {
        savedTables.forEach(savedTable => {
            const tableRow = document.createElement('tr');

            const subjectCell = document.createElement('td');
            subjectCell.textContent = savedTable.subject;

            const priorityCell = document.createElement('td');
            priorityCell.textContent = savedTable.priority;

            const dueDateCell = document.createElement('td');
            dueDateCell.textContent = savedTable.dueDate;

            const statusCell = document.createElement('td');
            statusCell.classList.add('tableStatus');
            statusCell.textContent = savedTable.status;

            const currStatus = document.createElement('td');
            const newCheck = document.createElement('input');
            newCheck.type = 'checkbox';
            newCheck.addEventListener('change', () => {
                savedTable.status = newCheck.checked ? 'Complete' : 'Incomplete';
                statusCell.textContent = savedTable.status;
                localStorage.setItem('savedTables', JSON.stringify(savedTables));
            });
            newCheck.checked = savedTable.status === 'Complete';

            if(statusCell.textContent === 'Complete'){
                subjectCell.classList.add('subjComplete');
            } else {
                subjectCell.classList.remove('subjComplete');
            };

            const removeCell = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                tableBody.removeChild(tableRow);
                savedTables = savedTables.filter(entry => entry.subject !== subjectCell.textContent);
                localStorage.setItem('savedTables', JSON.stringify(savedTables));
            });

            currStatus.appendChild(newCheck);

            tableRow.appendChild(subjectCell);
            tableRow.appendChild(priorityCell);
            tableRow.appendChild(dueDateCell);
            tableRow.appendChild(statusCell);
            tableRow.appendChild(currStatus);
            tableRow.appendChild(removeCell);

            tableBody.appendChild(tableRow);
        });
    } else {
        console.log('No more data to display');
    }
};

export default loadSubjects;