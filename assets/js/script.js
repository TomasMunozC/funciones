/* function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); */

    /* function pintar(elementId) {
        elem = document.querySelector('#' + elementId);
        elem.style.backgroundColor = 'blue'
    } */

    function pintar(elementId, color = 'green') {
        elem = document.querySelector('#' + elementId);
        elem.style.backgroundColor = color
    }