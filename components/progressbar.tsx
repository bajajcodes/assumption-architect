import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CircleIcon } from "./crcleicon";

export function ProgressBar(props: { steps: number; activeStepIndex: number }) {
  const [items, setItems] = useState<Array<{ id: string; name: string }>>([]);

  useEffect(() => {
    const items = Array.from({ length: props.steps }).map((_, index) => ({
      id: crypto.randomUUID(),
      name: `circleIcon__${index}`,
    }));
    setItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center pr-4">
      {items.map((item, index) => (
        <>
          <CircleIcon
            key={item.id}
            className={cn("text-gray-500 h-6 w-6 bg-gray-500 rounded-full", {
              "text-assumption bg-assumption":
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
