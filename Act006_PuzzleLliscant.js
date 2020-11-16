let cos = document.getElementById("cos");
let taula = document.getElementById("taula");

let fila, cella;

for (let i=1; i<3; i++) {
    fila = taula.insertRow();
    for (let j=1; j<3; j++){
        cella = fila.insertCell(-1)
        cella.id="c" + i + j;
        cella.innerHTML=i+ ", "+j;
    }
}