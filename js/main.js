function check() {
	var score = 0;
	var q1 = document.quiz.question1.value;
	var q2 = document.quiz.question2.value;
	var q3 = document.quiz.question3.value;
	var q4 = document.quiz.question4.value;
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
	quiz.style.display="none";

	score = 100/4 * score;

	if(score<=75) {
		result.textContent = `Your score is ${score}%. Please try again`;
	} else {
		result.textContent = `Your score is ${score}%. Great job!`;
	}
}






// var quiz = document.getElementById("quiz");
// var question = document.getElementById("question");
// var choiceA = document.getElementById("A");
// var choiceB = document.getElementById("B");
// var choiceC = document.getElementById("C");
// var choiceD = document.getElementById("D");


// //create questions

// var questions = [
// 	{
// 		question: "What is mommy's favorite food?",
// 		choiceA: "steak",
// 		choiceB: "tacos",
// 		choiceC: "pizza",
// 		choiceD: "Chick Fila"
// 	},
// 	{
// 		question: "What is mommy's favorite place to visit?",
// 		choiceA: "Lake George",
// 		choiceB: "Hawaii",
// 		choiceC: "Colorado",
// 		choiceD: "MyrtleBeach, SC"
// 	},
// 	{
// 		question: "When is Mimi's birthday?",
// 		choiceA: "March 10th",
// 		choiceB: "February 11th",
// 		choiceC: "March 12th",
// 		choiceD: "March11th"
// 	},
// 	{
// 		question: "How old is Rosie?",
// 		choiceA: "12 years old",
// 		choiceB: "16 years old",
// 		choiceC: "17 years old",
// 		choiceD: "15 years old"
// 	}
// ];

// function displayQuiz() {
// 		var currentQuestion = questions[0];

// 		for(var i = 0; i < questions.length; i++) {
// 			question.innerHTML = "<p>" + currentQuestion.question + "</p>";
// 		}
// 	}








// var question1 = "What is mommy's favorite food?";
// var question2 = "What is mommy's favorite place to visit?";
// var question3 = "What is Mimi's birthday?";
// var question4 = "How old is Rosie?";
// var questions = [question1, question2, question3, question4];

// //answer objects
// var quizAnswers1 = {
// 	a: "steak",
// 	b: "tacos",
// 	c: "pizza",
// 	d: "Chick Fila"
// };

// var quizAnswers2 = {
// 	a: "Lake George",
// 	b: "Hawaii",
// 	c: "Colorado",
// 	d: "Myrtle Beach, SC"
// };

// var quizAnswers3 = {
// 	a: "March 10th",
// 	b: "February 11th",
// 	c: "March 12th",
// 	d: "March 11th"

// };

// var quizAnswers4 = {
// 	a: "12 years old",
// 	b: "17 years old",
// 	c: "17 years old",
// 	d: "15 years old"
// };

// // create an array with answers objects
// var asnwersArray = [quizAnswers1, quizAnswers2, quizAnswers3, quizAnswers4];

// // correct answers
// var correctAnswer1 = quizAnswers1.b;
// var correctAnswer2 = quizAnswers2.a;
// var correctAnswer3 = quizAnswers3.c;
// var correctAnswer4 = quizAnswers4.b;

// //create correct answers array
// var correctAnswersArray = [correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4];











