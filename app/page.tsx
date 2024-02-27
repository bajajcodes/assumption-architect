"use client";
import { LeadCollectionForm } from "@/components/leadcollectionform";
import { List } from "@/components/list";
import { Button } from "@/components/ui/button";
import { StepperItem, StepperKey } from "@/types";
import { useState } from "react";

export default function Home() {
  const stepperLabels = Object.keys(StepperKey);
  const stepperKeys = Object.values(StepperKey);
  const [state, setState] = useState<Record<StepperKey, StepperItem[]> | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    setCurrentStep((prevStep) =>
      Math.min(prevStep + 1, stepperKeys.length - 1)
    );
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  const currentData = state ? state[stepperKeys[currentStep]] : [];
  const label = stepperLabels[currentStep];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!state && (
        <FormPage
          updateState={(state: Record<StepperKey, StepperItem[]>) =>
            setState(state)
          }
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
        />
      )}
    </main>
  );
}

function FormPage({ updateState }: { updateState: (state: any) => void }) {
  return (
    <section className="py-10 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Assumption Architect</h1>
        <p className="mt-2 text-lg text-gray-600">
          Insert below your 3 main business assumptions
        </p>
      </div>
      <div className="flex">
        {/* <ProgressBar steps={3} activeStepIndex={1} /> */}
        <div className="w-3/4">
          <LeadCollectionForm updateState={updateState} />
        </div>
      </div>
    </section>
  );
}

function DataPage({
  onNext,
  onPrevious,
  data,
  label,
  isNextDisabled,
  isPreviousDisabled,
}: {
  onNext: () => void;
  onPrevious: () => void;
  data: Array<Record<"key" | "label" | "value", string>>;
  label: string;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}) {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{label}</h1>
        <p className="mt-2 text-lg text-gray-600">
          Navigate in between prompt responses trough the stepper compoenent.
        </p>
      </div>
      <List data={data} />
      <div className="flex items-center justify-between mt-4">
        <Button onClick={onPrevious} disabled={isPreviousDisabled}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={isNextDisabled}>
          Next
        </Button>
      </div>
    </section>
  );
}
