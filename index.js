// correct answers
const correctAnswers = ["A", "A", "A", "A","A"];

// capturing the form
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", event =>{
    event.preventDefault();
    
    //user score 
    let score =0;

    // user answers
    const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    

    // check correctness
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 1;
        }
    });
    console.log(score);
});