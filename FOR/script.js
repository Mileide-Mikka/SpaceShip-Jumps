let shipName = prompt("Qual é o nome da nave?");

let chosenCharacter = prompt("Qual caracter você deseja substituir?");

let replecementCharacter = prompt("Escolha o novo caracter...");

let newShipName = "";

for(let pos = 0; pos < shipName.length; pos++) {
    if(shipName[pos] == chosenCharacter) {
        newShipName += replecementCharacter;
    }else {
        newShipName += shipName[pos];
    }
}

alert("O nome atual da nave é: " + newShipName);