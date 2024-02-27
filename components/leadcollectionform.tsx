"use client";

import { getBussinessAsumptions } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StepperItem, StepperKey } from "@/types";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  problem: "",
  customer: "",
  solution: "",
};

export function LeadCollectionForm(props: {
  updateState: (state: Record<StepperKey, StepperItem[]>) => void;
  setActiveSteps: (value: number) => void;
  isSubmitBtndisabled?: boolean;
}) {
  const [state, formAction] = useFormState(
    getBussinessAsumptions,
    initialState
  );
  const { pending, data } = useFormStatus();
  const formRef = useRef<HTMLFormElement | null>(null);

  const updateActiveSteps = () => {
    const form = formRef.current;
    const allInputs = form ? Array.from(form.querySelectorAll("textarea")) : [];
    const filledInputs = allInputs.filter((input) => input.value.trim() !== "");
    props.setActiveSteps(filledInputs.length - 1);
  };

  useEffect(() => {
    if (!state.success) {
      return;
    }
    formRef.current?.reset();
    const { success, ...data } = state;
    props.updateState(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.success]);

  return (
    <form
      className="w-full flex flex-col gap-4"
      action={formAction}
      ref={formRef}
      onChange={updateActiveSteps}
    >
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
          disabled={pending}
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
          disabled={pending}
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
          disabled={pending}
        />
      </div>
      <SubmitButton isDisabled={props.isSubmitBtndisabled} />
    </form>
  );
}

function SubmitButton(props: { isDisabled?: boolean }) {
  const { pending, data } = useFormStatus();
  return (
    <div className="flex justify-end">
      <Button aria-disabled={pending} disabled={pending || props.isDisabled}>
        Analyze
      </Button>
    </div>
  );
}
