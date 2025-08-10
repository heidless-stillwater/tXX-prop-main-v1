import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wrench, Paintbrush, Plug, Droplets, LayoutGrid, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "General Repairs",
    description: "From leaky faucets to broken fixtures, we handle all your general repair needs promptly and efficiently.",
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-primary" />,
    title: "Painting & Decorating",
    description: "Refresh your space with our professional interior and exterior painting services for a flawless finish.",
  },
  {
    icon: <Plug className="w-10 h-10 text-primary" />,
    title: "Electrical Services",
    description: "Safe and certified electrical work, including installations, repairs, and safety inspections.",
  },
  {
    icon: <Droplets className="w-10 h-10 text-primary" />,
    title: "Plumbing Solutions",
    description: "Comprehensive plumbing services to ensure your systems are running smoothly without any drips or clogs.",
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-primary" />,
    title: "Tiling & Flooring",
    description: "Expert installation and repair for a wide range of flooring and tile options to beautify your property.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Preventative Maintenance",
    description: "Customized maintenance plans to proactively address issues and keep your property in top condition.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">Our Services</div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Comprehensive Maintenance Solutions</h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a wide range of services to cover every aspect of property maintenance. Whatever your needs, we have the expertise to get the job done right.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-lg">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
