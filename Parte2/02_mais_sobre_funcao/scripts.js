function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mult e: " + mult);

//outra maneira de declarar função
// 0 é considerado false
// 1 é considerado true

function podeDirigir(idade, cnh) {
    if(idade >=18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Nao pode dirigir");
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(15,false));