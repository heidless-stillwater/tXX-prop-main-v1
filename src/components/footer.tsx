import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">
              Your reliable partner for comprehensive property maintenance and care.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-lg">Contact Info</h4>
            <div className="grid gap-2 text-muted-foreground">
              <a href="mailto:test@test.com" className="hover:text-primary">Email: test@test.com</a>
              <a href="tel:1234567890" className="hover:text-primary">Phone: 1234 567 890</a>
              <p>Address: Woodberry Down, London N4 2TG</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-lg">Quick Links</h4>
            <div className="grid gap-2 text-muted-foreground">
              <Link href="#about" className="hover:text-primary">About Us</Link>
              <Link href="#services" className="hover:text-primary">Services</Link>
              <Link href="#contact" className="hover:text-primary">Contact</Link>
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-semibold text-lg">Stay Updated</h4>
            <p className="text-muted-foreground">Subscribe to our newsletter for tips and offers.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PropertyPro. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
