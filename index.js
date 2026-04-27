let score = 0;

let answerInput;
let answer;

//number 1
answerInput = prompt(`How many dogs do I have?
 [1] 2
 [2] 3
 [3] 1
  `);

answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Enter a number.");
} else if (answer < 1 || answer > 3) {
  alert("Pick 1 2 or 3");
} else {
  if (answer === 1) {
    alert("Correct");
    score = score + 1;
  } else {
    alert("INCORRECT");
  }
  {
    alert("Remember I have 2 dogs my sister has the other one! Trick question");
  }
}
//number 2

answerInput = prompt(`What is my favorite color?
    [1] Red
    [2] Teal 
    [3] Pink 
    `);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Enter a number.");
} else if (answer < 1 || answer > 3) {
  alert("Pick 1 2 or 3");
} else {
  if (answer === 3) {
    alert("Correct");
    score = score + 1;
  } else {
    alert("INCORRECT");
  }
}

//number 3
answerInput = prompt(`What license do I have?
    [1] NailTech
    [2] Cosmetology 
    [3] Esthetician 
    `);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Enter a number.");
} else if (answer < 1 || answer > 3) {
  alert("Pick 1 2 or 3");
} else {
  if (answer === 2) {
    alert("Correct");
    score = score + 1;
  } else {
    alert("INCORRECT");
  }
}

alert(`You are finished with the quiz! Your final score is ${score} out of 3`);

if (score === 0) {
  alert("Did you even look at my website? Jk study more :(");
}

if (score === 3) {
  alert("Wow good job!");
}

if (score === 1) {
  alert("Study -_-");
}

if (score === 2) {
  alert("Who needs an 100 anyway?");
}
