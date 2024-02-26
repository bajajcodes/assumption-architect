import { LeadCollectionForm } from "@/components/leadcollectionform";
import { cn } from "@/lib/utils";
import React from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Assumption Architect</h1>
          <p className="mt-2 text-lg text-gray-600">
            Insert below your 3 main business assumptions
          </p>
        </div>
        <div className="flex">
          <ProgressBar steps={3} activeStepIndex={1} />
          <div className="w-3/4">
            <LeadCollectionForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function ProgressBar(props: { steps: number; activeStepIndex: number }) {
  return (
    <div className="flex flex-col items-center pr-4">
      {Array.from({ length: props.steps }).map((_, index) => (
        <>
          <CircleIcon
            key={index}
            className={cn("text-gray-500 h-6 w-6 bg-gray-500 rounded-full", {
              "text-green-500 bg-green-500": index === props.activeStepIndex,
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

function CircleIcon(props: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
