document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const currentDatetime = document.getElementById('current-datetime');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            deleteTask(e.target.parentElement);
        } else if (e.target.tagName === 'LI') {
            toggleComplete(e.target);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';

        li.appendChild(document.createTextNode(task));
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function toggleComplete(taskItem) {
        taskItem.classList.toggle('completed');
    }

    function updateDateTime() {
        currentDatetime.textContent = new Date().toLocaleString();
    }

    // Actualizar la fecha y hora cada segundo
    setInterval(updateDateTime, 1000);
    updateDateTime();  // Llamar inmediatamente para mostrar la fecha y hora al cargar la página

    // Widget de Calendario
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es' // Configurar idioma español
    });
    calendar.render();

});