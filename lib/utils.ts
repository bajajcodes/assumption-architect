import {
  Response1,
  Response2,
  Response2Keys,
  Response3,
  Response3Key,
  Response4,
  Response5,
  ResponseKey1,
  StepperItem,
  StepperKey,
} from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function response1ToString(response: Response1): string {
  const result: string[] = [];
  result.push(
    `${ResponseKey1.ProblemHypothesis}: ${
      response[ResponseKey1.ProblemHypothesis]
    }`
  );
  result.push(
    `${ResponseKey1.CustomerHypothesis}: ${
      response[ResponseKey1.CustomerHypothesis]
    }`
  );
  result.push(
    `${ResponseKey1.SolutionHypothesis}: ${
      response[ResponseKey1.SolutionHypothesis]
    }`
  );
  result.push(
    `${ResponseKey1.EarlyAdopterHypothesis}: ${
      response[ResponseKey1.EarlyAdopterHypothesis]
    }`
  );

  return result.join("\n");
}

function response2ToString(response: Response2): string {
  let result = "";
  Object.keys(Response2Keys).forEach((key) => {
    const responseKey = Response2Keys[key as keyof typeof Response2Keys];
    const responseValue = response[responseKey];
    result += `${responseKey}: ${responseValue}\n`;
  });
  return result.trim();
}

function response3ToString(response: Response3): string {
  let result = "";
  Object.keys(Response3Key).forEach((key) => {
    const responseKey = Response3Key[key as keyof typeof Response3Key];
    const responseValue = response[responseKey];
    result += `${responseKey}: ${responseValue}\n`;
  });
  return result.trim();
}

export function generatePrompt(
  problem: string,
  customer: string,
  solution: string
): string {
  return `
As 'Assumption Architect', your role is to assist users in formulating falsifiable hypotheses, testing them through research, and collecting evidence to try to invalidate the Problem, Customer, and Solution foundational assumptions for their businesses. This is done based on the Lean Startup methodology. So your tasks at hand are to:

1. Carefully read the Customer, Problem, and Solution statements prompted and generate a falsifiable hypothesis for each in the following format:

Problem Hypothesis: "Customers in [target market] experience [specific problem] and require a solution."

Customer Hypothesis: "Our primary customer segment is [specific segment] who have [specific characteristics/needs]."

Solution Hypothesis: "Our product/service [description] will effectively solve the problem by [specific solution features]."

If there is a clear Early-Adopter, create an Early-Adopter Hypothesis: "Our Early-Adopter is [specific segment] because [specific assumption for early adoption of the solution by the customer segment]."

Each hypothesis must address:

1.1. the key, most relevant, or most impactful problem they are addressing
1.2. who is the key customer, and if there is a clearly identified early adopter (does not need to be the same as the key customer).
1.3. the core solution they propose that best solves that specific problem (if it has many solutions in one, isolate the most impactful)

Your output will always be only a JSON list of falsifiable hypotheses, along with each relevant paragraph as a JSON in the following structure:

{
"Problem Hypothesis": "",
"Customer Hypothesis": "",
"Solution Hypothesis": "",
"Early-Adopter hypothesis": "",
}

Problem
${problem}

Customer
${customer}

Solution
${solution}
`;
}

