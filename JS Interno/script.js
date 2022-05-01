// Crea un nuevo párrafo y lo agrega al final del cuerpo HTML
function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'Clickeaste en el botón!';
        document.body.appendChild(para);
    }

    /*
        1. Obtiene referencias de todos los botones de la página en un formato de arreglo.
        2. Recorre todos los botones y agrega un detector de eventos 'click' a cada uno.

        Cuando se presione cualquier botón, se ejecutará la función createParagraph()
    */

    const botones = document.querySelectorAll('button');

    for(let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', createParagraph)
    }
