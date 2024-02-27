import { LeadCollectionForm } from "./leadcollectionform";
import { ProgressBar } from "./progressbar";

export function FormPage({
  updateState,
  activeStepIndex,
  setActiveSteps,
}: {
  updateState: (state: any) => void;
  activeStepIndex: number;
  setActiveSteps: (value: number) => void;
}) {
  return (
    <section className="py-10 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Assumption Architect</h1>
        <p className="mt-2 text-lg text-gray-600">
          Insert below your 3 main business assumptions
        </p>
      </div>
      <div className="flex max-w-screen-md">
        <ProgressBar steps={3} activeStepIndex={activeStepIndex} />
        <LeadCollectionForm
          updateState={updateState}
          setActiveSteps={setActiveSteps}
          isSubmitBtndisabled={activeStepIndex < 2}
        />
      </div>
    </section>
  );
}
