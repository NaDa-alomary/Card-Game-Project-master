function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible
let openCard = []
const cards = document.querySelectorAll(".card")


let time = 0;
let timerId = 0;
let timerOut = true;

const timer = document.querySelector("#timer");

let restarts = document.querySelector("#restart");

let move = 0;
const moveing = document.querySelector("#moves");

const cardToShuffle= document.querySelectorAll(".card");
let arr =Array.from(cardToShuffle);

reShuffle();
//functions
function match(){
    if(openCard[0].children[0].className === openCard[1].children[0].className){ 
        event.target.classList.add("match");
        openCard[0].classList.add("match");
        //
        openCard=[];
    } else{
        setTimeout(()=>{
        openCard[0].classList.remove("open");
        openCard[1].classList.remove("open");


        //
        openCard=[];
        },1000)    
    }
}
// event listeners

for(let card of cards){
        card.addEventListener("click",(event)=>{

            if(validClick(event.target)){
                event.target.classList.add("open");
                if(timerOut){
                initClock();
                }

                //add the card what I clickes on to the array named 'openCard'
                openCard.push(event.target);
                //
                if(openCard.length == 2){
                    match();
                    moveCounte();
                }
            }
        })
}

function validClick(card){
    if(openCard.length < 2 && !openCard.includes(card) && !card.classList.contains("match") && card.classList.contains("card")){
        return true;
    }else
    return false;
}

//timer
const initClock = () => {
    timerOut= false;
    timerId = setInterval(() => {
        time++;
        timerCount();
    },1000);

};
const timerCount = () => {
    const min = Math.floor(time/60);
    const sec = time % 60 ;
    if (sec < 10) {
        timer.innerHTML= `${min}:0${sec}`;
    }else{
        timer.innerHTML = `${min}:${sec}`;
    }
};

const stopClock = () => {
    clearInterval(timerId);
    timer.innerHTML= `0:00`;
};
    
//move
const moveCounte =() => {
    move++;
    moveing.innerHTML= `${move} moves`;

    if (move == 16){
        document.querySelector("#heart").children[0].style.display = "none"; 
        if(move=0){
            moveCounte();
        } 
        moveing.innerHTML= `0 moves`;
        
    }else if(move ==24){
        document.querySelector("#heart").children[1].style.display = "none";
        if(move=0){
            moveCounte();
        } 
        moveing.innerHTML= `0 moves`;
        
    }else if(move ==32){
        document.querySelector("#heart").children[2].style.display = "none";
        if(move=0){
            moveCounte();
        } 
        moveing.innerHTML= `0 moves`;
        
    }
};

restarts.addEventListener("click", function(){
    stopClock();
    openCard=[];
    for (i=0; i<cards.length ; i++){
        cards[i].classList.remove("open","match");
    }
    moveing.innerHTML= `0 moves`;
    if(move=0){
        moveCounte();
    }
    document.querySelector("#heart").children[0].style.display = "inline";
    document.querySelector("#heart").children[1].style.display = "inline";
    document.querySelector("#heart").children[2].style.display = "inline";
//-------
   
//---------

reShuffle()
});


//shuffle 

function reShuffle(){
    let shuffled= shuffle(arr);
    
    card.replaceChildren(...shuffled);
}
