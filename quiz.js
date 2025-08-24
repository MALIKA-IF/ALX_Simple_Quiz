function checkAnswer() {
    
    const correctAnswer="4";

    let userAnswer =document.querySelector('input[name="quiz"]:checked').value;

    let feedback = document.getElementById('feedback');
    


    if (userAnswer === correctAnswer){

        feedback.textContent='Correct! Well done.';
    }else
    {
        feedback.textContent="That's incorrect. Try again!";
    }  
}

const answer =document.getElementById('submit-answer');

answer.addEventListener('click',checkAnswer);