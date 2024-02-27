import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { List } from "./list";
import { Button } from "./ui/button";

export function DataPage({
  onNext,
  onPrevious,
  onHome,
  data,
  label,
  isNextDisabled,
  isPreviousDisabled,
}: {
  onNext: () => void;
  onPrevious: () => void;
  onHome: () => void;
  data: Array<Record<"key" | "label" | "value", string>>;
  label: string;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}) {
  return (
    <section className="pb-10 w-full bg-[#FAFAFA] max-w-screen-md m-0">
      <div
        className={cn("mb-8 sticky top-0 z-50 bg-[#FAFAFA]", {
          "flex gap-2 flex-wrap justify-between": isNextDisabled,
        })}
      >
        <div>
          <h1 className="text-3xl font-bold">{label}</h1>
          <p className="mt-2 text-lg text-gray-600">
            Navigate in between prompt responses trough the stepper compoenent.
          </p>
        </div>
        {isNextDisabled && (
          <Button variant="outline" size="icon" onClick={onHome}>
            <Home className="w-4 h-4" />
          </Button>
        )}
      </div>
      <div className="">
        <List data={data} />
        <div className="flex items-center justify-between mt-4 z-50 sticky bottom-0 bg-[#FAFAFA]">
          <Button
            onClick={onPrevious}
            disabled={isPreviousDisabled}
            className=" w-full max-w-64"
          >
            Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={isNextDisabled}
            className=" w-full max-w-64"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
