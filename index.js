const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
}

// const p1Button = document.querySelector("#p1Button");
// const p1Display = document.querySelector("#p1Display");
// const p2Button = document.querySelector("#p2Button");
// const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

//function to update score -> refactoring
function updateScores(player, opponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score===winningScore){ //whoever wins first then the score stops to be able to increase
            isGameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    player.display.textContent = player.score;
}


//score keeping
p1.button.addEventListener('click',function(){
    // if(!isGameOver){
    //     p1Score+=1;
    //     if(p1Score===winningScore){ //whoever wins first then the score stops to be able to increase
    //         isGameOver=true;
    //         p1Display.classList.add('has-text-success');
    //         p2Display.classList.add('has-text-danger');
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    // }
    // p1Display.textContent = p1Score;
    updateScores(p1,p2)
});

p2.button.addEventListener('click',function(){
    // if(!isGameOver){
    //     p2Score+=1;
    //     if(p2Score===winningScore){
    //         isGameOver=true;
    //         p2Display.classList.add('has-text-success');
    //         p1Display.classList.add('has-text-danger');
    //         p1Button.disabled = true;
    //         p2Button.disabled = true;
    //     }
    // }
    // p2Display.textContent = p2Score;
    updateScores(p2, p1); 
});

//change the winning score, when changed -> reset the game
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value); //the value will come out as string if we dont parse it
    reset();
})


//reset
resetButton.addEventListener('click', reset);

function reset(){
    isGameOver = false;
    // p1Score = 0;
    // p2Score = 0;
    // p1Display.textContent = 0;
    // p2Display.textContent = 0;
    // p1Display.classList.remove('has-text-success','has-text-danger');
    // p2Display.classList.remove('has-text-success','has-text-danger');
    // p1Button.disabled = false;
    // p2Button.disabled = false;

    //refactor1
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.display.classList.remove('has-text-success','has-text-danger');
    // p2.display.classList.remove('has-text-success','has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;

    //refactor2
    for(p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p1.disabled = false;
    }
};

