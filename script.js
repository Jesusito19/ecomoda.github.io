document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENÚ MÓVIL ---
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');

    menuToggle.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
        
        // Cambiar ícono de hamburguesa a X
        const icon = menuToggle.querySelector('i');
        if (mainMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // --- 2. NAVEGACIÓN SPA (Single Page Application) ---
    // Seleccionamos todos los links que tengan el atributo data-section
    const navLinks = document.querySelectorAll('a[data-section]');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte o recargue

            // 1. Obtener el id de la sección destino
            const sectionId = link.getAttribute('data-section');
            
            // 2. Ocultar todas las secciones
            sections.forEach(sec => sec.classList.remove('active'));

            // 3. Mostrar la sección seleccionada
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Scroll suave al inicio de la sección
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // 4. Actualizar clase 'active' en el menú (solo si está en el menú principal)
            // Removemos active de todos los links del menú principal
            const menuLinks = document.querySelectorAll('.main-menu a');
            menuLinks.forEach(ml => ml.classList.remove('active'));
            
            // Si el link clickeado está dentro del menú principal, activarlo
            if (link.closest('.main-menu')) {
                link.classList.add('active');
            }

            // 5. Cerrar menú móvil si está abierto
            if (mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});
