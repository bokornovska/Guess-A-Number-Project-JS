function guessANumber(){

    const readline = require(`readline`).createInterface({
        input:process.stdin,
        output:process.stdout
    });

    let answer = Math.floor(Math.random()*100);
    let guess;

    let recursiveAsyncReadLine = function(){
        readline.question(`Guess the number 0-100: `, number=>{
            number = Number(number);

            if(guess<=100 && guess>0){
                if(guess == answer){
                    console.log(`You guessed the number!`)
                    return readline.close();
                }else if(guess<answer){
                    console.log(`Too low!`)
                    recursiveAsyncReadLine();
                }else if(guess>answer){
                    console.log(`Too high!`)
                    recursiveAsyncReadLine();
                }
            }else{
                console.log(`Invalid input!Try again...`);
                recursiveAsyncReadLine();
            }
        })

    }
    recursiveAsyncReadLine();
}

guessANumber()