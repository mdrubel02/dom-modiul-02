
function makeRed(){
    document.body.style.backgroundColor='pink';
}

const lightBtn =document.getElementById('light-blue');

lightBtn.onclick= makeLight;

function makeLight(){
    document.body.style.backgroundColor='blue';
}


const oliveBtn =document.getElementById('make-olive');
oliveBtn.onclick= function (){
    document.body.style.backgroundColor='olive';
}

const aquaBtn = document.getElementById('make-aqua');
aquaBtn.addEventListener('click',makeAqua);
function makeAqua(){
    document.body.style.backgroundColor='aqua';
}


const makeBrown =document.getElementById('make-brown');
makeBrown.addEventListener('click',function(){
    document.body.style.backgroundColor='brown';
})

document.getElementById('make-chocolate').addEventListener('click',function(){
    document.body.style.backgroundColor='chocolate';
});

