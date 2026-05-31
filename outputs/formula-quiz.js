const formulaQuestions = [
  {
    topic: "Two population means",
    scenario:
      "A factory compares average packaging time for Machine A and Machine B. The samples are from different packages, the variable is time in seconds, and the question asks whether the means are different.",
    answer: "Independent two-mean test",
    choices: [
      "Independent two-mean test",
      "Paired t test",
      "Two-proportion z test",
      "Chi-square independence test"
    ],
    clue: "Different groups + numerical measurement + 'different' means a two-tailed comparison of μ₁ and μ₂.",
    formula: "z or t = [(x̄₁ - x̄₂) - 0] / √(s₁²/n₁ + s₂²/n₂)",
    reason:
      "Use the independent two-mean formula because each observation belongs to only one group. Do not use paired t unless the same subject is measured twice."
  },
  {
    topic: "One-tailed mean comparison",
    scenario:
      "Two delivery methods are compared using independent samples of delivery times. The question asks whether Method A has a lower mean time than Method B.",
    answer: "Independent two-mean one-tailed test",
    choices: [
      "Independent two-mean one-tailed test",
      "Independent two-mean two-tailed test",
      "Chi-square homogeneity test",
      "Pearson correlation test"
    ],
    clue: "The word 'lower' sets H₁: μ₁ - μ₂ < 0, so the rejection region is on the left.",
    formula: "z or t = [(x̄₁ - x̄₂) - 0] / SE",
    reason:
      "The formula is still the independent two-mean statistic, but the decision uses a one-tailed critical value."
  },
  {
    topic: "Small samples with equal variances",
    scenario:
      "A manufacturer compares durability scores from two independent machines. n₁=12 and n₂=10, and the question says to assume equal population variances.",
    answer: "Pooled two-sample t test",
    choices: [
      "Pooled two-sample t test",
      "Welch two-sample t test",
      "Paired t test",
      "Goodness-of-fit test"
    ],
    clue: "Small independent samples + equal variances means pool the sample variances first.",
    formula: "sp² = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁+n₂-2)",
    reason:
      "The equal-variance statement is the clue. After finding sp, use SE = sp√(1/n₁ + 1/n₂)."
  },
  {
    topic: "Paired samples",
    scenario:
      "The same 10 students take a practice exam before and after a review session. The question asks whether the review session increases the mean score.",
    answer: "Paired t test",
    choices: [
      "Paired t test",
      "Independent two-mean test",
      "Two-proportion z test",
      "Simple regression equation"
    ],
    clue: "The same students appear twice, so the data become one list of differences.",
    formula: "t = (d̄ - 0) / (sd / √n), df = n - 1",
    reason:
      "Do not compare the before group and after group as separate samples. Subtract first, then test the mean difference."
  },
  {
    topic: "Confidence interval for paired data",
    scenario:
      "The same employees are measured before and after a training program. The problem asks for a 95% confidence interval for the mean improvement.",
    answer: "Paired mean confidence interval",
    choices: [
      "Paired mean confidence interval",
      "Independent mean confidence interval",
      "Two-proportion confidence interval",
      "Chi-square goodness of fit"
    ],
    clue: "Same people + improvement means use differences d = after - before.",
    formula: "d̄ ± tα/2,df(sd / √n)",
    reason:
      "Because the target is μd, the interval is built from the average difference, not from x̄₁ - x̄₂."
  },
  {
    topic: "Two proportions",
    scenario:
      "Two advertising campaigns are compared by registration rates. Campaign 1 has 130 registrations out of 200, and Campaign 2 has 90 registrations out of 180.",
    answer: "Two-proportion z test",
    choices: [
      "Two-proportion z test",
      "Independent two-mean test",
      "Paired t test",
      "Pearson correlation test"
    ],
    clue: "Registered/not registered is categorical, and the problem compares two rates.",
    formula: "z = (p̂₁ - p̂₂) / √[p̂(1-p̂)(1/n₁ + 1/n₂)]",
    reason:
      "For a hypothesis test with H₀: p₁ = p₂, use the pooled p̂ in the standard error."
  },
  {
    topic: "Confidence interval for two proportions",
    scenario:
      "A bank compares the click-through rates of two notification texts and asks for a 95% confidence interval for pA - pB.",
    answer: "Two-proportion confidence interval",
    choices: [
      "Two-proportion confidence interval",
      "Two-proportion pooled z test",
      "Independent mean confidence interval",
      "Chi-square independence test"
    ],
    clue: "It asks for an interval, not a test, so do not pool the proportions.",
    formula: "(p̂₁ - p̂₂) ± zα/2√[p̂₁(1-p̂₁)/n₁ + p̂₂(1-p̂₂)/n₂]",
    reason:
      "Pooling is for the null hypothesis p₁ = p₂. A confidence interval estimates the actual difference."
  },
  {
    topic: "Chi-square independence",
    scenario:
      "One sample of students is classified by study plan status and pass/fail status. The question asks whether the two variables are related.",
    answer: "Chi-square independence test",
    choices: [
      "Chi-square independence test",
      "Chi-square homogeneity test",
      "Chi-square goodness-of-fit test",
      "Two-proportion z test"
    ],
    clue: "One population/sample + two categorical variables + relationship/independence.",
    formula: "E = row total × column total / grand total; χ² = Σ(O - E)²/E",
    reason:
      "Independence tests whether two categorical variables are associated within one sampled group."
  },
  {
    topic: "Chi-square homogeneity",
    scenario:
      "A university surveys 100 students from each of three campuses and compares satisfied/not satisfied counts across campuses.",
    answer: "Chi-square homogeneity test",
    choices: [
      "Chi-square homogeneity test",
      "Chi-square independence test",
      "Chi-square goodness-of-fit test",
      "Paired t test"
    ],
    clue: "Several populations or groups are compared to see whether their category distributions are the same.",
    formula: "χ² = Σ(O - E)²/E, df = (r - 1)(c - 1)",
    reason:
      "The calculation matches independence, but the wording is homogeneity because separate groups are being compared."
  },
  {
    topic: "Goodness of fit",
    scenario:
      "A cafeteria claims four drink types are equally preferred. One day of sales gives counts for the four drink types.",
    answer: "Chi-square goodness-of-fit test",
    choices: [
      "Chi-square goodness-of-fit test",
      "Chi-square independence test",
      "Chi-square homogeneity test",
      "Simple regression equation"
    ],
    clue: "One categorical variable is compared to a claimed distribution.",
    formula: "χ² = Σ(O - E)²/E, df = k - 1",
    reason:
      "There is no two-way table of two variables. The job is only to compare observed counts with expected counts."
  },
  {
    topic: "Goodness of fit with proportions",
    scenario:
      "An app expects users to be 20% tablet, 30% desktop, and 50% mobile. A sample gives observed counts in those three categories.",
    answer: "Chi-square goodness-of-fit test",
    choices: [
      "Chi-square goodness-of-fit test",
      "Two-proportion z test",
      "Chi-square independence test",
      "Pearson correlation test"
    ],
    clue: "Expected proportions must be converted to expected counts using E = n × p.",
    formula: "Eᵢ = n × pᵢ, then χ² = Σ(O - E)²/E",
    reason:
      "This is still one categorical variable. The percentages are the claimed distribution."
  },
  {
    topic: "Expected frequency",
    scenario:
      "A 2 by 3 table has row total 60, column total 55, and grand total 130 for one cell. The problem asks for that cell's expected frequency.",
    answer: "Expected frequency in a two-way table",
    choices: [
      "Expected frequency in a two-way table",
      "Pooled proportion",
      "Regression slope",
      "Correlation coefficient"
    ],
    clue: "A cell in a contingency table uses row total, column total, and grand total.",
    formula: "E = row total × column total / grand total",
    reason:
      "This formula belongs to chi-square independence and homogeneity tests."
  },
  {
    topic: "Correlation",
    scenario:
      "A teacher records study hours and quiz scores for each student. The question asks for r, R², and whether the linear relationship is significant.",
    answer: "Pearson correlation test",
    choices: [
      "Pearson correlation test",
      "Simple regression equation",
      "Independent two-mean test",
      "Chi-square independence test"
    ],
    clue: "Paired numerical x-y data + strength/direction of linear relationship.",
    formula: "r = Sxy / √(SxxSyy), t = r√[(n-2)/(1-r²)]",
    reason:
      "Correlation measures direction and strength. Use regression only when the problem asks for a prediction equation."
  },
  {
    topic: "R squared",
    scenario:
      "A problem gives r = 0.90 and asks what percentage of variation in y is explained by the linear relationship with x.",
    answer: "Coefficient of determination",
    choices: [
      "Coefficient of determination",
      "Regression intercept",
      "Pooled standard deviation",
      "Chi-square statistic"
    ],
    clue: "The phrase 'percentage of variation explained' points directly to R².",
    formula: "R² = r²",
    reason:
      "Square the correlation coefficient and convert to a percentage if the question asks for percent."
  },
  {
    topic: "Regression equation",
    scenario:
      "A store records advertising score x and sales y, then asks for the line ŷ = a + bx and a prediction when x = 7.",
    answer: "Simple regression equation",
    choices: [
      "Simple regression equation",
      "Pearson correlation test",
      "Paired t test",
      "Chi-square goodness-of-fit test"
    ],
    clue: "The words line, prediction, slope, or intercept point to regression.",
    formula: "b = Sxy/Sxx, a = ȳ - bx̄, ŷ = a + bx",
    reason:
      "Correlation would stop at r and R². Regression builds an equation and substitutes x to predict y."
  },
  {
    topic: "Regression slope interpretation",
    scenario:
      "A regression output gives ŷ = 16.50 + 2.15x. The problem asks what 2.15 means.",
    answer: "Slope interpretation",
    choices: [
      "Slope interpretation",
      "Intercept interpretation",
      "Correlation significance test",
      "Goodness-of-fit decision"
    ],
    clue: "The coefficient multiplying x is b, the slope.",
    formula: "b = change in predicted y for a 1-unit increase in x",
    reason:
      "Here, each 1-unit increase in x predicts 2.15 more units of y."
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

function renderQuiz() {
  const question = formulaQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  quizTitle.textContent = question.topic;
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
    button.textContent = choice;

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
  feedbackFormula.textContent = question.formula;
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