export function generateAnalysisPrompt(response1: Response1): string {
  return `
Response 1:
${response1ToString(response1)}

Conduct a detailed analysis to evaluate the validity of each hypothesis with an initial focus on seeking evidence for invalidation. Use data and studies from established, credible sources such as academic journals, official industry reports, and major research institutions, up until 2023.

1. Systematically search these sources for evidence that disputes each hypothesis. Summarize key findings that challenge the hypotheses.
2. Assign a confidence level percentage to each piece of evidence based on its strength in invalidating the hypothesis. If the evidence is strong, mark the hypothesis as 'Confirming Invalidation'.
3. Only if no substantial invalidating evidence is found, or if the confidence level for invalidation is not convincingly strong, then search for evidence that supports the hypothesis.
4. Summarize any supporting evidence found and assess its strength. Provide a confidence level percentage for validation.
5. Depending on the strength of the supporting evidence, mark the hypothesis as either 'Confirming Validation' or 'Keep Testing'.
6. Provide a reasoning to justify the outcome for each hypothesis.

Your output will always be only a JSON list of validation evidence, along with each relevant paragraph as a JSON in the following structure:

{
"Customer Evidence 1": "",
"Customer Evidence 1 Source": "",
"Customer Evidence 2": "",
"Customer Evidence 2 Source": "",
"Customer Confidence Level": "",
"Customer Invalidation Reasoning": "",
"Customer Validation Status": "",
"Problem Evidence 1": "",
"Problem Evidence 1 Source": "",
"Problem Evidence 2": "",
"Problem Evidence 2 Source": "",
"Problem Confidence Level": "",
"Problem Invalidation Reasoning": "",
"Problem Validation Status": "",
"Solution Evidence 1": "",
"Solution Evidence 1 Source": "",
"Solution Evidence 2": "",
"Solution Evidence 2 Source": "",
"Solution Confidence Level": "",
"Solution Invalidation Reasoning": "",
"Solution Validation Status": "",
"Early-Adopter Confidence Level": "",
"Early-Adopter Invalidation Reasoning": "",
"Early-Adopter Validation Status": "",
}
`;
}

export function generateFitAnalysisPrompt(
  response1: Response1,
  response2: Response2
): string {
  return `
Response 1:
${response1ToString(response1)}

Response 2:
${response2ToString(response2)}

Now, based on previous outputs:

1. If Problem and Customer are both "Confirming Validation":
a. State "Problem-Customer Fit achieved" (if not, "Problem-Customer Fit not achieved").
b. Provide a reasoning for why the company can be considered to have achieved (or not) Problem-Customer Fit based on the evidence found.

2. If Problem and Solution are both "Confirming Validation":
a. State "Problem-Solution Fit achieved" (if not, "Problem-Solution Fit not achieved").
b. Provide a reasoning for why the company can be considered to have (or not) achieved Problem-Solution Fit based on the evidence found.

Your output will always be only a JSON list of validation evidence, along with each relevant paragraph as a JSON in the following structure:

{
"Problem-Customer Fit Validation": "",
"Problem-Customer Fit Analysis": "",
"Problem-Solution Fit Validation": "",
"Problem-Solution Fit Analysis": "",
}
`;
}

