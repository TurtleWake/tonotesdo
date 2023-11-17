document.addEventListener('DOMContentLoaded', function () {

    const sidebar = document.querySelector('.sidebar');

    const sidebarButton = document.querySelector('.sidebarNav');

    sidebarButton.addEventListener('click', function () {
        console.log('click')
        sidebar.classList.toggle('hidden');
    });
});