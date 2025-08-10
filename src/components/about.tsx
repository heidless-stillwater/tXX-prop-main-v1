import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <Image
              src="https://placehold.co/600x500.png"
              alt="Team working"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
              data-ai-hint="maintenance team"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">About Us</div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Your Partner in Property Care</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              At PropertyPro, we believe that a well-maintained property is a happy property. Founded on the principles of reliability, quality, and exceptional customer service, we've been serving the London area with pride. Our team of skilled professionals is equipped to handle all your maintenance needs, ensuring your space is always at its best.
            </p>
            <p className="text-muted-foreground text-lg">
              We're more than just a service; we're your partners in preserving the value and comfort of your property. We are committed to excellence and dedicated to delivering results you can depend on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
