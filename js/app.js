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
let isMaching =[]




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

            event.target.classList.add("open");

            //add the card what I clickes on to the array named 'openCard'
            openCard.push(event.target);
            //
            if(openCard.length == 2){
                match();
            } else{ stopPush;
            }
            
        })
}

function stopPush(){
    if(openCard > 2 ){
        openCard.shift();
    }
}
    


