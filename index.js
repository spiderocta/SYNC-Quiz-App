// correct answers
const correctAnswers = ["A", "A", "A", "A","A"];

// result
const result = document.querySelector(".result");

// all questions 
const questions = document.querySelectorAll(".question");

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
            questions[index].classList.add("correct");
        }else{
            questions[index].classList.add("wrong");
        }
    });
    console.log(score);

    scrollTo(0, 0);
    result.classList.remove("hide")

    result.querySelector("p").textContent = `Your Score Is : ${score} / 5`; 
});