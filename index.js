const body = document.getElementsByTagName("body")[0]

//fuction to set background color

function setColor(name){
    body.style.backgroundColor = name;
}



//function for setting random color
function setRandom(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red},${blue},${green})`

    body.style.backgroundColor = color;
}

