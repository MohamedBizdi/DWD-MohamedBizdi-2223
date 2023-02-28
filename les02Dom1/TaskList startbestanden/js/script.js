// Declarations
const tasks = document.querySelector('#frmTask');
const prioriteit = tasks.querySelector('#selPriority');
const deadline = tasks.querySelector('#datDeadline');
const lstTaak = document.querySelector('#tasks');
const taak = tasks.querySelector('#txtTask');

// output
tasks.addEventListener('submit', function (e) {
    e.preventDefault();
    if (prioriteit.value == 'low') {
        lstTaak.innerHTML += `<div class="task">
        <span class="priority material-icons green">assignment</span>
        <p class="tasktext">${taak.value} <span class="deadline">(deadline: ${deadline.value})</span>
        </p><span class="complete material-icons">more_horiz</span></div>`;
    }
    if (prioriteit.value == 'normal') {
        lstTaak.innerHTML += `<div class="task">
        <span class="priority material-icons orange">assignment</span>
        <p class="tasktext">${taak.value} <span class="deadline">(deadline: ${deadline.value})</span>
        </p><span class="complete material-icons">more_horiz</span></div>`;
    }
    if (prioriteit.value == 'high') {
        lstTaak.innerHTML += `<div class="task">
        <span class="priority material-icons red">assignment</span>
        <p class="tasktext">${taak.value} <span class="deadline">(deadline: ${deadline.value})</span>
        </p><span class="complete material-icons">more_horiz</span></div>`;
    }

    // verder dan dit kom ik niet voor het vinkje.
    // tasks.addEventListener('click', function (e) {
    // e.preventDefault();
    // if (e.target.classList.contains('task.complete')) {
    // e.target.innerHTML = 
    // });
});
