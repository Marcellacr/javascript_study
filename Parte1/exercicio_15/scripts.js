let num = 41;
let divisoes = 0;

for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
        divisoes++;
    }
}
// pq o primo ó é dividio por ele mesmo e por 1 (duas divisões).

if(divisoes == 2) {
    console.log(`O numero ${num} e primo.`)
} else {
    console.log(`O numero ${num} nao e primo.`)

}