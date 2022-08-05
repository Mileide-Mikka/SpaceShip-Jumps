let shipName = prompt("Qual nome da nave?");

let invertName = "";

for(let i = shipName.length - 1; i >= 0; i--) {
    if(shipName[i] == "e"){
        break;
    }
    invertName += shipName[i];
}

alert("o nome original da nave é: " + shipName + "\nO nome da nave ocultado é: " + invertName);