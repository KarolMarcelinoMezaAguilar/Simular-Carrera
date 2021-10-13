class Dice{
    throw(){
        return Math.ceil(Math.random()*6);
    }
}

let dice = new Dice;
let c1=0,c2=0,r=1;

while (c1<100&&c2<100) {
    console.log(`Turno: ${r++}`);
    let d1 = dice.throw();
    if (d1>=4) {
        c1 += 2;
    }else if (d1==3) {
        c1 += 3;
    }else{
        c1 += 1;
    }
    let d2 = dice.throw();
    if (d2>=4) {
        c2 += 2;
    }else if (d2==3) {
        c2 += 3;
    }else{
        c2 += 1;
    }
    console.log(`Corredor 1: ${c1}`);
    console.log(`Corredor 2: ${c2}`);
}
if (c1>c2&&c2<100) {
    console.log(`¡Ha ganado el corredor 1 con: ${c1}!`);
    console.log(`Ha perdido el corredor 2 con: ${c2}!`);
}else if (runner2>runner1&&runner1<100) {
    console.log(`¡Ha ganado el corredor 2 con: ${c2}!`);
    console.log(`Ha perdido el corredor 1 con: ${c1}`);
}else{
    console.log(`¡Empate, ambos con ${c2}!`);
}