const sections = [
  {
    id: "two-population-tests",
    title: "Two Population Hypothesis Tests",
    subtitle: "Independent samples, paired samples, p₁ - p₂, confidence intervals, and decision rules.",
    importance: "Priority 1",
    example: {
      question:
        "A researcher compares the effect of two different study apps on final exam scores. For App A, a sample of 64 students has a mean score of 82 with a standard deviation of 10. For App B, a sample of 49 students has a mean score of 78 with a standard deviation of 12. At the 5% significance level, is the mean score for App A higher?",
      steps: [
        "First identify the problem type: two separate groups are being compared, and the variable is numerical exam score.",
        "That means this is a two-population mean problem with independent samples, not a paired test.",
        "The phrase 'is App A higher?' tells me the alternative is one-sided: H₁: μ₁ - μ₂ > 0.",
        "The null always contains equality: H₀: μ₁ - μ₂ = 0, or equivalently μ₁ - μ₂ ≤ 0 for a right-tailed setup.",
        "Because the samples are large, I can use the two-sample z approximation with SE = √(s₁²/n₁ + s₂²/n₂).",
        "SE = √(100/64 + 144/49) = √(1.5625 + 2.9388) = 2.12.",
        "Now measure how far the observed difference is from the null value 0: z = [(82 - 78) - 0] / 2.12 = 1.89.",
        "For α = 0.05 and a right-tailed test, the critical value is z = 1.645.",
        "Decision logic: if the test statistic lands in the rejection region, the sample difference is too large to explain by chance under H₀.",
        "Here 1.89 > 1.645, so reject H₀.",
        "Conclusion in words: the data provide evidence that App A has a higher mean score.",
        "Use the same thinking for every two-population question: identify mean/proportion, independent/paired, one- or two-tailed, compute SE, compute test statistic, compare, then write the conclusion."
      ]
    },
    questions: [
      {
        tag: "z test",
        prompt:
          "A gym compares the weekly calorie burn from two workout programs. For Program A, 36 people have a mean of 68 and a standard deviation of 9. For Program B, 40 people have a mean of 63 and a standard deviation of 8. At the 5% significance level, are the two population means different?",
        answer: [
          "SE = √(81/36 + 64/40) = √3.85 = 1.96.",
          "z = (68 - 63) / 1.96 = 2.55.",
          "|z| = 2.55 > 1.96.",
          "<span class='decision'>Reject H₀</span> There is a significant difference between the two means."
        ]
      },
      {
        tag: "CI",
        prompt:
          "A delivery company compares the daily number of packages in two delivery regions. In Region 1, a 50-day sample has a mean of 125 packages and a standard deviation of 15. In Region 2, a 45-day sample has a mean of 118 packages and a standard deviation of 14. Construct a 95% confidence interval for the mean difference Region 1 - Region 2.",
        answer: [
          "Difference = 125 - 118 = 7.",
          "SE = √(225/50 + 196/45) = 2.98.",
          "ME = 1.96 × 2.98 = 5.83.",
          "95% CI = 7 ± 5.83 = (1.17, 12.83).",
          "Because the interval does not contain 0, μ₁ appears to be higher."
        ]
      },
      {
        tag: "pooled t",
        prompt:
          "A manufacturer studies durability scores for parts produced by two machines. For Machine 1, 12 parts have a mean score of 48 and a standard deviation of 6. For Machine 2, 10 parts have a mean score of 42 and a standard deviation of 5. Assuming equal variances, at the 5% significance level, are the mean durability scores different?",
        answer: [
          "sₚ² = [(11×36) + (9×25)] / 20 = 31.05, sₚ = 5.57.",
          "SE = 5.57√(1/12 + 1/10) = 2.39.",
          "t = (48 - 42) / 2.39 = 2.51, df = 20.",
          "Critical t ≈ ±2.086.",
          "<span class='decision'>Reject H₀</span> The mean difference is significant."
        ]
      },
      {
        tag: "Welch t",
        prompt:
          "A restaurant chain compares customer spending in two branches. In Branch A, 16 customers have a mean spending of 102 TL with a standard deviation of 12 TL. In Branch B, 18 customers have a mean spending of 95 TL with a standard deviation of 10 TL. Without assuming equal variances, at the 5% significance level, are the means different?",
        answer: [
          "SE = √(144/16 + 100/18) = 3.82.",
          "t = (102 - 95) / 3.82 = 1.83.",
          "Welch df ≈ 29.36, critical t ≈ ±2.05.",
          "<span class='decision no'>Fail to reject H₀</span> The difference is not significant at the 5% level."
        ]
      },
      {
        tag: "paired t",
        prompt:
          "The weights of the same 8 people are measured before and after a diet program. Weight losses, computed as before - after, are 3, 5, 4, 2, 6, 4, 5, and 3 kg. At the 5% significance level, can we say the program produces an average weight loss?",
        answer: [
          "d̄ = 4.00, sd = 1.31, n = 8.",
          "SE = 1.31 / √8 = 0.46.",
          "t = 4.00 / 0.46 = 8.64, df = 7.",
          "Right-tailed critical t ≈ 1.895.",
          "<span class='decision'>Reject H₀</span> The weight loss is significant."
        ]
      },
      {
        tag: "paired CI",
        prompt:
          "The speed scores of the same 10 employees are measured before and after a training session. The differences, after - before, are 2, -1, 3, 4, 1, 2, 0, 3, 2, and 1. Find a 95% confidence interval for the mean improvement μd.",
        answer: [
          "d̄ = 1.70, sd = 1.49, n = 10.",
          "SE = 1.49 / √10 = 0.47.",
          "For df = 9, t₀.₀₂₅ ≈ 2.262.",
          "ME = 2.262 × 0.47 = 1.07.",
          "95% CI = 1.70 ± 1.07 = (0.63, 2.77)."
        ]
      },
      {
        tag: "p₁ - p₂",
        prompt:
          "An online course compares the registration conversion rates of two advertising campaigns. Of 200 people who saw Campaign 1, 130 registered. Of 180 people who saw Campaign 2, 90 registered. At the 5% significance level, are the conversion rates different?",
        answer: [
          "p̂₁ = 130/200 = 0.65, p̂₂ = 90/180 = 0.50.",
          "Pooled p̂ = 220/380 = 0.579.",
          "SE = √[0.579×0.421×(1/200 + 1/180)] = 0.0507.",
          "z = (0.65 - 0.50) / 0.0507 = 2.96.",
          "<span class='decision'>Reject H₀</span> The proportions are different."
        ]
      },
      {
        tag: "proportion CI",
        prompt:
          "A bank tests the click-through rates of two mobile notification texts. Of 150 people who received Text A, 84 clicked. Of 140 people who received Text B, 60 clicked. Construct a 95% confidence interval for pA - pB.",
        answer: [
          "p̂₁ = 0.560, p̂₂ = 0.429, difference = 0.131.",
          "SE = √[0.56×0.44/150 + 0.429×0.571/140] = 0.058.",
          "ME = 1.96 × 0.058 = 0.114.",
          "95% CI = 0.131 ± 0.114 = (0.017, 0.246).",
          "Because the interval does not contain 0, p₁ appears to be higher."
        ]
      },
      {
        tag: "one-tailed",
        prompt:
          "A factory compares the mean packaging time of two packaging machines. For Machine A, 35 observations have a mean of 24.3 seconds and a standard deviation of 3.5. For Machine B, 32 observations have a mean of 26.1 seconds and a standard deviation of 4.2. At the 5% significance level, is Machine A's mean time lower?",
        answer: [
          "SE = √(3.5²/35 + 4.2²/32) = 0.95.",
          "z = (24.3 - 26.1) / 0.95 = -1.90.",
          "Left-tailed critical z = -1.645.",
          "-1.90 < -1.645.",
          "<span class='decision'>Reject H₀</span> Machine A's mean time is lower."
        ]
      },
      {
        tag: "paired t",
        prompt:
          "A teacher compares the practice test scores of the same 10 students before and after a review session. Score increases, after - before, are 6, 4, 8, 5, 7, 3, 6, 4, 5, and 7. At the 5% significance level, can we say the review session increases the mean score?",
        answer: [
          "d̄ = 5.50, sd = 1.58, n = 10.",
          "SE = 1.58 / √10 = 0.50.",
          "t = 5.50 / 0.50 = 11.00, df = 9.",
          "Right-tailed critical t ≈ 1.833.",
          "<span class='decision'>Reject H₀</span> The post-training increase is significant."
        ]
      }
    ]
  },
  {
    id: "chi-square-independence",
    title: "Chi-Square Independence / Homogeneity",
    subtitle: "Expected frequencies, degrees of freedom, χ² test statistic, and decision making.",
    importance: "Priority 2",
    example: {
      question:
        "An instructor wants to know whether having a regular study plan is related to passing the course. The results from 120 students are shown below. At the 5% significance level, are study plan status and passing status independent?",
      table: {
        caption: "Observed frequencies",
        columns: ["Passed", "Failed"],
        rows: [
          { label: "Has plan", values: [42, 18] },
          { label: "No plan", values: [28, 32] }
        ]
      },
      steps: [
        "First identify the variables: study plan status and passing status are both categorical.",
        "Because the data are in a two-way table, this is a chi-square independence test.",
        "H₀ says the two variables are independent; H₁ says they are related.",
        "Expected frequencies show what the table would look like if H₀ were true.",
        "Use E = (row total × column total) / grand total for every cell.",
        "Row totals are 60 and 60; column totals are 70 and 50; N = 120.",
        "For the first cell: E(Has plan, Passed) = 60×70/120 = 35.",
        "Repeating that gives the expected table: 35, 25, 35, 25.",
        "Now compare observed counts to expected counts with χ² = Σ(O - E)²/E.",
        "If observed and expected are very different, χ² becomes large and H₀ becomes unlikely.",
        "Here χ² = 6.72.",
        "The degrees of freedom come from table size: df = (rows - 1)(columns - 1) = (2 - 1)(2 - 1) = 1.",
        "For α = 0.05 and df = 1, critical χ² = 3.841.",
        "Because 6.72 > 3.841, reject H₀.",
        "Conclusion: study plan status and passing status are not independent.",
        "Use the same method for homogeneity too; the calculation is the same, but the wording becomes 'the distributions are the same' versus 'not the same'."
      ]
    },
    questions: [
      {
        tag: "independence",
        prompt: "A faculty office studies which class time students from two departments prefer. The table below shows whether selected students prefer morning, noon, or evening classes. At the 5% significance level, are department and preferred class time independent?",
        table: {
          caption: "Observed frequencies",
          columns: ["Morning", "Noon", "Evening"],
          rows: [
            { label: "Department A", values: [30, 20, 10] },
            { label: "Department B", values: [25, 25, 20] }
          ]
        },
        answer: [
          "Expected counts are approximately: A: 25.38, 20.77, 13.85; B: 29.62, 24.23, 16.15.",
          "χ² = 3.595.",
          "df = (2-1)(3-1) = 2; critical χ² = 5.991.",
          "<span class='decision no'>Fail to reject H₀</span> There is not enough evidence against independence."
        ]
      },
      {
        tag: "homogeneity",
        prompt: "A university measures whether students at three campuses are satisfied with cafeteria service. One hundred students are surveyed at each campus, and the results are shown in the table. At the 5% significance level, are the satisfaction distributions the same across campuses?",
        table: {
          caption: "Observed frequencies",
          columns: ["Satisfied", "Not satisfied"],
          rows: [
            { label: "Campus 1", values: [54, 46] },
            { label: "Campus 2", values: [63, 37] },
            { label: "Campus 3", values: [70, 30] }
          ]
        },
        answer: [
          "Each row total is 100; column totals are 187 and 113.",
          "Expected counts for each row are 62.33 and 37.67.",
          "χ² = 5.480, df = 2.",
          "Critical χ² = 5.991.",
          "<span class='decision no'>Fail to reject H₀</span> The campus distributions are not significantly different at the 5% level."
        ]
      },
      {
        tag: "independence",
        prompt: "A store wants to study which of two products customers choose by age group. The selected customers' age groups and product choices are given below. At the 5% significance level, are age group and product choice independent?",
        table: {
          caption: "Observed frequencies",
          columns: ["Product X", "Product Y"],
          rows: [
            { label: "18-25", values: [18, 12] },
            { label: "26-35", values: [22, 28] },
            { label: "36+", values: [30, 20] }
          ]
        },
        answer: [
          "Expected counts are approximately: 16.15, 13.85; 26.92, 23.08; 26.92, 23.08.",
          "χ² = 3.170.",
          "df = (3-1)(2-1) = 2; critical χ² = 5.991.",
          "<span class='decision no'>Fail to reject H₀</span> The independence assumption is not rejected."
        ]
      },
      {
        tag: "independence",
        prompt: "A school studies the relationship between students' gender and whether they are members of a sports club. Using the observed frequencies below, at the 5% significance level, are gender and club membership independent?",
        table: {
          caption: "Observed frequencies",
          columns: ["Member", "Not member"],
          rows: [
            { label: "Female", values: [40, 30] },
            { label: "Male", values: [35, 45] }
          ]
        },
        answer: [
          "Expected counts: 35, 35, 40, 40.",
          "χ² = 2.679.",
          "df = 1; critical χ² = 3.841.",
          "<span class='decision no'>Fail to reject H₀</span> There is no significant relationship."
        ]
      },
      {
        tag: "homogeneity",
        prompt: "A grocery chain checks whether the payment method distribution is the same in two branches. The numbers of cash, card, and online payments in Branch 1 and Branch 2 are shown below. At the 5% significance level, are the payment method distributions the same?",
        table: {
          caption: "Observed frequencies",
          columns: ["Cash", "Card", "Online"],
          rows: [
            { label: "Branch 1", values: [22, 18, 10] },
            { label: "Branch 2", values: [15, 25, 20] }
          ]
        },
        answer: [
          "Expected counts are approximately: Branch 1: 16.82, 19.55, 13.64; Branch 2: 20.18, 23.45, 16.36.",
          "χ² = 4.929.",
          "df = 2; critical χ² = 5.991.",
          "<span class='decision no'>Fail to reject H₀</span> There is not enough evidence to say the distributions are different."
        ]
      },
      {
        tag: "independence",
        prompt: "A training center compares exam success for students taking online education and face-to-face education. The table below shows the numbers of successful and unsuccessful students. At the 5% significance level, is there a relationship between education type and success status?",
        table: {
          caption: "Observed frequencies",
          columns: ["Successful", "Unsuccessful"],
          rows: [
            { label: "Online", values: [55, 25] },
            { label: "Face-to-face", values: [45, 35] }
          ]
        },
        answer: [
          "Expected counts: 50, 30, 50, 30.",
          "χ² = 2.667.",
          "df = 1; critical χ² = 3.841.",
          "<span class='decision no'>Fail to reject H₀</span> The relationship is not significant at the 5% level."
        ]
      },
      {
        tag: "independence",
        prompt: "An e-commerce company wants to know whether customer income level is related to purchase frequency. Customers in low and high income groups are classified as low, medium, or frequent purchasers. At the 5% significance level, are income level and purchase frequency independent?",
        table: {
          caption: "Observed frequencies",
          columns: ["Low", "Medium", "Frequent"],
          rows: [
            { label: "Low income", values: [12, 18, 30] },
            { label: "High income", values: [20, 25, 15] }
          ]
        },
        answer: [
          "Expected counts: 16.00, 21.50, 22.50; 16.00, 21.50, 22.50.",
          "χ² = 8.140.",
          "df = 2; critical χ² = 5.991.",
          "<span class='decision'>Reject H₀</span> Income level and purchase frequency are not independent."
        ]
      },
      {
        tag: "homogeneity",
        prompt: "A department chair studies whether class attendance rates are similar across three classes. Based on the attendance and non-attendance frequencies below, at the 5% significance level, are the attendance distributions the same across classes?",
        table: {
          caption: "Observed frequencies",
          columns: ["Attended", "Did not attend"],
          rows: [
            { label: "Class A", values: [28, 42] },
            { label: "Class B", values: [36, 24] },
            { label: "Class C", values: [30, 30] }
          ]
        },
        answer: [
          "Expected counts are approximately: A: 34.63, 35.37; B: 29.68, 30.32; C: 29.68, 30.32.",
          "χ² = 5.180.",
          "df = 2; critical χ² = 5.991.",
          "<span class='decision no'>Fail to reject H₀</span> The attendance distribution is not significantly different."
        ]
      },
      {
        tag: "homogeneity",
        prompt: "A retail company compares product return status across three stores. For each store, the counts for returned and not returned products are shown below. At the 5% significance level, are the return distributions the same across stores?",
        table: {
          caption: "Observed frequencies",
          columns: ["No return", "Returned"],
          rows: [
            { label: "Store 1", values: [45, 15] },
            { label: "Store 2", values: [30, 30] },
            { label: "Store 3", values: [25, 35] }
          ]
        },
        answer: [
          "Expected counts for each row are 33.33 and 26.67.",
          "χ² = 14.625.",
          "df = 2; critical χ² = 5.991.",
          "<span class='decision'>Reject H₀</span> Return distributions differ by store."
        ]
      },
      {
        tag: "independence",
        prompt: "An urban transportation study records which transportation type passengers prefer on weekdays and weekends. Bus, metro, and private car preferences are shown in the table. At the 5% significance level, are day type and transportation preference independent?",
        table: {
          caption: "Observed frequencies",
          columns: ["Bus", "Metro", "Car"],
          rows: [
            { label: "Weekday", values: [16, 24, 20] },
            { label: "Weekend", values: [30, 20, 10] }
          ]
        },
        answer: [
          "Expected counts: 23, 22, 15; 23, 22, 15.",
          "χ² = 7.958.",
          "df = 2; critical χ² = 5.991.",
          "<span class='decision'>Reject H₀</span> Day type and transportation preference are related."
        ]
      }
    ]
  },
  {
    id: "correlation",
    title: "Correlation (r)",
    subtitle: "Correlation coefficient, positive/negative relationship, R², and hypothesis testing for r.",
    importance: "Priority 3",
    example: {
      question:
        "A consulting company studies whether weekly training hours and employee performance scores have a linear relationship. Using the data for 5 employees below, find r, R², and the correlation test result. α=0.05.",
      table: {
        caption: "Data",
        columns: ["1", "2", "3", "4", "5"],
        rows: [
          { label: "x", values: [2, 4, 6, 8, 10] },
          { label: "y", values: [50, 55, 65, 70, 80] }
        ]
      },
      steps: [
        "First identify the problem type: each observation has an x value and a y value, and both are numerical.",
        "The question asks whether there is a linear relationship, so we use Pearson correlation r.",
        "Start by finding the centers: x̄ = 6 and ȳ = 64.",
        "Correlation is based on how x and y move away from their means together.",
        "Compute Sxx = Σ(x - x̄)² = 40 and Syy = Σ(y - ȳ)² = 570.",
        "Compute Sxy = Σ(x - x̄)(y - ȳ) = 150.",
        "Sxy is positive, so before even finishing, I expect r to be positive.",
        "r = Sxy / √(Sxx Syy) = 150 / √(40×570) = 0.993.",
        "Interpretation: r is close to +1, so the relationship is very strong and positive.",
        "R² = r² = 0.987, meaning about 98.7% of the variation in y is explained by the linear relationship with x.",
        "To test whether the population correlation is zero, use H₀: ρ = 0 and H₁: ρ ≠ 0 unless the question says one-sided.",
        "The test statistic is t = r√[(n-2)/(1-r²)] = 15.00 with df = n - 2 = 3.",
        "At α = 0.05, the two-tailed critical value is about ±3.182.",
        "Because 15.00 > 3.182, reject H₀.",
        "Use this pattern for all r questions: compute direction, strength, R², then test significance if asked."
      ]
    },
    questions: [
      {
        tag: "r",
        prompt: "A teacher studies whether students' weekly study hours are related to quiz scores. For 5 students, study hours are x: 1,2,3,4,5 and quiz scores are y: 2,3,5,4,6. At the 5% significance level, find r, R², and the test decision.",
        answer: [
          "r = 0.900.",
          "R² = 0.810; about 81% of the variation in y is explained by the linear relationship.",
          "t = 3.576, df = 3.",
          "Critical t ≈ ±3.182.",
          "<span class='decision'>Reject H₀</span> The positive correlation is significant."
        ]
      },
      {
        tag: "negative",
        prompt: "A vehicle fleet manager studies whether used-car resale value decreases as vehicle age increases. Vehicle ages are x: 2,3,5,6,8 and price scores are y: 90,85,78,75,70. Find r, R², and the test decision at the 5% level.",
        answer: [
          "r = -0.992.",
          "R² = 0.985.",
          "t = -13.937, df = 3.",
          "|t| > 3.182.",
          "<span class='decision'>Reject H₀</span> There is a very strong negative relationship."
        ]
      },
      {
        tag: "r test",
        prompt: "A cafe wants to know whether daily temperature is related to the number of cold drinks sold. Over 6 days, temperatures are x: 10,12,14,16,18,20 and sales are y: 30,35,39,44,48,52. Test the correlation at the 5% significance level.",
        answer: [
          "r = 0.999, R² = 0.998.",
          "n = 6, df = 4.",
          "t = 50.408.",
          "Critical t ≈ ±2.776.",
          "<span class='decision'>Reject H₀</span> The positive linear relationship is significant."
        ]
      },
      {
        tag: "negative",
        prompt: "A production line investigates whether daily non-failure operating time decreases as machine age increases. Machine ages are x: 3,4,5,6,7 and performance scores are y: 20,18,17,15,14. Find r, R², and interpret the result.",
        answer: [
          "r = -0.993.",
          "R² = 0.987.",
          "t = -15.000, df = 3.",
          "<span class='decision'>Reject H₀</span> As x increases, y clearly decreases."
        ]
      },
      {
        tag: "r",
        prompt: "An app analyzes whether sleep quality score decreases as screen time increases. Screen times are x: 1,3,4,6,8,9 and sleep scores are y: 8,7,6,5,3,2. Find r, R², and the test decision at the 5% level.",
        answer: [
          "r = -0.992.",
          "R² = 0.984.",
          "t = -15.727, df = 4.",
          "|t| > 2.776.",
          "<span class='decision'>Reject H₀</span> There is a strong negative correlation."
        ]
      },
      {
        tag: "r",
        prompt: "A sales manager looks for a relationship between the number of customer visits and weekly sales. Visit counts are x: 5,6,7,8,9,10 and sales are y: 12,15,14,18,20,22. Find r, R², and the test decision.",
        answer: [
          "r = 0.966.",
          "R² = 0.934.",
          "t = 7.514, df = 4.",
          "7.514 > 2.776.",
          "<span class='decision'>Reject H₀</span> The positive correlation is significant."
        ]
      },
      {
        tag: "r",
        prompt: "A laboratory studies whether fertilizer amount and plant height have a linear relationship. Fertilizer amounts are x: 2,4,5,7,9 and plant heights are y: 40,42,47,50,55. Find r, R², and the decision.",
        answer: [
          "r = 0.984.",
          "R² = 0.968.",
          "t = 9.454, df = 3.",
          "<span class='decision'>Reject H₀</span> There is a strong positive relationship."
        ]
      },
      {
        tag: "R²",
        prompt: "A company measures the relationship between training days and employee productivity scores. Training days are x: 1,2,4,5,7,8 and productivity scores are y: 20,22,25,23,29,31. Find R² and the test decision at the 5% level.",
        answer: [
          "r = 0.947.",
          "R² = 0.896; approximately 89.6% is explained.",
          "t = 5.880, df = 4.",
          "<span class='decision'>Reject H₀</span> The correlation is significant."
        ]
      },
      {
        tag: "r",
        prompt: "An advertising team wants to see whether advertising budget is related to the number of applications received. Budget scores are x: 6,8,10,12,14 and application counts are y: 40,42,45,47,51. Find r, R², and the decision.",
        answer: [
          "r = 0.993.",
          "R² = 0.985.",
          "t = 14.100, df = 3.",
          "<span class='decision'>Reject H₀</span> The positive relationship is significant."
        ]
      },
      {
        tag: "weak",
        prompt: "A researcher examines whether coffee consumption is related to short-term memory score. For 6 people, coffee cups are x: 1,2,3,4,5,6 and memory scores are y: 2,6,3,7,4,5. At the 5% significance level, is the correlation significant?",
        answer: [
          "r = 0.371.",
          "R² = 0.138.",
          "t = 0.800, df = 4.",
          "0.800 < 2.776.",
          "<span class='decision no'>Fail to reject H₀</span> The correlation is not significant."
        ]
      }
    ]
  },
  {
    id: "regression",
    title: "Regression Equation (ŷ = a + bx)",
    subtitle: "Simple regression practice with slope, intercept, prediction, residuals, and R².",
    importance: "Priority 4",
    example: {
      question:
        "A store wants to build a linear model between advertising spending and daily sales. Advertising spending scores are x: 2,4,6,8,10 and sales are y: 50,55,65,70,80. Build the regression line and predict sales when x=7.",
      steps: [
        "First decide the roles: x is the predictor, and y is the outcome we want to estimate.",
        "Because the question asks for a line and a prediction, this is simple linear regression.",
        "The model form is always ŷ = a + bx.",
        "The slope b tells how much the predicted y changes when x increases by 1.",
        "The intercept a is the predicted y when x = 0; sometimes it is useful mainly for building the equation.",
        "Start with the same centered quantities used in correlation: x̄ = 6, ȳ = 64, Sxx = 40, and Sxy = 150.",
        "Slope comes first because it describes the change rate: b = Sxy / Sxx = 150 / 40 = 3.75.",
        "Then find the intercept so the line passes through the point (x̄, ȳ): a = ȳ - b x̄ = 64 - 3.75×6 = 41.50.",
        "So the regression line is ŷ = 41.50 + 3.75x.",
        "Interpret the slope: each 1-unit increase in advertising score predicts 3.75 more sales.",
        "For prediction, substitute the requested x value into the equation.",
        "For x = 7, ŷ = 41.50 + 3.75×7 = 67.75.",
        "If a question asks for a residual, use residual = observed y - predicted ŷ.",
        "Use the same thinking for every regression question: identify x and y, compute b, compute a, write the line, then substitute or interpret."
      ]
    },
    questions: [
      {
        tag: "ŷ",
        prompt: "A bookstore wants to build a linear prediction model between the number of books displayed in the window and daily sales. Displayed books are x: 1,2,3,4,5 and sales are y: 3,5,7,10,11. Find the line ŷ = a + bx and predict for x=6.",
        answer: [
          "b = 2.10, a = 0.90.",
          "Regression line: ŷ = 0.90 + 2.10x.",
          "For x=6, ŷ = 0.90 + 12.60 = 13.50.",
          "R² = 0.984; the fit is very strong."
        ]
      },
      {
        tag: "slope",
        prompt: "A service company wants to model how the number of completed jobs changes as the number of technicians increases. Technician counts are x: 2,4,6,8 and completed jobs are y: 21,25,29,34. Build the regression line and predict for x=10.",
        answer: [
          "b = 2.15, a = 16.50.",
          "ŷ = 16.50 + 2.15x.",
          "For x=10, ŷ = 16.50 + 21.50 = 38.00.",
          "Slope interpretation: when x increases by 1, y increases by about 2.15."
        ]
      },
      {
        tag: "prediction",
        prompt: "A social media account builds a prediction model between weekly post count and new follower count. Post counts are x: 10,20,30,40,50 and new follower scores are y: 12,18,25,31,39. Write the regression equation and predict for x=60.",
        answer: [
          "b = 0.67, a = 4.90.",
          "ŷ = 4.90 + 0.67x.",
          "For x=60, ŷ = 4.90 + 40.20 = 45.10.",
          "R² = 0.998; the linear model is very strong."
        ]
      },
      {
        tag: "negative b",
        prompt: "A device company believes battery efficiency decreases as years of use increase. Years of use are x: 1,3,5,7,9 and efficiency scores are y: 52,50,47,43,40. Build the regression line and predict for x=11.",
        answer: [
          "b = -1.55, a = 54.15.",
          "ŷ = 54.15 - 1.55x.",
          "For x=11, ŷ = 54.15 - 17.05 = 37.10.",
          "Because the slope is negative, y decreases as x increases."
        ]
      },
      {
        tag: "ŷ",
        prompt: "A restaurant assumes a linear relationship between the number of employees and the number of tables prepared during dinner service. Employee counts are x: 4,6,8,10,12 and table counts are y: 18,22,25,29,33. Find the regression line and the prediction for x=14.",
        answer: [
          "b = 1.85, a = 10.60.",
          "ŷ = 10.60 + 1.85x.",
          "For x=14, ŷ = 10.60 + 25.90 = 36.50.",
          "R² = 0.998."
        ]
      },
      {
        tag: "intercept",
        prompt: "A workshop wants to model the relationship between weekly training minutes and the number of parts completed by workers. Training minutes are x: 5,10,15,20 and parts completed are y: 7,9,14,18. Find a, b, and the prediction for x=25.",
        answer: [
          "b = 0.76, a = 2.50.",
          "ŷ = 2.50 + 0.76x.",
          "For x=25, ŷ = 2.50 + 19.00 = 21.50.",
          "Intercept interpretation: when x=0, the model predicts 2.50."
        ]
      },
      {
        tag: "negative",
        prompt: "A warehouse believes customer satisfaction decreases as product waiting time increases. Waiting times are x: 2,5,8,11 and satisfaction scores are y: 30,27,25,20. Build the regression line and predict for x=14.",
        answer: [
          "b = -1.067, a = 32.433.",
          "ŷ = 32.433 - 1.067x.",
          "For x=14, ŷ ≈ 17.50.",
          "R² = 0.966; there is a strong negative linear relationship."
        ]
      },
      {
        tag: "residual",
        prompt: "A teacher builds a prediction model for study hours and practice exam scores. Study hours are x: 1,2,3,4,5,6 and scores are y: 10,11,13,14,16,17. Build the model and find the residual for the observation where x=4.",
        answer: [
          "b = 1.457, a = 8.400.",
          "ŷ = 8.400 + 1.457x.",
          "For x=4, ŷ = 8.400 + 5.828 = 14.228.",
          "Because the observed y is 14, residual = y - ŷ = -0.228."
        ]
      },
      {
        tag: "prediction",
        prompt: "A production manager wants to make a linear prediction between machine maintenance time and weekly production increase. Maintenance times are x: 3,6,9,12,15 and production increases are y: 20,24,27,31,35. Build the regression equation and predict for x=18.",
        answer: [
          "b = 1.233, a = 16.300.",
          "ŷ = 16.300 + 1.233x.",
          "For x=18, ŷ ≈ 38.49.",
          "R² = 0.998."
        ]
      },
      {
        tag: "decreasing",
        prompt: "A product's quality score is observed to decrease as shelf age increases. Shelf ages are x: 2,4,6,8,10 and quality scores are y: 100,92,85,78,70. Build the regression line and predict the quality score for x=12.",
        answer: [
          "b = -3.70, a = 107.20.",
          "ŷ = 107.20 - 3.70x.",
          "For x=12, ŷ = 107.20 - 44.40 = 62.80.",
          "Slope interpretation: when x increases by 1, y decreases by about 3.70."
        ]
      }
    ]
  },
  {
    id: "goodness-of-fit",
    title: "Chi-Square Goodness of Fit",
    subtitle: "Observed and expected frequencies, χ² calculation, and decision making.",
    importance: "Priority 5",
    example: {
      question:
        "A school cafeteria claims that students prefer four drink types equally. In one day, the observed sales counts are 28, 22, 30, and 20. At the 5% significance level, test whether the preferences fit an equal distribution.",
      steps: [
        "First identify the setup: there is one categorical variable with four categories.",
        "The question gives a claimed distribution, so this is a chi-square goodness-of-fit test.",
        "H₀ says the real distribution follows the claimed distribution; H₁ says it does not.",
        "Here the claim is 'equally', so each category should have probability 1/4.",
        "Total N = 100, so each expected count is E = 100×1/4 = 25.",
        "Goodness-of-fit always compares observed counts O with expected counts E using χ² = Σ(O - E)²/E.",
        "χ² = (28-25)²/25 + (22-25)²/25 + (30-25)²/25 + (20-25)²/25.",
        "χ² = 9/25 + 9/25 + 25/25 + 25/25 = 2.72.",
        "Degrees of freedom are based on the number of categories: df = k - 1 = 4 - 1 = 3.",
        "For α = 0.05 and df = 3, critical χ² = 7.815.",
        "Decision logic: a large χ² means the observed counts are too far from the expected counts.",
        "Here 2.72 < 7.815, so fail to reject H₀.",
        "Conclusion: the observed distribution is not significantly different from an equal distribution.",
        "Use this pattern for every goodness-of-fit question: turn probabilities into expected counts, compute χ², find df = k - 1, compare, then conclude in context."
      ]
    },
    questions: [
      {
        tag: "equal",
        prompt: "A consulting firm assumes customers will choose four service packages equally. Among 160 customers, the observed choices are 42, 38, 50, and 30. At the 5% significance level, do the choices fit an equal distribution?",
        answer: [
          "Total N=160; expected counts: 40, 40, 40, 40.",
          "χ² = 5.200.",
          "df = 3; critical χ² = 7.815.",
          "<span class='decision no'>Fail to reject H₀</span> There is no significant departure from an equal distribution."
        ]
      },
      {
        tag: "proportional",
        prompt: "A mobile app expects user device types to follow proportions of 20%, 30%, and 50%. In a sample of 100 users, the observed frequencies are 18, 32, and 50. At the 5% significance level, does the observed distribution fit the expected proportions?",
        answer: [
          "Total N=100; expected counts: 20, 30, 50.",
          "χ² = 0.333.",
          "df = 2; critical χ² = 5.991.",
          "<span class='decision no'>Fail to reject H₀</span> The distribution fits the expected proportions."
        ]
      },
      {
        tag: "equal",
        prompt: "A survey company expects four answer choices to be selected equally. The responses from 200 participants are 55, 45, 40, and 60. At the 5% significance level, is the response distribution equal?",
        answer: [
          "N=200; expected counts: 50, 50, 50, 50.",
          "χ² = 5.000.",
          "df = 3; critical χ² = 7.815.",
          "<span class='decision no'>Fail to reject H₀</span> The equal-distribution assumption is not rejected."
        ]
      },
      {
        tag: "proportional",
        prompt: "A supermarket expects weekly shopping baskets to be distributed across four product groups with proportions 30%, 20%, 30%, and 20%. In 100 baskets, the observed counts are 30, 24, 26, and 20. Perform a goodness-of-fit test at the 5% level.",
        answer: [
          "N=100; expected counts: 30, 20, 30, 20.",
          "χ² = 1.333.",
          "df = 3; critical χ² = 7.815.",
          "<span class='decision no'>Fail to reject H₀</span> The fit is not rejected."
        ]
      },
      {
        tag: "proportional",
        prompt: "A university expects student transportation preferences to be 50% public transit, 30% walking/biking, and 20% private car. In a sample of 200 students, the observed counts are 90, 70, and 40. At the 5% significance level, does the distribution match the expected proportions?",
        answer: [
          "N=200; expected counts: 100, 60, 40.",
          "χ² = 2.667.",
          "df = 2; critical χ² = 5.991.",
          "<span class='decision no'>Fail to reject H₀</span> There is no significant departure from the expected distribution."
        ]
      },
      {
        tag: "proportional",
        prompt: "A call center expects calls to arrive by difficulty level in proportions of 10%, 20%, 30%, and 40%. In 100 calls, the observed frequencies are 12, 20, 28, and 40. Test the fit to the expected distribution at the 5% level.",
        answer: [
          "N=100; expected counts: 10, 20, 30, 40.",
          "χ² = 0.533.",
          "df = 3; critical χ² = 7.815.",
          "<span class='decision no'>Fail to reject H₀</span> The distribution is consistent with the expected pattern."
        ]
      },
      {
        tag: "decision",
        prompt: "An e-commerce site predicts that orders will be distributed across four delivery options in proportions of 40%, 30%, 20%, and 10%. In 100 orders, the observed counts are 35, 25, 20, and 20. At the 5% level, does this distribution fit the expected proportions?",
        answer: [
          "N=100; expected counts: 40, 30, 20, 10.",
          "χ² = 11.458.",
          "df = 3; critical χ² = 7.815.",
          "<span class='decision'>Reject H₀</span> The observed distribution differs from the expected distribution."
        ]
      },
      {
        tag: "tam uyum",
        prompt: "A restaurant expects orders by main dish type to arrive in proportions of 40%, 30%, 20%, and 10%. In 150 orders, the observed frequencies are 60, 45, 30, and 15. Perform a goodness-of-fit test at the 5% significance level.",
        answer: [
          "N=150; expected counts: 60, 45, 30, 15.",
          "χ² = 0.000.",
          "df = 3.",
          "<span class='decision no'>Fail to reject H₀</span> The observed distribution is exactly the same as expected."
        ]
      },
      {
        tag: "equal",
        prompt: "A club assumes new members will choose four event types equally. Among 100 new members, the observed choices are 15, 40, 20, and 25. At the 5% significance level, do the choices fit an equal distribution?",
        answer: [
          "N=100; expected counts: 25, 25, 25, 25.",
          "χ² = 14.000.",
          "df = 3; critical χ² = 7.815.",
          "<span class='decision'>Reject H₀</span> The equal-distribution assumption is rejected."
        ]
      },
      {
        tag: "proportional",
        prompt: "A hospital expects appointment reasons to be distributed as 15% check-up, 15% consultation, 30% testing, and 40% treatment. In 100 appointments, the observed counts are 14, 16, 25, and 45. At the 5% level, does the observed distribution fit the expected proportions?",
        answer: [
          "N=100; expected counts: 15, 15, 30, 40.",
          "χ² = 1.592.",
          "df = 3; critical χ² = 7.815.",
          "<span class='decision no'>Fail to reject H₀</span> The distribution is consistent with the expected proportions."
        ]
      }
    ]
  }
];

