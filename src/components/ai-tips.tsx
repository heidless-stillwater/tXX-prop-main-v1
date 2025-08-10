"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Lightbulb, LoaderCircle, Sparkles } from "lucide-react";
import { generateTipAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Tip
        </>
      )}
    </Button>
  );
}

export function AiTips() {
  const initialState = { tip: "Your AI-generated tip will appear here. Enter a topic below or get a random tip!" };
  const [state, formAction] = useFormState(generateTipAction, initialState);

  return (
    <section id="ai-tips" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">AI Pro Tips</div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Instant Maintenance Wisdom</h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Leverage our AI-powered tool to get instant, helpful tips on any property maintenance topic. Just type a keyword and get expert advice.
          </p>
        </div>
        <div className="mx-auto max-w-3xl pt-12">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="bg-accent p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="flex-1 space-y-1">
                    <CardTitle className="text-xl font-headline">AI-Generated Tip</CardTitle>
                    <CardDescription>
                        {state.error ? (
                            <span className="text-destructive">{state.error}</span>
                        ) : (
                            state.tip
                        )}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="flex flex-col sm:flex-row gap-4">
                <Input
                  name="topic"
                  placeholder="e.g., 'winter plumbing', 'garden care', 'roofing'"
                  className="flex-1 text-base"
                />
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
