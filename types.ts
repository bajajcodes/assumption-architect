export enum ResponseKey1 {
  ProblemHypothesis = "Problem Hypothesis",
  CustomerHypothesis = "Customer Hypothesis",
  SolutionHypothesis = "Solution Hypothesis",
  EarlyAdopterHypothesis = "Early-Adopter Hypothesis",
}

export interface Response1 {
  [ResponseKey1.ProblemHypothesis]: string;
  [ResponseKey1.CustomerHypothesis]: string;
  [ResponseKey1.SolutionHypothesis]: string;
  [ResponseKey1.EarlyAdopterHypothesis]: string;
}

export enum Response2Keys {
  CustomerEvidence1 = "Customer Evidence 1",
  CustomerEvidence1Source = "Customer Evidence 1 Source",
  CustomerEvidence2 = "Customer Evidence 2",
  CustomerEvidence2Source = "Customer Evidence 2 Source",
  CustomerConfidenceLevel = "Customer Confidence Level",
  CustomerInvalidationReasoning = "Customer Invalidation Reasoning",
  CustomerValidationStatus = "Customer Validation Status",
  ProblemEvidence1 = "Problem Evidence 1",
  ProblemEvidence1Source = "Problem Evidence 1 Source",
  ProblemEvidence2 = "Problem Evidence 2",
  ProblemEvidence2Source = "Problem Evidence 2 Source",
  ProblemConfidenceLevel = "Problem Confidence Level",
  ProblemInvalidationReasoning = "Problem Invalidation Reasoning",
  ProblemValidationStatus = "Problem Validation Status",
  SolutionEvidence1 = "Solution Evidence 1",
  SolutionEvidence1Source = "Solution Evidence 1 Source",
  SolutionEvidence2 = "Solution Evidence 2",
  SolutionEvidence2Source = "Solution Evidence 2 Source",
  SolutionConfidenceLevel = "Solution Confidence Level",
  SolutionInvalidationReasoning = "Solution Invalidation Reasoning",
  SolutionValidationStatus = "Solution Validation Status",
  EarlyAdopterConfidenceLevel = "Early-Adopter Confidence Level",
  EarlyAdopterInvalidationReasoning = "Early-Adopter Invalidation Reasoning",
  EarlyAdopterValidationStatus = "Early-Adopter Validation Status",
}

export type ValidationStatus = "Confirming Invalidation" | "Keep Testing";
export type ConfidenceLevel = "75%" | "60%" | "70%" | "50%"; // Add more as required

export type Response2 = {
  [Response2Keys.CustomerEvidence1]: string;
  [Response2Keys.CustomerEvidence1Source]: string;
  [Response2Keys.CustomerEvidence2]: string;
  [Response2Keys.CustomerEvidence2Source]: string;
  [Response2Keys.CustomerConfidenceLevel]: ConfidenceLevel;
  [Response2Keys.CustomerInvalidationReasoning]: string;
  [Response2Keys.CustomerValidationStatus]: ValidationStatus;
  [Response2Keys.ProblemEvidence1]: string;
  [Response2Keys.ProblemEvidence1Source]: string;
  [Response2Keys.ProblemEvidence2]: string;
  [Response2Keys.ProblemEvidence2Source]: string;
  [Response2Keys.ProblemConfidenceLevel]: ConfidenceLevel;
  [Response2Keys.ProblemInvalidationReasoning]: string;
  [Response2Keys.ProblemValidationStatus]: ValidationStatus;
  [Response2Keys.SolutionEvidence1]: string;
  [Response2Keys.SolutionEvidence1Source]: string;
  [Response2Keys.SolutionEvidence2]: string;
  [Response2Keys.SolutionEvidence2Source]: string;
  [Response2Keys.SolutionConfidenceLevel]: ConfidenceLevel;
  [Response2Keys.SolutionInvalidationReasoning]: string;
  [Response2Keys.SolutionValidationStatus]: ValidationStatus;
  [Response2Keys.EarlyAdopterConfidenceLevel]: ConfidenceLevel;
  [Response2Keys.EarlyAdopterInvalidationReasoning]: string;
  [Response2Keys.EarlyAdopterValidationStatus]: ValidationStatus;
};

