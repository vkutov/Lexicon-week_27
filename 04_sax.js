// Skriv pseudokod för det klassiska spelet sten, sax och påse. Först till 3 vinster vinner!
let move1 = prompt("choose move 1");
let move2 = prompt("choose move 2");
switch (move1) {
  case "sten":
    if(move2=="påse"){
        alert("Player 2 wins");
    }
    else{
        alert("Player 1 wins");
    }
    break;
  case "påse":
    if(move2=="sax"){
        alert("Player 2 wins");
    }
    else{
        alert("Player 1 wins");
    }
    break;
  case "sax":
    if(move2=="sten"){
        alert("Player 2 wins");
    }
    else{
        alert("Player 1 wins");
    }
    break;
}