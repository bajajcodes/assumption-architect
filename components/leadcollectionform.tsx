"use client";

import { getBussinessAsumptions } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  problem: "",
  customer: "",
  solution: "",
};

export function LeadCollectionForm() {
  const [state, formAction] = useFormState(
    getBussinessAsumptions,
    initialState
  );

  console.log({ state });

  return (
    <form className="space-y-6" action={formAction}>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="customer"
        >
          Who is your customer?
        </label>
        <Textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id="customer"
          placeholder="Describe who is your target customer?"
          required
          name="customer"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="problem"
        >
          What problem do you solve for them?
        </label>
        <Textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id="problem"
          name="problem"
          placeholder="Describe your problem?"
          required
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="solution"
        >
          What is your proposed solution?
        </label>
        <Textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id="solution"
          name="solution"
          placeholder="Describe your solution?"
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending, data } = useFormStatus();
  console.log({ pending, data });
  return (
    <div className="flex justify-end">
      <Button aria-disabled={pending} disabled={pending}>
        Analyze
      </Button>
    </div>
  );
}