const app = document.querySelector("#app");
const nav = document.querySelector("#topicNav");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function tableMarkup(table) {
  if (!table) return "";
  const headers = table.columns.map((column) => `<th scope="col">${escapeHtml(column)}</th>`).join("");
  const rows = table.rows
    .map((row) => {
      const cells = row.values.map((value) => `<td>${escapeHtml(value)}</td>`).join("");
      return `<tr><th scope="row">${escapeHtml(row.label)}</th>${cells}</tr>`;
    })
    .join("");

  return `
    <table class="data-table">
      <caption>${escapeHtml(table.caption || "Data")}</caption>
      <thead><tr><th scope="col"></th>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderAnswer(answer) {
  return answer.map((step) => `<li>${step}</li>`).join("");
}

function drawingBoardMarkup(boardId) {
  return `
    <div class="scratch-board" data-board="${escapeHtml(boardId)}">
      <div class="board-toolbar" aria-label="Scratch board tools">
        <button class="board-tool is-active" type="button" data-tool="pen" aria-pressed="true">Pen</button>
        <button class="board-tool" type="button" data-tool="eraser" aria-pressed="false">Eraser</button>
        <input class="board-color" type="color" value="#182235" aria-label="Pen color" />
        <input class="board-size" type="range" min="2" max="18" value="4" aria-label="Stroke width" />
        <button class="board-tool" type="button" data-tool="clear">Clear</button>
      </div>
      <canvas class="drawing-board" aria-label="Blank scratch board for solving this question"></canvas>
    </div>
  `;
}

function render() {
  nav.innerHTML = sections
    .map((section, index) => `<a href="#${section.id}">${index + 1}. ${escapeHtml(section.title)}</a>`)
    .join("");

  app.innerHTML = sections
    .map((section) => {
      const questions = section.questions
        .map(
          (question, index) => `
            <article class="question-card">
              <h3>
                <span>Question ${index + 1}</span>
                <span class="tag">${escapeHtml(question.tag)}</span>
              </h3>
              <p class="question-text">${escapeHtml(question.prompt)}</p>
              ${tableMarkup(question.table)}
              ${drawingBoardMarkup(`${section.id}-${index + 1}`)}
              <button class="answer-toggle" type="button" aria-expanded="false">
                <span aria-hidden="true">⌄</span>
                <span>Show answer</span>
              </button>
              <div class="answer" hidden>
                <ol>${renderAnswer(question.answer)}</ol>
              </div>
            </article>
          `
        )
        .join("");

      const exampleLines = section.example.steps
        .map(
          (step) => `
            <div class="write-line" data-text="${escapeHtml(step)}">
              <span class="ink"></span><span class="cursor" aria-hidden="true"></span>
            </div>
          `
        )
        .join("");

      return `
        <section class="topic-section" id="${section.id}">
          <div class="section-head">
            <div>
              <h2>${escapeHtml(section.title)}</h2>
              <p>${escapeHtml(section.subtitle)}</p>
            </div>
            <span class="importance">${escapeHtml(section.importance)}</span>
          </div>

          <div class="example-panel" data-example>
            <div class="example-head">
              <h3>Worked example</h3>
              <button class="replay-button" type="button">Replay</button>
            </div>
            <p class="question-text">${escapeHtml(section.example.question)}</p>
            ${tableMarkup(section.example.table)}
            <div class="notebook" aria-live="polite">${exampleLines}</div>
          </div>

          <div class="question-grid">${questions}</div>
        </section>
      `;
    })
    .join("");
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function typeLine(line, text, reducedMotion) {
  const ink = line.querySelector(".ink");
  ink.textContent = "";

  if (reducedMotion) {
    ink.textContent = text;
    return;
  }

  line.classList.add("is-writing");
  for (let index = 0; index < text.length; index += 1) {
    ink.textContent += text[index];
    const char = text[index];
    await sleep(char === " " ? 5 : 12);
  }
  line.classList.remove("is-writing");
}

let activeExampleRun = 0;

async function playExample(panel) {
  activeExampleRun += 1;
  const runId = activeExampleRun;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lines = [...panel.querySelectorAll(".write-line")];

  lines.forEach((line) => {
    line.classList.remove("is-writing");
    line.querySelector(".ink").textContent = "";
  });

  for (const line of lines) {
    if (runId !== activeExampleRun) return;
    await typeLine(line, line.dataset.text || "", reducedMotion);
    await sleep(reducedMotion ? 0 : 80);
  }
}

function setupDrawingBoards() {
  document.querySelectorAll(".scratch-board").forEach((board) => {
    const canvas = board.querySelector(".drawing-board");
    const context = canvas.getContext("2d");
    const colorInput = board.querySelector(".board-color");
    const sizeInput = board.querySelector(".board-size");
    const penButton = board.querySelector('[data-tool="pen"]');
    const eraserButton = board.querySelector('[data-tool="eraser"]');
    const clearButton = board.querySelector('[data-tool="clear"]');
    let tool = "pen";
    let drawing = false;
    let lastPoint = null;
    let activePointerId = null;
    const ignoredPointers = new Set();

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      const snapshot = document.createElement("canvas");
      snapshot.width = canvas.width;
      snapshot.height = canvas.height;
      if (canvas.width && canvas.height) {
        snapshot.getContext("2d").drawImage(canvas, 0, 0);
      }

      canvas.width = Math.max(1, Math.floor(rect.width * ratio));
      canvas.height = Math.max(1, Math.floor(rect.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.lineCap = "round";
      context.lineJoin = "round";

      if (snapshot.width && snapshot.height) {
        context.drawImage(snapshot, 0, 0, snapshot.width / ratio, snapshot.height / ratio);
      }
    }

    function setTool(nextTool) {
      tool = nextTool;
      penButton.classList.toggle("is-active", tool === "pen");
      eraserButton.classList.toggle("is-active", tool === "eraser");
      penButton.setAttribute("aria-pressed", String(tool === "pen"));
      eraserButton.setAttribute("aria-pressed", String(tool === "eraser"));
    }

    function getPoint(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    }

    function drawTo(point) {
      if (!lastPoint) {
        lastPoint = point;
      }
      context.beginPath();
      context.moveTo(lastPoint.x, lastPoint.y);
      context.lineTo(point.x, point.y);
      context.strokeStyle = tool === "eraser" ? "#ffffff" : colorInput.value;
      context.lineWidth = tool === "eraser" ? Number(sizeInput.value) * 2.4 : Number(sizeInput.value);
      context.stroke();
      lastPoint = point;
    }

    function isDrawablePointer(event) {
      if (event.pointerType === "pen" || event.pointerType === "mouse") {
        return true;
      }

      // Some browsers report stylus-like input with tiny touch geometry. Large
      // touch contacts are fingers or palm input and should never draw.
      if (event.pointerType === "touch") {
        return event.width <= 8 && event.height <= 8 && event.pressure > 0;
      }

      return false;
    }

    function finishPointer(event) {
      ignoredPointers.delete(event.pointerId);

      if (activePointerId === event.pointerId) {
        drawing = false;
        lastPoint = null;
        activePointerId = null;
        document.body.classList.remove("is-board-drawing");
      }

      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }
    }

    function clearBoard() {
      const rect = canvas.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height);
    }

    resizeCanvas();

    penButton.addEventListener("click", () => setTool("pen"));
    eraserButton.addEventListener("click", () => setTool("eraser"));
    clearButton.addEventListener("click", clearBoard);

    canvas.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      canvas.setPointerCapture(event.pointerId);

      if (!isDrawablePointer(event)) {
        ignoredPointers.add(event.pointerId);
        return;
      }

      if (drawing) {
        ignoredPointers.add(event.pointerId);
        return;
      }

      drawing = true;
      activePointerId = event.pointerId;
      lastPoint = getPoint(event);
      document.body.classList.add("is-board-drawing");
      drawTo(lastPoint);
    });

    canvas.addEventListener("pointermove", (event) => {
      event.preventDefault();
      if (ignoredPointers.has(event.pointerId) || !drawing || activePointerId !== event.pointerId) return;
      drawTo(getPoint(event));
    });

    canvas.addEventListener("pointerup", (event) => {
      event.preventDefault();
      finishPointer(event);
    });

    canvas.addEventListener("pointercancel", (event) => {
      finishPointer(event);
    });

    canvas.addEventListener("lostpointercapture", () => {
      drawing = false;
      lastPoint = null;
      activePointerId = null;
      document.body.classList.remove("is-board-drawing");
    });

    ["touchstart", "touchmove", "touchend", "touchcancel"].forEach((eventName) => {
      canvas.addEventListener(eventName, (event) => event.preventDefault(), { passive: false });
    });

    window.addEventListener("resize", resizeCanvas);
  });
}

function setupIPadPalmGuard() {
  const platform = navigator.platform || "";
  const userAgent = navigator.userAgent || "";
  const isIPad =
    /iPad/.test(userAgent) ||
    (platform === "MacIntel" && navigator.maxTouchPoints && navigator.maxTouchPoints > 1);

  if (!isIPad) return;

  document.body.classList.add("is-ipad-pencil-mode");

  function blockTouch(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function blockFingerPointer(event) {
    if (event.pointerType === "touch") {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  ["touchstart", "touchmove", "touchend", "touchcancel"].forEach((eventName) => {
    document.addEventListener(eventName, blockTouch, { capture: true, passive: false });
  });

  ["pointerdown", "pointermove", "pointerup", "pointercancel"].forEach((eventName) => {
    document.addEventListener(eventName, blockFingerPointer, { capture: true });
  });

  document.addEventListener("selectionstart", blockTouch, { capture: true });
  document.addEventListener("contextmenu", blockTouch, { capture: true });
}

function wireInteractions() {
  setupIPadPalmGuard();

  document.querySelectorAll(".answer-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      answer.hidden = expanded;
      button.querySelector("span:last-child").textContent = expanded ? "Show answer" : "Hide answer";
      button.querySelector("span:first-child").textContent = expanded ? "⌄" : "⌃";
    });
  });

  document.querySelectorAll("[data-example]").forEach((panel) => {
    panel.querySelector(".replay-button").addEventListener("click", () => playExample(panel));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.played) {
          entry.target.dataset.played = "true";
          playExample(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll("[data-example]").forEach((panel) => observer.observe(panel));

  setupDrawingBoards();
}

render();
wireInteractions();
