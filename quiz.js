function checkAnswer() {
    
    const correctAnswer="4";

    let userAnswer =document.querySelector('quiz').value();

    let feedback = document.getElementById('feedback');
    
    const answer =document.getElementById('submit-answer');

    if (correctAnswer=userAnswer){

        feedback.textContent('Correct! Well done.');
    }else
    {
        feedback.textContent("That's incorrect. Try again!");
    }  
}

answer.addEventListener('submit',checkAnswer);