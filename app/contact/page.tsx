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
    <main className="min-h-screen bg-background py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-primary sm:px-4 sm:py-2 sm:text-sm sm:tracking-[2px] md:px-5 md:text-sm md:tracking-[3px] lg:px-5 lg:py-2 lg:text-sm lg:tracking-[3px]">
            Contact Us
          </span>

          <h1 className="mt-4 text-3xl font-bold text-foreground sm:mt-5 sm:text-4xl md:mt-6 md:text-5xl lg:mt-6 lg:text-5xl">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:mt-4 sm:text-base md:max-w-2xl md:text-lg lg:mt-4 lg:max-w-2xl lg:text-lg">
            Have a question, want to place a custom cake order, or need help
            with your celebration? Get in touch with us today.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-7 md:mt-14 md:gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">

          {/* Contact Info */}
          <div className="rounded-2xl border bg-card p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">

            <h2 className="text-2xl font-bold text-foreground sm:text-2xl md:text-3xl lg:text-3xl">
              Get in Touch
            </h2>

            <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-base lg:text-base">
              We'd love to hear from you. Reach out to us anytime for custom cake
              orders or any questions.
            </p>

            <div className="mt-6 space-y-5 sm:mt-7 sm:space-y-5 md:mt-8 md:space-y-6 lg:mt-8 lg:space-y-6">

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold sm:text-base">
                    Address
                  </h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    Commercial Market, Rawalpindi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold sm:text-base">
                    Phone
                  </h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold sm:text-base">
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    info@cakeandbake.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold sm:text-base">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    Monday – Sunday <br />
                    9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border bg-card p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">

            <h2 className="text-2xl font-bold sm:text-2xl md:text-3xl lg:text-3xl">
              Send a Message
            </h2>

            <form className="mt-6 space-y-4 sm:mt-7 sm:space-y-5 md:mt-8 md:space-y-5 lg:mt-8 lg:space-y-5">

              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-primary sm:left-4 sm:top-4" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border bg-background py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:pl-12 sm:text-base"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-primary sm:left-4 sm:top-4" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border bg-background py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:pl-12 sm:text-base"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-primary sm:left-4 sm:top-4" />
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border bg-background py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:pl-12 sm:text-base"
                />
              </div>

              <Button className="w-full rounded-xl py-5 text-sm sm:py-6 sm:text-base">
                Send Message
              </Button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}