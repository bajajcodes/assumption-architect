"use server";

async function getBussinessAsumptions(
  prevState: { problem: string; customer: string; solution: string },
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData.entries());
  const customer = rawFormData["customer"] as string;
  const problem = rawFormData["problem"] as string;
  const solution = rawFormData["solution"] as string;
  try {
    const response = await fetch("http://localhost:3000/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({ customer, problem, solution }),
      },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
    return { success: true, ...data };
  } catch (error: any) {
    console.error({ error });
    return {
      success: false,
    };
  }
}

export { getBussinessAsumptions };
