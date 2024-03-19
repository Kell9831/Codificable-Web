document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.header__menu-icon');
    const menuContent = document.querySelector('.header__menu-content');
    const menuIcon = menuButton.querySelector('svg');
    const openIconPath = '<path d="M12 4L4 12M4 4L12 12" stroke="#171717" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>';
    const closedIconPath = '<path d="M2.66663 8H13.3333M2.66663 4H13.3333M2.66663 12H13.3333" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>';

    let isOpen = false;

    // Función para cambiar el ícono al abrir o cerrar el menú
    function toggleIcon() {
        if (isOpen) {
            menuIcon.innerHTML = openIconPath;
        } else {
            menuIcon.innerHTML = closedIconPath;
        }
    }

    menuButton.addEventListener('click', function () {
        isOpen = !isOpen;
        if (isOpen) {
            menuContent.style.display = 'flex';
        } else {
            menuContent.style.display = 'none';
        }
        toggleIcon();
    });

    // Cerrar el menú al hacer clic en cualquier parte de la página
    document.addEventListener('click', function (event) {
        if (isOpen && !menuButton.contains(event.target) && !menuContent.contains(event.target)) {
            isOpen = false;
            menuContent.style.display = 'none';
            toggleIcon();
        }
    });
});
