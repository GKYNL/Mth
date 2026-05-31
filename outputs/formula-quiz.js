const formulaByChoice = {
  "Independent two-mean test": "z or t = [(x̄₁ - x̄₂) - 0] / √(s₁²/n₁ + s₂²/n₂)",
  "Independent two-mean one-tailed test": "same two-mean statistic; reject in one tail only",
  "Independent two-mean two-tailed test": "same two-mean statistic; reject if |z| or |t| is large",
  "Independent mean confidence interval": "(x̄₁ - x̄₂) ± critical value × √(s₁²/n₁ + s₂²/n₂)",
  "Pooled two-sample t test": "sp² = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁+n₂-2)",
  "Welch two-sample t test": "t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂), Welch df",
  "Paired t test": "t = (d̄ - 0) / (sd / √n), df = n - 1",
  "Paired mean confidence interval": "d̄ ± tα/2,df(sd / √n)",
  "Two-proportion z test": "z = (p̂₁ - p̂₂) / √[p̂(1-p̂)(1/n₁ + 1/n₂)]",
  "Two-proportion confidence interval": "(p̂₁ - p̂₂) ± zα/2√[p̂₁(1-p̂₁)/n₁ + p̂₂(1-p̂₂)/n₂]",
  "Two-proportion pooled z test": "z = (p̂₁ - p̂₂) / √[p̂(1-p̂)(1/n₁ + 1/n₂)]",
  "Pooled proportion": "p̂ = (x₁ + x₂) / (n₁ + n₂)",
  "Chi-square independence test": "E = row total × column total / grand total; χ² = Σ(O - E)²/E",
  "Chi-square homogeneity test": "χ² = Σ(O - E)²/E, df = (r - 1)(c - 1)",
  "Chi-square goodness-of-fit test": "χ² = Σ(O - E)²/E, df = k - 1",
  "Goodness-of-fit test": "χ² = Σ(O - E)²/E, df = k - 1",
  "Expected frequency in a two-way table": "E = row total × column total / grand total",
  "Chi-square statistic": "χ² = Σ(O - E)²/E",
  "Goodness-of-fit decision": "compare χ² test statistic with χ² critical value",
  "Pearson correlation test": "r = Sxy / √(SxxSyy), then t = r√[(n-2)/(1-r²)]",
  "Correlation coefficient": "r = Sxy / √(SxxSyy)",
  "Correlation significance test": "t = r√[(n-2)/(1-r²)], df = n - 2",
  "Coefficient of determination": "R² = r²",
  "Simple regression equation": "b = Sxy/Sxx, a = ȳ - bx̄, ŷ = a + bx",
  "Regression slope": "b = Sxy/Sxx",
  "Regression intercept": "a = ȳ - bx̄",
  "Slope interpretation": "b = predicted change in y for a 1-unit increase in x",
  "Intercept interpretation": "a = predicted y when x = 0",
  "Pooled standard deviation": "sp = √sp²"
};

