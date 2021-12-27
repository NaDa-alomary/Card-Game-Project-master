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
let duration=1000;

//functions


// event listeners
const cards = document.querySelectorAll(".card")
for(let card of cards){
    card.addEventListener("click",(event)=>{
        event.target.classList.add("open");
    })
}


var arr[card1, card2];
function match(card1 ,card2){
    if(card1 === card2){
        
        console.log("hi");
    } else{
        cards.classList.remove("open");
    }



//const isMaching
    