export function generateLeanCanvasPrompt(
  problem: string,
  customer: string,
  solution: string,
  response1: Response1,
  response2: Response2,
  response3: Response3
): string {
  return `
Problem
${problem}
Customer:
${customer}
Solution
${solution}

Response 1:
${response1ToString(response1)}

Response 2:
${response2ToString(response2)}

Response 3:
${response3ToString(response3)}


Now, based on previous inputs and outputs:

1. Create a UVP for the business

2. Create a high-level concept ('x for y' e.g., youtube = flickr for videos). One liner.

3. List the 3 main channels most likely to reach the early adopter.
3.1. Provide 2 industry-specific channel suggestions, if applicable, and name them. E.g., Events: Conference XYZ; Social Media: XYZ London Facebook Group
3.2. Provide an estimate amount for each channel's CAC.

4. List potential 3-4 revenue streams

5. List 5-10 key items for the expected cost structure with a percentage breakdown. Group them by CAPEX and OPEX.

6. List the key metrics that need to be tracked until product-market fit.

7. Research the web, identify and name:
7.1. my industry's TAM, providing a clear number,
7.2. my industry's SAM, providing a clear number,
7.3. The SAM's CAGR, providing a clear number.


Your output will always be only a JSON list of lean canvas data, along with each relevant paragraph as a JSON in the following structure:

{
"UVP": "",
"High-level Concept": "",
"Key Channel 1": "",
"Key Channel 1 Suggestion 1": "",
"Key Channel 1 Suggestion 2": "",
"CAC 1": "",
"Key Channel 2": "",
"Key Channel 2 Suggestion 1": "",
"Key Channel 2 Suggestion 2": "",
"CAC 2": "",
"Key Channel 3": "",
"Key Channel 3 Suggestion 1": "",
"Key Channel 3 Suggestion 2": "",
"CAC 3": "",
"Potential Revenue Stream 1": "",
"Potential Revenue Stream 2": "",
"Potential Revenue Stream 3": "",
"Potential Revenue Stream 4": "",
"CAPEX Cost 1": "",
"CAPEX Cost 1 Percentage": "",
"CAPEX Cost 2": "",
"CAPEX Cost 2 Percentage": "",
"CAPEX Cost 3": "",
"CAPEX Cost 3 Percentage": "",
"CAPEX Cost 4": "",
"CAPEX Cost 4 Percentage": "",
"CAPEX Cost 5": "",
"CAPEX Cost 5 Percentage": "",
"OPEX Cost 1": "",
"OPEX Cost 1 Percentage": "",
"OPEX Cost 2": "",
"OPEX Cost 2 Percentage": "",
"OPEX Cost 3": "",
"OPEX Cost 3 Percentage": "",
"OPEX Cost 4": "",
"OPEX Cost 4 Percentage": "",
"OPEX Cost 5": "",
"OPEX Cost 5 Percentage": "",
"Key Metric 1": "",
"Key Metric 2": "",
"Key Metric 3": "",
"Key Metric 4": "",
"Key Metric 5": "",
"TAM": "",
"TAM Size": "",
"SAM": "",
"SAM Size": "",
"SAM CAGR": "",
}
`;
}

export function generateCompetitorAnalysisPrompt(
  problem: string,
  customer: string,
  solution: string,
  response1: Response1,
  response2: Response2,
  response3: Response3
): string {
  return `
Problem
${problem}

Customer
${customer}

Solution
${solution}

Response 1:
${response1ToString(response1)}

Response 2:
${response2ToString(response2)}

Response 3:
${response3ToString(response3)}

Now, based on previous inputs and outputs:
1. Research the web and run a simple competitor analysis with my main competition. Use real data. List the three main competitors found, their names, country, and their USP.

2. Suggest the 'unfair advantage' for the business compared to its competition.

Your output will always be only a JSON list of lean canvas data, along with each relevant paragraph as a JSON in the following structure:

{
"Competitor 1": "",
"Competitor 1 Country": "",
"Competitor 1 USP": "",
"Competitor 2": "",
"Competitor 2 Country": "",
"Competitor 2 USP":"",
"Competitor 3": "",
"Competitor 3 Country": "",
"Competitor 3 USP": "",
"Unfair Advantage": ""
}
`;
}

export function convertResponsesToStepperItems(
  response1: Response1,
  response2: Response2,
  response3: Response3,
  response4: Response4,
  response5: Response5
): Record<StepperKey, StepperItem[]> {
  const stepperItems: Record<StepperKey, StepperItem[]> = {
    [StepperKey.HypothesisGeneration]: Object.entries(response1).map(
      ([key, value]) => ({
        label: key,
        key: key,
        value: value,
      })
    ),
    [StepperKey.HypothesisValidation]: Object.entries(response2).map(
      ([key, value]) => ({
        label: key,
        key: key,
        value: typeof value === "string" ? value : JSON.stringify(value), // Because some values might not be strings
      })
    ),
    [StepperKey.FitAnalysis]: Object.entries(response3).map(([key, value]) => ({
      label: key,
      key: key,
      value: value,
    })),
    [StepperKey.LeanCanvasPreparation]: Object.entries(response4).map(
      ([key, value]) => ({
        label: key,
        key: key,
        value: typeof value === "string" ? value : JSON.stringify(value),
      })
    ),
    [StepperKey.CompetitorAnalysis]: Object.entries(response5).map(
      ([key, value]) => ({
        label: key,
        key: key,
        value: value,
      })
    ),
  };

  return stepperItems;
}
