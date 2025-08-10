import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-card pt-20 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 md:gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-headline font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Reliable Property Maintenance,
              <span className="block text-primary">Done Right.</span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground md:text-xl">
              From routine upkeep to emergency repairs, PropertyPro is your trusted partner for a safe, clean, and well-maintained property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="text-lg">
                <Link href="#contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="https://storage.googleapis.com/heidless_case_studies/c-life-coach/images-live/career-coaching.jpg"
              alt="Property Maintenance"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-2xl"
              data-ai-hint="house exterior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
