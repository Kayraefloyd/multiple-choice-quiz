function check() {
	var score = 0;
	var q1 = document.quiz.question1.value;
	var q2 = document.quiz.question2.value;
	var q3 = document.quiz.question3.value;
	var q4 = document.quiz.question4.value;
	var q5 = document.quiz.question5.value;
	var q6 = document.quiz.question6.value;
	var q7 = document.quiz.question7. value;
	var q8 = document.quiz.question8.value;
	var q9 = document.quiz.question9.value;
	var q10 = document.quiz.question10.value;
	var result = document.getElementById("result");
	var quiz = document.getElementById("quiz");

	if(q1 == "tacos") {
		score+=1;
	}
	if(q2 == "Lake George") {
		score+=1;
	}
	if(q3 == "March 12th") {
		score+=1;
	}
	if(q4 == "17 years old") {
		score+=1;
	}
	if(q5 == "January 11th") {
		score+=1;
	}
	if(q6 == "29 years old") {
		score+=1;
	}
	if(q7 == "German Shepherd Boxer mix") {
		score+=1;
	}
	if(q8 == "Chocolate Lab") {
		score+=1;
	}
	if(q9 == "purple") {
		score+=1;
	}
	if(q10 == "Cape May, NJ") {
		score+=1;
	}
	quiz.style.display="none";

	score = 100/10 * score;

	if(score<=80) {
		result.textContent = `Your score is ${score}%. Please try again`;
	} else {
		result.textContent = `Your score is ${score}%. Great job!`;
	}
}

