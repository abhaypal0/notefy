document.addEventListener('DOMContentLoaded', function() {
    const userCheckbox = document.getElementById('user');
    const sidebarMenu = document.querySelector('.sidebar_menu');
    const closeButton = document.querySelector('.close-btn');

    userCheckbox.addEventListener('change', function() {
        if (this.checked) {
            sidebarMenu.style.right = '0';
        } else {
            sidebarMenu.style.right = '-300px';
        }
    });

    closeButton.addEventListener('click', function() {
        sidebarMenu.style.right = '-300px';
        userCheckbox.checked = false;
    });
});
