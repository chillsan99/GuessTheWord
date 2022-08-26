const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const numberText = document.querySelector(".number span");
const userInput = document.querySelector("input");
const refresh = document.querySelector(".refresh");
const check = document.querySelector(".submit");

let correctWord; 

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("") //splitting the random word
    for(let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1)); // get random number
        //shuffling and swiping letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];

    }
    wordText.innerHTML= wordArray.join("");
    hintText.innerHTML = randomObj.hint;
    numberText.innerHTML = randomObj.No;
    correctWord = randomObj.word.toLocaleLowerCase();
    userInput.value = "";
    userInput.setAttribute("maxlength", correctWord.length);
    
}

initGame();

const checkGuess = () => {
    let userWord = userInput.value.toLocaleLowerCase();
    if(!userWord) return alert ("Please enter a word"); 
    // No answer

    if(userWord !== correctWord) return alert (`${userWord} is not the correct answer!`);
    // Wrong Answer
    
    alert(`Thats the correct answer!`);
    // Correct Answer

    //reset game
    initGame();
}

initGame();
refresh.addEventListener("click", initGame);
check.addEventListener("click", checkGuess);