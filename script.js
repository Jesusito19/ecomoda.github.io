document.addEventListener('DOMContentLoaded', function() {
    // 1. Elementos
    const navLinks = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('.section');
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');

    // 2. Función para cambiar sección
    function switchSection(sectionId) {
        // Ocultar todas
        sections.forEach(sec => sec.classList.remove('active'));
        
        // Mostrar la elegida
        const target = document.getElementById(sectionId);
        if(target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Actualizar menú activo
        navLinks.forEach(link => {
            if(link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Cerrar menú móvil si está abierto
        if(mainMenu.classList.contains('active')) {
            mainMenu.classList.remove('active');
        }
    }

    // 3. Event Listeners para clicks en menú
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            switchSection(targetId);
        });
    });

    // 4. Menú Hamburguesa (Móvil)
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
        });
    }

    // 5. Iniciar en Home
    switchSection('home');
});
