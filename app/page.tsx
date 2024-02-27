"use client";
import { DataPage } from "@/components/datapage";
import { FormPage } from "@/components/formpage";
import { StepperItem, StepperKey } from "@/types";
import { useState } from "react";

const stepperLabels = Object.keys(StepperKey);
const stepperKeys = Object.values(StepperKey);

export default function Home() {
  const [state, setState] = useState<Record<StepperKey, StepperItem[]> | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);

  const handleNext = () => {
    setCurrentStep((prevStep) =>
      Math.min(prevStep + 1, stepperKeys.length - 1)
    );
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  const resetState = () => {
    setState(null);
    setCurrentStep(0);
    setActiveStepIndex(-1);
  };
  const currentData = state ? state[stepperKeys[currentStep]] : [];
  const label = stepperLabels[currentStep];
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4 md:p-24 md:pt-4 w-full scroll-smooth">
      {!state && (
        <FormPage
          updateState={(state: Record<StepperKey, StepperItem[]>) =>
            setState(state)
          }
          activeStepIndex={activeStepIndex}
          setActiveSteps={setActiveStepIndex}
        />
      )}
      {state && (
        <DataPage
          label={label}
          isPreviousDisabled={currentStep < 1}
          isNextDisabled={currentStep >= stepperKeys.length - 1}
          onNext={handleNext}
          onPrevious={handlePrevious}
          data={currentData}
          onHome={resetState}
        />
      )}
    </main>
  );
}
