let elem1 = document.getElementById("div1")
let elem2 = document.getElementById("div2")
let elem3 = document.getElementById("div3")
let elem4 = document.getElementById("div4")

elem1.addEventListener("click", function () {
    elem1.style.backgroundColor = 'black'
});

elem2.addEventListener("click", function () {
    elem2.style.backgroundColor = 'black'
});

elem3.addEventListener("click", function () {
    elem3.style.backgroundColor = 'black'
});

elem4.addEventListener("click", function () {
    elem4.style.backgroundColor = 'black'
});

const nuevos = document.getElementById("key");

const crearDiv = (color) => {
    const agregar = document.querySelector('body');

    const añadir = document.createElement('div');
    añadir.style.width = '200px';
    añadir.style.height = '200px';
    añadir.style.backgroundColor = color;
    agregar.appendChild(añadir);
};


document.addEventListener('keydown', function(tecla){
    if(tecla.key==='a'){
        nuevos.style.backgroundColor = 'pink'
    }else if(tecla.key === 's'){
        nuevos.style.backgroundColor = 'orange'
    }else if(tecla.key === 'd'){
        nuevos.style.backgroundColor = 'cyan'
    }else if(tecla.key === 'q'){
        crearDiv("purple")
    }else if(tecla.key === 'w'){
        crearDiv("gray")
    }else if(tecla.key === 'e'){
        crearDiv("brown")
    }
})