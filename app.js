document.addEventListener('DOMContentLoaded', function () {

    const sidebar = document.querySelector('.sidebar');

    const sidebarButton = document.querySelector('.sidebarNav');

    sidebarButton.addEventListener('click', function () {
        console.log('click')
        sidebar.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code

    // Get the elements using a shared class
    const addTaskIcons = document.querySelectorAll('.addTaskIcon');
    const todayDates = document.querySelectorAll('.todayDate');
    const dailyPlans = document.querySelectorAll('.dailyPlan');

    // Add a click event listener to all "Add a task!" icons
    addTaskIcons.forEach((addTaskIcon, index) => {
        addTaskIcon.addEventListener('click', () => {
            // Toggle the visibility of the dailyPlan section
            dailyPlans[index].style.display = (dailyPlans[index].style.display === 'none') ? 'block' : 'none';
        });
    });

    // Function to add a task (you can customize this function)
    function addTask() {
        const taskInput = document.getElementById('taskInput').value;
        // Add your logic to handle the new task
        console.log('New Task:', taskInput);

        // You can also hide the dailyPlan section after adding the task
        dailyPlans.forEach(plan => {
            plan.style.display = 'none';
        });
    }
});
