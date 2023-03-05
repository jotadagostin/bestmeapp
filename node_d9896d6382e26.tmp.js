const questions = [
  "what did I learn today?",
  "what let me upset?",
  "what did I do to get better?",
  "How many people I helped today?",
];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + ">");
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
    console.log(`
    Nice Jota!

    What you learned today was:
    ${answers[1]}

    What let you upset today was:
    ${answers[2]}

    What you did to get better was:
    ${answers[3]}

    You helped ${answers[4]} people today!

    Come back tomorrow for new reflections! 
    `);
})
