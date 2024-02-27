import {
  convertResponsesToStepperItems,
  generateAnalysisPrompt,
  generateCompetitorAnalysisPrompt,
  generateFitAnalysisPrompt,
  generateLeanCanvasPrompt,
  generatePrompt,
} from "@/lib/utils";
import {
  Response1,
  Response2,
  Response3,
  Response4,
  Response5,
  StepperItem,
  StepperKey,
} from "@/types";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

interface Prompt {
  role: string;
  content: string;
}

const GPT_MODEL = "gpt-4-1106-preview";

const projectDetails = {
  customer: `Not yet defined. Identifying potential customers interested in purchasing the product obtained from sewage waste can be a challenge. Also, the location of the treatment and transformation plant for sewage waste can influence the profitability and logistics of the project. The availability of adequate infrastructure and accessibility to potential clients is crucial.`,
  problem: `This is more about the exploration of an opportunity than solving a problem. This initiative seeks to minimize the environmental impact of the utility company by converting waste into valuable and profitable resources.`,
  solution: `This project is based on obtaining a subproduct from sewage treatment plant waste. The product obtained is in a liquid state, and there are some questions regarding how to go to the market. Some other questions that arise are: eco certification, permits, etc.`,
};

async function getGPTResponse(promptContent: string) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: GPT_MODEL,
      messages: [
        {
          role: "user",
          content: promptContent,
        },
      ],
      response_format: { type: "json_object" },
    });
    const content = chatCompletion.choices[0].message.content;
    if (!content) return null;
    return JSON.parse(content);
  } catch (error) {
    throw error;
  }
}

export async function runAnalysis(
  projectDetails: Record<"problem" | "customer" | "solution", string>
): Promise<Record<StepperKey, StepperItem[]>> {
  try {
    const intialPrompt = generatePrompt(
      projectDetails.problem,
      projectDetails.customer,
      projectDetails.solution
    );
    const intialPromptResponse = (await getGPTResponse(
      intialPrompt
    )) as Response1;
    const analysisPrompt = generateAnalysisPrompt(intialPromptResponse);
    const analysisPromptResponse = (await getGPTResponse(
      analysisPrompt
    )) as Response2;
    const fitAnalysisPrompt = generateFitAnalysisPrompt(
      intialPromptResponse,
      analysisPromptResponse
    );
    const fitAnalysisResponse = (await getGPTResponse(
      fitAnalysisPrompt
    )) as Response3;
    const leanCanvasPrompt = generateLeanCanvasPrompt(
      projectDetails.problem,
      projectDetails.customer,
      projectDetails.solution,
      intialPromptResponse,
      analysisPromptResponse,
      fitAnalysisResponse
    );
    const leanCanvasResponse = (await getGPTResponse(
      leanCanvasPrompt
    )) as Response4;
    const competitorAnalysisPrompt = generateCompetitorAnalysisPrompt(
      projectDetails.problem,
      projectDetails.customer,
      projectDetails.solution,
      intialPromptResponse,
      analysisPromptResponse,
      fitAnalysisResponse
    );
    const competitorAnalysisResponse = (await getGPTResponse(
      competitorAnalysisPrompt
    )) as Response5;
    const stepperItems = convertResponsesToStepperItems(
      intialPromptResponse,
      analysisPromptResponse,
      fitAnalysisResponse,
      leanCanvasResponse,
      competitorAnalysisResponse
    );
    return stepperItems;
  } catch (error) {
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await runAnalysis(body);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return NextResponse.json({ error: error.response.data }, { status: 500 });
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return NextResponse.json(
        { error: "An error occurred during your request." },
        { status: 500 }
      );
    }
  }
}

export async function GET() {
  return NextResponse.json("Hey from /api/ai", { status: 200 });
}
