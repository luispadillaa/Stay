function showseccion(seccionId){
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
      seccion.classList.remove('active');
    });

const seccionActive = document.getElementById(seccionId);
seccionActive.classList.add('active');
}