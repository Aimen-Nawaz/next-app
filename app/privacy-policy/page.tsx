export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-muted-foreground leading-8">
          <p>
            At <strong>Cake & Bake</strong>, we value your privacy. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you visit our website or place an order.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Information We Collect
            </h2>
            <p>
              We may collect your name, email address, phone number, delivery
              address, and payment information when you place an order or
              contact us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              How We Use Your Information
            </h2>
            <p>
              Your information is used to process orders, provide customer
              support, improve our services, and send order updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Data Protection
            </h2>
            <p>
              We take appropriate security measures to protect your personal
              information. Your data is never sold or shared with third parties
              except when required to complete your order or by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Cookies
            </h2>
            <p>
              Our website may use cookies to improve your browsing experience
              and remember your preferences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact Cake & Bake through our Contact page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}