"use server";

import {
  generatePropertyMaintenanceTip,
  type GeneratePropertyMaintenanceTipInput,
} from "@/ai/flows/generate-property-maintenance-tip";

interface AiTipState {
  tip?: string;
  error?: string;
}

export async function generateTipAction(
  prevState: AiTipState,
  formData: FormData
): Promise<AiTipState> {
  const topic = formData.get("topic") as string;
  const input: GeneratePropertyMaintenanceTipInput = {
    topic: topic || undefined,
  };

  try {
    const result = await generatePropertyMaintenanceTip(input);
    if (result.tip) {
      return { tip: result.tip };
    }
    return { error: "Failed to generate a tip. Please try again." };
  } catch (e) {
    console.error(e);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
