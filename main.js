const canvas = document.getElementById("canvas");
const ctxt = canvas.getContext("2d");
objetos = []

 cola = '#2E0C05';
 medio = '#6C1E0D';
 cabeza = '#D53917';
 naranja = '#F05A3B'
 morada = '#2F0E54'
 verde = '#75E66C'
class Bloque{
    size;
    colores = {
    cola:'#2E0C05',
    medio: '#6C1E0D',
    cabeza: '#D53917'
              }
    

    constructor(posic,direccion,x,y){
        this.posic = posic
        this.size = 10
        this.direccion = direccion
        this.x = x
        this.y =y
    }
}
function drawPiece(){
    if (objetos.length == 0){
        cabeza = new Bloque('cabeza','x+',50,30);
        medio = new Bloque('medio','x+',40,30);
        cola = new Bloque('cola','x+',30,30);
        objetos.push(cabeza);
        objetos.push(medio);
        objetos.push(cola);
    }
    ctxt.clearRect(0,0,canvas.width,canvas.height)
    for (let i = objetos.length; i>0;i--){
    ctxt.fillStyle= objetos[i]['colores'][objetos[i]['posic']];
    ctxt.fillRect(objetos[i].x,objetos[i].y,objetos[i].size,objetos[i].size);
    }
}
function toMove(){
        for (let i =0; i<objetos.length; i++){
            if (objetos[i]['direccion'] == 'x+'){
                objetos[i].x += 10
            }
            else if (objetos[i]['direccion'] == 'x-'){
                objetos[i].x -= 10
            }
            else if (objetos[i]['direccion'] == 'y-'){
                objetos[i].y += 10
            }
            else if (objetos[i]['direccion'] == 'y+'){
                objetos[i].y -= 10
            }
        }
    
}
function actualiza(e){
    tecla = e.keyCode;
    console.log(tecla);
    if (tecla == 37){ /* left */
        for (let i=0; i<objetos.length;i++){
            objetos[i].direccion = 'x-'
        }
    }
    else if (tecla == 38){ /* up */
        for (let i=0; i<objetos.length;i++){
            objetos[i].direccion = 'y+'
        }
    }
    else if (tecla == 39){ /* right */
        for (let i=0; i<objetos.length;i++){
            objetos[i].direccion = 'x+'
        }
    }
    else if (tecla == 40){ /* down */
        for (let i=0; i<objetos.length;i++){
            objetos[i].direccion = 'y-'
        }
    }
}

function animate(){
    drawPiece();
    requestAnimationFrame(animate);
    window.onkeydown = actualiza;
}
let mover = setInterval(toMove,350);

animate();





