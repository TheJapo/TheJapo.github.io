// Lógica JavaScript para las migas de pan
document.addEventListener('DOMContentLoaded', function () {
    const breadcrumbLinks = document.querySelectorAll('.breadcrumbs a');
    
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Desplázate hacia la sección correspondiente
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
