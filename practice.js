function yelllowBtn (){
    document.body.style.backgroundColor='yellow';
}

const orangeBtn =document.getElementById('make-orange');
orangeBtn.onclick= makeOrange;
function makeOrange(){
    document.body.style.backgroundColor='orange';
}


const crimsonBtn = document.getElementById('make-crimson');
crimsonBtn.onclick=function(){
    document.body.style.backgroundColor='crimson';
}

const oliveBtn=document.getElementById('make-olive');
oliveBtn.addEventListener('click',makeOlive);
function makeOlive(){
    document.body.style.backgroundColor='olive';
};
const greenBtn = document.getElementById('make-green');
greenBtn.addEventListener('click',function(){
    document.body.style.backgroundColor='green';
})

document.getElementById('make-darkred').addEventListener('click',function(){
    document.body.style.backgroundColor='darkred'
})