

const textField = document.querySelector(".textField");

let funct;
const text = document.createElement("input");
text.setAttribute("type","text");

textField.appendChild(text);

text.addEventListener("keypress", function(event) { 
    if(event.key === "Enter"){
        funct = text.value;
        alert(func(10));
    }
} )





//Function of x, solved for a

function func(a){
    funct = funct.replaceAll('x' , a);
    funct = funct.replaceAll("^", "**");
    return c;
}




//Definition Functions: use for calculations, no change regardless of input function

function SimpsonsRule(a, interval){
    let c = (2 * MidpointSum(a, interval) + TrapezoidSum(a, interval)) / 3;
}

function TrapezoidSum(a, interval){
    let c = (func(a) + func(a + interval)) * interval / 2;
    return c;
}

function MidpointSum(a, interval){
    let c = func(a + (interval / 2)) * interval;
    return c;
}

