document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.querySelector(".calendar");
    const calendarGrid = document.getElementById("calendar-grid");
    const prevMonthbtn = document.getElementById("prev-month");
    const nextMonthbtn = document.getElementById("next-month");
    const currentMonthYear = document.getElementById("current-month-year");
    const currentDate = new Date();
    let month = currentDate.getMonth();
    const originalDate = new Date();
    const events = {};
    let activeId = '15-10';

    function generateCalendar(year, month) {
        const prevLastDate = new Date(year, month, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const lastDayIndex = new Date(year, month + 1, 0).getDay();
        const LastDate = new Date(year, month + 1, 0).getDate();

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        currentMonthYear.innerText = `${months[month]} ${year}`;

        calendarGrid.innerHTML = '';

        for (let i = firstDayIndex; i > 0; i--) {
            calendarGrid.insertAdjacentHTML('beforeend', `<div class="prev-date-cell date-cell empty-cell">${prevLastDate - i + 1}</div>`);
        }

        for (let i = 1; i <= LastDate; i++) {
            let today = (i === originalDate.getDate() && originalDate.getMonth() === currentDate.getMonth()) ? 'today' : '';
            calendarGrid.insertAdjacentHTML('beforeend', `<div class="date-cell ${today} current-date-cell" id = "${i}-${month + 1}">${i}</div>`);
        }

        for (let i = 1; i < 7 - lastDayIndex; i++) {
            calendarGrid.innerHTML += `<div class= "next-date-cell empty-cell date-cell"> ${i}</div>`;
        }
        console.log('Calendar Generated');
        postGenerateCalendar();

    }

    function updateCalendar() {
        const year = currentDate.getFullYear();
        month = currentDate.getMonth();
        generateCalendar(year, month);
    }

    updateCalendar();

    function prevMonthupdates() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    }

    function nextMonthupdates() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    }

    prevMonthbtn.addEventListener('click', prevMonthupdates);
    nextMonthbtn.addEventListener('click', nextMonthupdates);

    function activateCloseBtn(e) {
        const elementId = e.target.id;
        const popup = document.querySelector('.popup');
        const element = document.getElementById(`${elementId}`);
        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('translateY');
            calendar.classList.remove('disabled');
        });
    }

    function postGenerateCalendar() {

        const prevDateCell = document.querySelectorAll('.prev-date-cell');
        prevDateCell.forEach(element => {
            element.addEventListener('click', prevMonthupdates);
        });

        const nextDateCell = document.querySelectorAll('.next-date-cell');
        nextDateCell.forEach(element => {
            element.addEventListener('click', nextMonthupdates);
        });

        const popup = document.querySelector('.popup');
        const addEvent = document.querySelectorAll('.current-date-cell');
        addEvent.forEach(element => {
            element.addEventListener('click', (e) => {
                activeId = e.target.id;
                const element = document.getElementById(`${activeId}`);
                if (element.classList.contains('labeled')) {
                }
                else{
                popup.classList.add('translateY');
                calendar.classList.add('disabled');
                activateCloseBtn(e);
                formActive();
                }
            });

        });

        const labelingElement = document.getElementById('15-10');
        // labelingElement.innerHTML += '<div class="labeled"></div>';
        labelingElement.classList.add('labeled');
        // console.log();

    }

    function formActive() {
        const form = document.querySelector('.form');
        form.addEventListener('click', (e) => {
            e.preventDefault();
        });
        const submitForm = document.querySelector('#formSubmitBtn');
        submitForm.addEventListener('click', formSubmitted);
    }

    function formSubmitted() {
        let event = {};
        const eventN = document.getElementById('eventsN').value;
        const eventT = document.getElementById('eventsT').value;
        const eventD = document.getElementById('eventsD').value;
        event = { 'Event Name': eventN, 'Event Time': eventT, 'Event Details': eventD, 'ID': activeId };

        updateEvents(event);
        const form = document.querySelector('.form');
        form.reset();
        document.querySelector('.close').click();

    }

    function updateEvents(event) {
        events[activeId] = event;
        // console.log(events);
    }


    function addLabel() {

    }



});