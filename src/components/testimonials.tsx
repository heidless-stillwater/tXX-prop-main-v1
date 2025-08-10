import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Homeowner",
    text: "PropertyPro has been a lifesaver! Their team is professional, punctual, and does fantastic work. My house has never been in better shape. I highly recommend their maintenance plan.",
    avatar: "SL",
  },
  {
    name: "John D.",
    role: "Landlord",
    text: "As a landlord with multiple properties, I need a reliable maintenance partner. PropertyPro is that partner. They are responsive, and their quality of work is consistently high. A pleasure to work with.",
    avatar: "JD",
  },
  {
    name: "Emily R.",
    role: "Business Owner",
    text: "The team at PropertyPro handles all the maintenance for our office space. Their preventative approach has saved us from costly repairs. They are an invaluable asset to our business operations.",
    avatar: "ER",
  },
  {
    name: "Michael B.",
    role: "Property Manager",
    text: "I've worked with many maintenance companies, and PropertyPro stands out for their communication and expertise. They make my job easier and keep my tenants happy. Can't ask for more.",
    avatar: "MB",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">Testimonials</div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're proud to have earned the trust of our clients. Here’s what they have to say about their experience with PropertyPro.
          </p>
        </div>
        <div className="mx-auto max-w-4xl pt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-background">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <p className="text-xl italic text-foreground mb-6">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} />
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold font-headline">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