export enum Response3Key {
  ProblemCustomerFitValidation = "Problem-Customer Fit Validation",
  ProblemCustomerFitAnalysis = "Problem-Customer Fit Analysis",
  ProblemSolutionFitValidation = "Problem-Solution Fit Validation",
  ProblemSolutionFitAnalysis = "Problem-Solution Fit Analysis",
}

export interface Response3 {
  [Response3Key.ProblemCustomerFitValidation]: string;
  [Response3Key.ProblemCustomerFitAnalysis]: string;
  [Response3Key.ProblemSolutionFitValidation]: string;
  [Response3Key.ProblemSolutionFitAnalysis]: string;
}

export enum Response4Keys {
  UVP = "UVP",
  HighLevelConcept = "High-level Concept",
  KeyChannel1 = "Key Channel 1",
  KeyChannel1Suggestion1 = "Key Channel 1 Suggestion 1",
  KeyChannel1Suggestion2 = "Key Channel 1 Suggestion 2",
  CAC1 = "CAC 1",
  KeyChannel2 = "Key Channel 2",
  KeyChannel2Suggestion1 = "Key Channel 2 Suggestion 1",
  KeyChannel2Suggestion2 = "Key Channel 2 Suggestion 2",
  CAC2 = "CAC 2",
  KeyChannel3 = "Key Channel 3",
  KeyChannel3Suggestion1 = "Key Channel 3 Suggestion 1",
  KeyChannel3Suggestion2 = "Key Channel 3 Suggestion 2",
  CAC3 = "CAC 3",
  PotentialRevenueStream1 = "Potential Revenue Stream 1",
  PotentialRevenueStream2 = "Potential Revenue Stream 2",
  PotentialRevenueStream3 = "Potential Revenue Stream 3",
  PotentialRevenueStream4 = "Potential Revenue Stream 4",
  CAPEXCost1 = "CAPEX Cost 1",
  CAPEXCost1Percentage = "CAPEX Cost 1 Percentage",
  CAPEXCost2 = "CAPEX Cost 2",
  CAPEXCost2Percentage = "CAPEX Cost 2 Percentage",
  CAPEXCost3 = "CAPEX Cost 3",
  CAPEXCost3Percentage = "CAPEX Cost 3 Percentage",
  CAPEXCost4 = "CAPEX Cost 4",
  CAPEXCost4Percentage = "CAPEX Cost 4 Percentage",
  CAPEXCost5 = "CAPEX Cost 5",
  CAPEXCost5Percentage = "CAPEX Cost 5 Percentage",
  OPEXCost1 = "OPEX Cost 1",
  OPEXCost1Percentage = "OPEX Cost 1 Percentage",
  OPEXCost2 = "OPEX Cost 2",
  OPEXCost2Percentage = "OPEX Cost 2 Percentage",
  OPEXCost3 = "OPEX Cost 3",
  OPEXCost3Percentage = "OPEX Cost 3 Percentage",
  OPEXCost4 = "OPEX Cost 4",
  OPEXCost4Percentage = "OPEX Cost 4 Percentage",
  OPEXCost5 = "OPEX Cost 5",
  OPEXCost5Percentage = "OPEX Cost 5 Percentage",
  KeyMetric1 = "Key Metric 1",
  KeyMetric2 = "Key Metric 2",
  KeyMetric3 = "Key Metric 3",
  KeyMetric4 = "Key Metric 4",
  KeyMetric5 = "Key Metric 5",
  TAM = "TAM",
  TAMSize = "TAM Size",
  SAM = "SAM",
  SAMSize = "SAM Size",
  SAMCAGR = "SAM CAGR",
}

export type Percentage = `${number}%`; // might need to define a more strict percentage type if needed.

