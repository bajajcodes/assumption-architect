import { cn } from "@/lib/utils";
import { CircleIcon } from "./crcleicon";

export function ProgressBar(props: { steps: number; activeStepIndex: number }) {
  return (
    <div className="flex flex-col items-center pr-4">
      {Array.from({ length: props.steps }).map((_, index) => (
        <>
          <CircleIcon
            key={`circleicon__${index}`}
            className={cn("text-gray-500 h-6 w-6 bg-gray-500 rounded-full", {
              "text-green-500 bg-green-500":
                index <= props.activeStepIndex && props.activeStepIndex > -1,
            })}
          />
          {index !== props.steps - 1 && (
            <div className="w-px h-24 bg-gray-300" />
          )}
        </>
      ))}
    </div>
  );
}
