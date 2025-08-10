'use server';
/**
 * @fileOverview Generates AI-powered property maintenance tips.
 *
 * - generatePropertyMaintenanceTip - A function that generates a property maintenance tip.
 * - GeneratePropertyMaintenanceTipInput - The input type for the generatePropertyMaintenanceTip function.
 * - GeneratePropertyMaintenanceTipOutput - The return type for the generatePropertyMaintenanceTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePropertyMaintenanceTipInputSchema = z.object({
  topic: z
    .string()
    .optional()
    .describe('The specific area of property maintenance to get a tip for.'),
});
export type GeneratePropertyMaintenanceTipInput = z.infer<
  typeof GeneratePropertyMaintenanceTipInputSchema
>;

const GeneratePropertyMaintenanceTipOutputSchema = z.object({
  tip: z.string().describe('The generated property maintenance tip.'),
});
export type GeneratePropertyMaintenanceTipOutput = z.infer<
  typeof GeneratePropertyMaintenanceTipOutputSchema
>;

export async function generatePropertyMaintenanceTip(
  input: GeneratePropertyMaintenanceTipInput
): Promise<GeneratePropertyMaintenanceTipOutput> {
  return generatePropertyMaintenanceTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePropertyMaintenanceTipPrompt',
  input: {schema: GeneratePropertyMaintenanceTipInputSchema},
  output: {schema: GeneratePropertyMaintenanceTipOutputSchema},
  prompt: `You are an expert property maintenance advisor.

  Generate a helpful and actionable property maintenance tip. Focus on providing practical advice that users can easily implement.

  {{#if topic}}
  The tip should be related to the following topic: {{topic}}
  {{/if}}
  `,
});

const generatePropertyMaintenanceTipFlow = ai.defineFlow(
  {
    name: 'generatePropertyMaintenanceTipFlow',
    inputSchema: GeneratePropertyMaintenanceTipInputSchema,
    outputSchema: GeneratePropertyMaintenanceTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
