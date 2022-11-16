let calctotal;
let select;
let n1 = "None";
let n2 = "None";
function cero(){
    if (n1 == "None") {
        n1 = 0;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 0;
        document.getElementById("texto").innerHTML = n2;
    }
}
function uno(){
    if (n1 == "None") {
        n1 = 1;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 1;
        document.getElementById("texto").innerHTML = n2;
    }
}
function dos(){
    if (n1 == "None") {
        n1 = 2;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 2;
        document.getElementById("texto").innerHTML = n2;
    }
}
function tres(){
    if (n1 == "None") {
        n1 = 3;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 3;
        document.getElementById("texto").innerHTML = n2;
    }
}
function cuatro(){
    if (n1 == "None") {
        n1 = 4;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 4;
        document.getElementById("texto").innerHTML = n2;
    }
}
function cinco(){
    if (n1 == "None") {
        n1 = 5;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 5;
        document.getElementById("texto").innerHTML = n2;
    }
}
function seis(){
    if (n1 == "None") {
        n1 = 6;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 6;
        document.getElementById("texto").innerHTML = n2;
    }
}
function siete(){
    if (n1 == "None") {
        n1 = 7;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 7;
        document.getElementById("texto").innerHTML = n2;
    }
}
function ocho(){
    if (n1 == "None") {
        n1 = 8;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 8;
        document.getElementById("texto").innerHTML = n2;
    }
}
function nueve(){
    if (n1 == "None") {
        n1 = 9;
        document.getElementById("texto").innerHTML = n1;
    } else {
        n2 = 9;
        document.getElementById("texto").innerHTML = n2;
    }
}
function borrar_todo(){
    document.getElementById("texto").innerHTML = " ";
    n1 = "None"
    n2 = "None"
}
function CE(){
    if (n2 == "None"){
        n1 = "None";
    } else if (n2 !== "None"){
        n2 = "None";
    }
}
function DELETE(){
    document.getElementById("texto").innerHTML = " ";
    if (n2 == "None"){
        n1 = "None";
    } else if (n2 !== "None"){
        n2 = "None";
    }
}
function suma(){
    select = "sumar";
}
function resta(){
    select = "restar";
}
function multiplica(){
    select = "multiplicar";
}
function divide(){
    select = "dividir";
}
function igual(){
    parseInt(calctotal);
    if (select == "sumar"){
        calctotal = n1 + n2;
        document.getElementById("texto").innerHTML = calctotal;
    } else if (select == "restar") {
        calctotal = n1 - n2;
        document.getElementById("texto").innerHTML = calctotal;
    } else if (select == "multiplicar") {
        calctotal = n1 * n2;
        document.getElementById("texto").innerHTML = calctotal;
    } else if (select == "dividir") {
        calctotal = n1 / n2;
        document.getElementById("texto").innerHTML = calctotal;
    }
}

/* FALTA EL "." */