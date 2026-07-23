

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-muted px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-primary">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold text-foreground">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a question, want to place a custom cake order, or need help
            with your celebration? Get in touch with us today.
          </p>
        </div>


        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="rounded-3xl border bg-card p-10 shadow-lg">

            <h2 className="text-3xl font-bold text-foreground">
              Get in Touch
            </h2>

            <p className="mt-4 text-muted-foreground">
              We'd love to hear from you. Reach out to us anytime for custom cake
              orders or any questions.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    Commercial Market, Rawalpindi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    info@cakeandbake.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Sunday <br />
                    9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border bg-card p-10 shadow-lg">

            <h2 className="text-3xl font-bold">
              Send a Message
            </h2>

            <form className="mt-8 space-y-5">

              <div className="relative">
                <User className="absolute left-4 top-4 h-5 w-5 text-primary" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border bg-background py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-primary" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border bg-background py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-primary" />
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border bg-background py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button className="w-full rounded-xl py-6">
                Send Message
              </Button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}