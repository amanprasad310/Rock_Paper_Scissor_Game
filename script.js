var score = JSON.parse(localStorage.getItem('score')) ||{
    wins : 0,
    looses : 0,
    ties : 0
}

function Play(move){
    var comp_move = computer_move();
    if(move === '✋'){
        if(comp_move === '✋'){
            document.querySelector('.Result').innerHTML=`It's a tie.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.ties++;
            show();
        }
        else if(comp_move === '✊'){
            document.querySelector('.Result').innerHTML=`You Win.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.wins++;
            show();  
        }
        else if(comp_move === '✌️'){
            document.querySelector('.Result').innerHTML=`You Loose.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.looses++;
            show();  
        }
    }
    else if(move === '✌️'){
        if(comp_move === '✌️'){
            document.querySelector('.Result').innerHTML=`It's a tie.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.ties++;
            show();
        }
        else if(comp_move === '✋'){
            document.querySelector('.Result').innerHTML=`You Win.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.wins++;
            show();  
        }
        else if(comp_move === '✊'){
            document.querySelector('.Result').innerHTML=`You Loose.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.looses++;
            show();  
        }
    }
    else if(move === '✊'){
        if(comp_move === '✊'){
            document.querySelector('.Result').innerHTML=`It's a tie.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.ties++;
            show();
        }
        else if(comp_move === '✌️'){
            document.querySelector('.Result').innerHTML=`You Win.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.wins++;
            show();  
        }
        else if(comp_move === '✋'){
            document.querySelector('.Result').innerHTML=`You Loose.`;
            document.querySelector('.Moves').innerHTML=`You ${move}  ${comp_move} Computer`;
            score.looses++;
            show();  
        }
    }
    localStorage.setItem('score',JSON.stringify(score))

}

function computer_move(){
    var comp_move= 0;
    var temp = Math.random();
    if(temp<=1/3){
        comp_move = "✊";
    }
    else if(temp>1/3 && temp<=2/3){
        comp_move = "✋";
    }
    else{
        comp_move="✌️";
    }

    return comp_move;
}

function begin(){
    score.looses = 0;
    score.wins = 0;
    score.ties = 0;
    show();
    localStorage.removeItem("score");
}

function show(){
    document.querySelector('.Score').innerHTML=`Wins: ${score.wins}, Losses: ${score.looses}, Ties: ${score.ties}.`;
}

document.querySelector('.Score').innerHTML=`Wins: ${score.wins}, Losses: ${score.looses}, Ties: ${score.ties}.`;

let id1;

function start1(){
    var text1 = document.querySelector('.auto_play');
    if(text1.innerHTML == `Auto Play`){
        text1.innerHTML = `stop`;
        id1 = setInterval(function (){
            var num = computer_move();
            Play(num);
        },1000);

    }else{
        text1.innerHTML = "Auto Play";
        clearInterval(id1);
    }
}
