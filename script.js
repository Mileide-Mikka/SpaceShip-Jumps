let spaceJumps = 0;

let chosenOption = "";

let shipName = prompt("Qual o nome da nave?");

chosenOption = prompt("Deseja entra em Dobra Espacial?\n1- Sim\n2- Não");

while(chosenOption == "1"){
    spaceJumps++;
    chosenOption = prompt("Deseja entra em Dobra Espacial outra vez?\n1- Sim\n2- Não");
}

alert("Nome da nave: " + shipName + "\n" + "Dobra espaciais efetuadas: " + spaceJumps);