import { evaluate } from "mathjs";

let funct = 'x^2-2*x+1';

//Function of x, solved for a

function func(a){
    let val = funct.replaceAll('x', a);
    let c = evaluate(val);
    return c;
}

function domainSum(a, b, interval){
    let sum = 0;
    for(let i = 0; i < (b - a) / interval; i++){
        let value = a + (i * interval);
        sum += SimpsonsRule(value, interval);
    }
    return sum;
}

console.log(domainSum(1,3,0.1));






//Definition Functions: use for calculations, no change regardless of input function

function SimpsonsRule(a, interval){
    let c = (2 * MidpointSum(a, interval) + TrapezoidSum(a, interval)) / 3;
    return c;
}

function TrapezoidSum(a, interval){
    let c = (func(a) + func(a + interval)) * interval / 2;
    return c;
}

function MidpointSum(a, interval){
    let c = func(a + (interval / 2)) * interval;
    return c;
}

