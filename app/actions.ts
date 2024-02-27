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
    const body = JSON.stringify({
      customer: customer,
      problem: problem,
      solution: solution,
    });
    const response = await fetch(`${process.env["API_BASE_URL"]}/api/ai`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
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
