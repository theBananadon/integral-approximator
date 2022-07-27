
function draw(){
    const canvas = document.querySelector('#graph');

    if(!canvas.getContext){
        return;
    }

    const ctx = canvas.getContext('2d');

    drawGraphLines(ctx, Number(canvas.getAttribute("height")), Number(canvas.getAttribute("width")));
}


function drawGraphLines(ctx, width, height){
    let unitSize = 20;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    for(let i = 0; i < width / unitSize; i++){
        ctx.beginPath();
        ctx.moveTo(i * unitSize, 0);
        ctx.lineTo(i * unitSize, height - unitSize);
        ctx.stroke();
    }
    for(let  i = 0; i < height / unitSize; i++){
        ctx.beginPath();
        ctx.moveTo(0, i * unitSize);
        ctx.lineTo(width - unitSize, i * unitSize);
        ctx.stroke();
    }
}

draw();