import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-12 px-6 rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Improve Your Property?</h2>
            <p className="max-w-3xl text-lg text-primary-foreground/80">
              Don't wait for small issues to become big problems. Contact us today for a no-obligation consultation and see how we can help you maintain your property's value and appeal.
            </p>
            <Button asChild size="lg" className="text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="#contact">Get Your Free Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
