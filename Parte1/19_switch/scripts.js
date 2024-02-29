let nome = "Marcella";

switch(nome) {
    case "Marcella":
        console.log("O seu nome e Marcella");
        break;
    case "João":
        console.log("O seu nome e João");
        break;
    default:
        console.log("O nome nao foi encontrado");
        break;
}


//O switch não é muito usado, os devs preferem o iF
/*
if(nome == "Marcella") {
    console.log("O nome e Marcella"); 
}
else {
    console.log("O nome nao foi encontrado");
     }
*/ 