const formulaQuestions = [
  {
    scenario:
      "A gym compares weekly calorie burn from two workout programs. Program A: n=36, x̄=68, s=9. Program B: n=40, x̄=63, s=8. At α=0.05, are the two population means different?",
    answer: "Independent two-mean two-tailed test",
    choices: [
      "Independent two-mean two-tailed test",
      "Paired t test",
      "Two-proportion z test",
      "Chi-square independence test"
    ],
    clue: "Two separate groups are compared on a numerical variable, and 'different' makes the alternative two-tailed.",
    reason:
      "Use a two-population mean test because the response is numerical and the two samples are independent."
  },
  {
    scenario:
      "A factory compares mean packaging time for two machines. Machine A: n=35, x̄=24.3 seconds, s=3.5. Machine B: n=32, x̄=26.1 seconds, s=4.2. At α=0.05, is Machine A's mean time lower?",
    answer: "Independent two-mean one-tailed test",
    choices: [
      "Independent two-mean one-tailed test",
      "Independent two-mean two-tailed test",
      "Chi-square homogeneity test",
      "Pearson correlation test"
    ],
    clue: "The samples are independent and the word 'lower' makes H₁ left-tailed.",
    reason:
      "The calculation is still a two-independent-means statistic, but the rejection region is one-sided."
  },
  {
    scenario:
      "A manufacturer studies durability scores for parts from two machines. Machine 1: n=12, x̄=48, s=6. Machine 2: n=10, x̄=42, s=5. Assuming equal variances, test whether the mean durability scores are different.",
    answer: "Pooled two-sample t test",
    choices: [
      "Pooled two-sample t test",
      "Welch two-sample t test",
      "Paired t test",
      "Goodness-of-fit test"
    ],
    clue: "Small independent samples plus the phrase 'assuming equal variances' points to pooled t.",
    reason:
      "Pool the variances first, then use the pooled standard error for the two-sample t statistic."
  },
  {
    scenario:
      "The weights of the same 8 people are measured before and after a diet program. Weight losses, before - after, are 3, 5, 4, 2, 6, 4, 5, and 3 kg. Test whether the program produces average weight loss.",
    answer: "Paired t test",
    choices: [
      "Paired t test",
      "Independent two-mean test",
      "Two-proportion z test",
      "Simple regression equation"
    ],
    clue: "The same people are measured twice, so the data are differences.",
    reason:
      "A paired test converts before/after measurements into one sample of differences."
  },
  {
    scenario:
      "The same 10 employees are measured before and after a training session. The differences, after - before, are 2, -1, 3, 4, 1, 2, 0, 3, 2, and 1. Find a 95% confidence interval for the mean improvement.",
    answer: "Paired mean confidence interval",
    choices: [
      "Paired mean confidence interval",
      "Independent mean confidence interval",
      "Two-proportion confidence interval",
      "Chi-square goodness-of-fit test"
    ],
    clue: "Same employees before/after means the parameter is μd.",
    reason:
      "Because the target is the mean difference, build the interval from d̄ and sd."
  },
  {
    scenario:
      "An online course compares two advertising campaigns. Campaign 1: 130 registrations out of 200 viewers. Campaign 2: 90 registrations out of 180 viewers. At α=0.05, are the conversion rates different?",
    answer: "Two-proportion z test",
    choices: [
      "Two-proportion z test",
      "Independent two-mean test",
      "Paired t test",
      "Pearson correlation test"
    ],
    clue: "The outcome is registered/not registered, so this compares two proportions.",
    reason:
      "For a hypothesis test with H₀: p₁ = p₂, the standard error uses the pooled proportion."
  },
  {
    scenario:
      "A bank compares click-through rates for two notification texts. Text A: 84 clicks out of 150. Text B: 60 clicks out of 140. Construct a 95% confidence interval for pA - pB.",
    answer: "Two-proportion confidence interval",
    choices: [
      "Two-proportion confidence interval",
      "Two-proportion pooled z test",
      "Independent mean confidence interval",
      "Chi-square independence test"
    ],
    clue: "It asks for an interval for pA - pB, not a hypothesis test.",
    reason:
      "Confidence intervals for p₁ - p₂ do not use the pooled proportion in the standard error."
  },
  {
    scenario:
      "An instructor records 120 students by study plan status and pass/fail result. Has plan: 42 passed, 18 failed. No plan: 28 passed, 32 failed. At α=0.05, are study plan and passing status independent?",
    answer: "Chi-square independence test",
    choices: [
      "Chi-square independence test",
      "Chi-square homogeneity test",
      "Chi-square goodness-of-fit test",
      "Two-proportion z test"
    ],
    clue: "One sample is classified by two categorical variables.",
    reason:
      "Independence tests whether two categorical variables are related in one population/sample."
  },
  {
    scenario:
      "A university surveys 100 students at each of three campuses about cafeteria satisfaction. Campus 1: 54 satisfied, 46 not satisfied. Campus 2: 63 satisfied, 37 not satisfied. Campus 3: 70 satisfied, 30 not satisfied. Are the satisfaction distributions the same across campuses?",
    answer: "Chi-square homogeneity test",
    choices: [
      "Chi-square homogeneity test",
      "Chi-square independence test",
      "Chi-square goodness-of-fit test",
      "Paired t test"
    ],
    clue: "Several groups are compared by the same categorical response.",
    reason:
      "Homogeneity tests whether category distributions are the same across different populations/groups."
  },
  {
    scenario:
      "A school cafeteria claims four drink types are equally preferred. In one day, observed sales are 28, 22, 30, and 20. At α=0.05, test whether preferences fit an equal distribution.",
    answer: "Chi-square goodness-of-fit test",
    choices: [
      "Chi-square goodness-of-fit test",
      "Chi-square independence test",
      "Chi-square homogeneity test",
      "Simple regression equation"
    ],
    clue: "One categorical variable is compared to one claimed distribution.",
    reason:
      "Goodness of fit compares observed counts with expected counts from a claimed distribution."
  },
  {
    scenario:
      "A mobile app expects device types to follow 20% tablet, 30% desktop, and 50% mobile. In 100 users, the observed counts are 18, 32, and 50. Test whether the observed distribution fits the expected proportions.",
    answer: "Chi-square goodness-of-fit test",
    choices: [
      "Chi-square goodness-of-fit test",
      "Two-proportion z test",
      "Chi-square independence test",
      "Pearson correlation test"
    ],
    clue: "There is one categorical variable and expected proportions for its categories.",
    reason:
      "Convert each expected proportion to an expected count, then calculate χ²."
  },
  {
    scenario:
      "In a chi-square two-way table, one cell has row total 60, column total 55, and grand total 130. Which formula gives that cell's expected frequency?",
    answer: "Expected frequency in a two-way table",
    choices: [
      "Expected frequency in a two-way table",
      "Pooled proportion",
      "Regression slope",
      "Correlation coefficient"
    ],
    clue: "Expected cell counts in contingency tables use row total, column total, and grand total.",
    reason:
      "This expected-frequency formula is used before calculating χ² in independence and homogeneity tests."
  },
  {
    scenario:
      "A teacher records study hours and quiz scores for 5 students: x = 1, 2, 3, 4, 5 and y = 2, 3, 5, 4, 6. Find r, R², and test whether the linear relationship is significant.",
    answer: "Pearson correlation test",
    choices: [
      "Pearson correlation test",
      "Simple regression equation",
      "Independent two-mean test",
      "Chi-square independence test"
    ],
    clue: "The question asks for r and significance of the linear relationship.",
    reason:
      "Correlation measures strength and direction; the correlation t test checks whether ρ = 0."
  },
  {
    scenario:
      "A correlation problem gives r = 0.90 for training days and productivity. What formula gives the percentage of variation in productivity explained by the linear relationship?",
    answer: "Coefficient of determination",
    choices: [
      "Coefficient of determination",
      "Regression intercept",
      "Pooled standard deviation",
      "Chi-square statistic"
    ],
    clue: "Explained variation in a linear relationship is measured by R².",
    reason:
      "Square r to get R²; 0.90² = 0.81 means about 81% explained."
  },
  {
    scenario:
      "A store records advertising spending scores x = 2, 4, 6, 8, 10 and sales y = 50, 55, 65, 70, 80. Build the line ŷ = a + bx and predict sales when x = 7.",
    answer: "Simple regression equation",
    choices: [
      "Simple regression equation",
      "Pearson correlation test",
      "Paired t test",
      "Chi-square goodness-of-fit test"
    ],
    clue: "The problem asks for a prediction line and a predicted y value.",
    reason:
      "Regression is used when the goal is to build ŷ = a + bx and make predictions."
  },
  {
    scenario:
      "A regression model for technicians and completed jobs is ŷ = 16.50 + 2.15x. The question asks what the number 2.15 means in context.",
    answer: "Slope interpretation",
    choices: [
      "Slope interpretation",
      "Intercept interpretation",
      "Correlation significance test",
      "Goodness-of-fit decision"
    ],
    clue: "The coefficient of x is the slope.",
    reason:
      "The slope tells the predicted change in y when x increases by 1."
  }
];

