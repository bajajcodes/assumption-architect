import { cn } from "@/lib/utils";

export interface StepProps {
  stepNumber: number;
  title: string;
  description?: string;
  isActive: boolean;
}

const Step = ({
  stepNumber,
  title,
  description,
  isActive,
}: {
  title: string;
  description?: string;
  isActive: boolean;
  stepNumber: number;
}) => {
  const activeClasses = "flex flex-col items-center text-blue-600";
  const inactiveClasses = "flex flex-col items-center text-gray-400";
  const circleClasses = isActive
    ? "flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white"
    : "flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-400 rounded-full";
  const lineClasses = isActive
    ? "border-t-2 border-blue-600"
    : "border-t-2 border-gray-400";

  return (
    <div className={isActive ? activeClasses : inactiveClasses}>
      <div className={circleClasses}>{stepNumber}</div>
      <div className={cn("flex-auto", lineClasses)} />
      <div className="flex flex-col items-center text-center px-4">
        <div className="text-sm font-semibold text-gray-600">{title}</div>
        {description && (
          <div className="text-xs text-gray-500">{description}</div>
        )}
      </div>
    </div>
  );
};

export function MultiStepComponent({ steps }: { steps: Array<StepProps> }) {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <>
          <Step key={index} {...step} stepNumber={index + 1} />
          {index < steps.length - 1 && (
            <div className="h-0.5 bg-gray-300 w-8" />
          )}
        </>
      ))}
    </div>
  );
}
