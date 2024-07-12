// Función para validar el formulario de información de pasaporte
function validateForm() {
    const fields = [
        'apellido', 'nombre', 'ciudadNacimiento', 'numeroPasaporte'
    ];
    const selects = [
        'paisNacimiento', 'nacionalidad', 'paisEmision'
    ];
    const dateFields = [
        ['diaNacimiento', 'mesNacimiento', 'anioNacimiento'],
        ['diaEmision', 'mesEmision', 'anioEmision'],
        ['diaVencimiento', 'mesVencimiento', 'anioVencimiento']
    ];

    // Validar campos de texto
    for (let field of fields) {
        if (document.getElementById(field).value.trim() === "") {
            alert(`Por favor, rellene el campo ${field}`);
            return false;
        }
    }

    // Validar selects
    for (let select of selects) {
        if (document.getElementById(select).value === "") {
            alert(`Por favor, seleccione un valor para ${select}`);
            return false;
        }
    }

    // Validar campos de fecha
    for (let dateField of dateFields) {
        let [day, month, year] = dateField;
        if (
            document.getElementById(day).value === "" ||
            document.getElementById(month).value === "" ||
            document.getElementById(year).value === ""
        ) {
            alert(`Por favor, complete todos los campos de la fecha`);
            return false;
        }
        // Aquí puedes agregar más validaciones para las fechas si lo deseas
    }

    return true;
}

// Función para cambiar el tema de la página
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Función para animar elementos cuando entran en el viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('fade-in');
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', (event) => {
    // Agregar la clase 'animate-on-scroll' a los elementos que queremos animar
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('animate-on-scroll'));

    // Llamar a la función de animación cuando se hace scroll
    window.addEventListener('scroll', animateOnScroll);

    // Iniciar la animación para los elementos visibles al cargar la página
    animateOnScroll();

    // Agregar evento de clic al botón de cambio de tema si existe
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

function initProductCarousel() {
    const carousel = document.querySelector('#productCarousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            wrap: true
        });
    }
}

// Llamar a la función de inicialización del carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initProductCarousel);