let currentQuestionIndex = 0;
let score = 0;
const selectedAnswers = Array(formulaQuestions.length).fill(null);

const quizTitle = document.querySelector("#quizTitle");
const quizScenario = document.querySelector("#quizScenario");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackReason = document.querySelector("#feedbackReason");
const feedbackClue = document.querySelector("#feedbackClue");
const feedbackFormula = document.querySelector("#feedbackFormula");
const quizPosition = document.querySelector("#quizPosition");
const quizScore = document.querySelector("#quizScore");
const previousButton = document.querySelector("#prevQuestion");
const nextButton = document.querySelector("#nextQuestion");
const resetButton = document.querySelector("#resetQuiz");

function appendChoiceText(button, choice) {
  const name = document.createElement("span");
  const formula = document.createElement("span");

  name.className = "choice-name";
  formula.className = "choice-formula";
  name.textContent = choice;
  formula.textContent = formulaByChoice[choice] || "";
  button.append(name, formula);
}

function renderQuiz() {
  const question = formulaQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  quizTitle.textContent = `Problem ${currentQuestionIndex + 1}`;
  quizScenario.textContent = question.scenario;
  quizPosition.textContent = `Question ${currentQuestionIndex + 1} of ${formulaQuestions.length}`;
  quizScore.textContent = `Score: ${score}/${formulaQuestions.length}`;
  previousButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === formulaQuestions.length - 1;

  quizOptions.innerHTML = "";
  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    appendChoiceText(button, choice);

    if (selectedAnswer) {
      button.disabled = true;
      if (choice === question.answer) button.classList.add("is-correct");
      if (choice === selectedAnswer && choice !== question.answer) button.classList.add("is-wrong");
    }

    button.addEventListener("click", () => selectAnswer(choice));
    quizOptions.append(button);
  });

  renderFeedback();
}

function renderFeedback() {
  const question = formulaQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  if (!selectedAnswer) {
    quizFeedback.hidden = true;
    return;
  }

  const isCorrect = selectedAnswer === question.answer;
  feedbackTitle.textContent = isCorrect ? "Correct" : `Correct answer: ${question.answer}`;
  feedbackReason.textContent = question.reason;
  feedbackClue.textContent = `Clue: ${question.clue}`;
  feedbackFormula.textContent = `Formula: ${formulaByChoice[question.answer]}`;
  quizFeedback.hidden = false;
}

function selectAnswer(choice) {
  if (selectedAnswers[currentQuestionIndex]) return;

  selectedAnswers[currentQuestionIndex] = choice;
  if (choice === formulaQuestions[currentQuestionIndex].answer) {
    score += 1;
  }

  renderQuiz();
}

previousButton.addEventListener("click", () => {
  currentQuestionIndex = Math.max(0, currentQuestionIndex - 1);
  renderQuiz();
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex = Math.min(formulaQuestions.length - 1, currentQuestionIndex + 1);
  renderQuiz();
});

resetButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers.fill(null);
  renderQuiz();
});

renderQuiz();
