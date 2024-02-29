function podeDirigir(idade) {
    if(idade >= 18) {
        console.log("Você pode se matricular");
    } else {
        console.log("Você e menor de idade, nao pode se matricular");
    }
}

podeDirigir(10);
podeDirigir(18);
podeDirigir(45);