export type Response4 = {
  [Response4Keys.UVP]: string;
  [Response4Keys.HighLevelConcept]: string;
  [Response4Keys.KeyChannel1]: string;
  [Response4Keys.KeyChannel1Suggestion1]: string;
  [Response4Keys.KeyChannel1Suggestion2]: string;
  [Response4Keys.CAC1]: string;
  [Response4Keys.KeyChannel2]: string;
  [Response4Keys.KeyChannel2Suggestion1]: string;
  [Response4Keys.KeyChannel2Suggestion2]: string;
  [Response4Keys.CAC2]: string;
  [Response4Keys.KeyChannel3]: string;
  [Response4Keys.KeyChannel3Suggestion1]: string;
  [Response4Keys.KeyChannel3Suggestion2]: string;
  [Response4Keys.CAC3]: string;
  [Response4Keys.PotentialRevenueStream1]: string;
  [Response4Keys.PotentialRevenueStream2]: string;
  [Response4Keys.PotentialRevenueStream3]: string;
  [Response4Keys.PotentialRevenueStream4]: string;
  [Response4Keys.CAPEXCost1]: string;
  [Response4Keys.CAPEXCost1Percentage]: Percentage;
  [Response4Keys.CAPEXCost2]: string;
  [Response4Keys.CAPEXCost2Percentage]: Percentage;
  [Response4Keys.CAPEXCost3]: string;
  [Response4Keys.CAPEXCost3Percentage]: Percentage;
  [Response4Keys.CAPEXCost4]: string;
  [Response4Keys.CAPEXCost4Percentage]: Percentage;
  [Response4Keys.CAPEXCost5]: string;
  [Response4Keys.CAPEXCost5Percentage]: Percentage;
  [Response4Keys.OPEXCost1]: string;
  [Response4Keys.OPEXCost1Percentage]: Percentage;
  [Response4Keys.OPEXCost2]: string;
  [Response4Keys.OPEXCost2Percentage]: Percentage;
  [Response4Keys.OPEXCost3]: string;
  [Response4Keys.OPEXCost3Percentage]: Percentage;
  [Response4Keys.OPEXCost4]: string;
  [Response4Keys.OPEXCost4Percentage]: Percentage;
  [Response4Keys.OPEXCost5]: string;
  [Response4Keys.OPEXCost5Percentage]: Percentage;
  [Response4Keys.KeyMetric1]: string;
  [Response4Keys.KeyMetric2]: string;
  [Response4Keys.KeyMetric3]: string;
  [Response4Keys.KeyMetric4]: string;
  [Response4Keys.KeyMetric5]: string;
  [Response4Keys.TAM]: string;
  [Response4Keys.TAMSize]: string;
  [Response4Keys.SAM]: string;
  [Response4Keys.SAMSize]: string;
  [Response4Keys.SAMCAGR]: string;
};

export enum Response5Key {
  Competitor1 = "Competitor 1",
  Competitor1Country = "Competitor 1 Country",
  Competitor1USP = "Competitor 1 USP",
  Competitor2 = "Competitor 2",
  Competitor2Country = "Competitor 2 Country",
  Competitor2USP = "Competitor 2 USP",
  Competitor3 = "Competitor 3",
  Competitor3Country = "Competitor 3 Country",
  Competitor3USP = "Competitor 3 USP",
  UnfairAdvantage = "Unfair Advantage",
}

export interface Response5 {
  [Response5Key.Competitor1]: string;
  [Response5Key.Competitor1Country]: string;
  [Response5Key.Competitor1USP]: string;
  [Response5Key.Competitor2]: string;
  [Response5Key.Competitor2Country]: string;
  [Response5Key.Competitor2USP]: string;
  [Response5Key.Competitor3]: string;
  [Response5Key.Competitor3Country]: string;
  [Response5Key.Competitor3USP]: string;
  [Response5Key.UnfairAdvantage]: string;
}
