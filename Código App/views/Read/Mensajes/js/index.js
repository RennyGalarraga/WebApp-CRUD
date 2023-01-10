document.addEventListener("DOMContentLoaded", function () {

    const botonAtras = document.getElementById('back');
        botonAtras.addEventListener('click', function() {
            history.back(-1);
        });
    
    });