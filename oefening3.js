const questions = [
  "Where did Frodo destroy the One Ring?",
  "What is Batman's real name?",
  "Which company developed the video game Minecraft?",
  "Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?",
  "Who likes to jump around on his tail in the Winnie The Pooh stories?",
];
const answers = [
  "Mount Doom",
  "Bruce Wayne",
  "Mojang",
  "Geralt of Rivia",
  "Tigger",
];
const userInput = new Array();

function oefening3() {
  const oefening3 = document.querySelector(".oefening3");
  oefening3.innerHTML = "";
  for (let index = 0; index < questions.length; index++) {
    userInput.push(prompt(questions[index]));
  }
  for (let index = 0; index < answers.length; index++) {
    if (answers[index].toLowerCase() === userInput[index].toLowerCase()) {
      createFeedback(
        "green",
        `<b>${questions[index]}</b> </br> You answered ${userInput[index]}`
      );
    } else {
      createFeedback(
        "red",
        `<b>${questions[index]}</b> </br> You answered : ${userInput[index]} </br> The correct answer was : ${answers[index]}`
      );
    }

    oefening3.appendChild(feedback);
  }
  function createFeedback(color, verdict) {
    feedback = document.createElement("div");
    feedback.style.backgroundColor = color;
    feedback.style.margin = "4px";
    feedback.style.padding = "10px";
    feedback.style.textAlign = "center";
    feedback.innerHTML = verdict;
    feedback.style.color = "white";
  }
}
