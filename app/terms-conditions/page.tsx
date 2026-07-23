export default function TermsConditionsPage() {
  return (
    <section className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-muted-foreground leading-8">
          <p>
            Welcome to Cake & Bake. By using our website, you agree to the
            following terms and conditions.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Orders
            </h2>
            <p>
              All orders are subject to availability. We reserve the right to
              refuse or cancel any order if necessary.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Pricing
            </h2>
            <p>
              Product prices are listed on our website and may change without
              prior notice. We strive to keep all pricing accurate.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Delivery
            </h2>
            <p>
              Delivery times are estimated and may vary depending on location,
              weather conditions, or other unforeseen circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Refund & Cancellation
            </h2>
            <p>
              Refunds and cancellations are handled according to our store
              policy. Please contact us as soon as possible if you need to
              modify or cancel your order.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Website Usage
            </h2>
            <p>
              You agree not to misuse this website or attempt to interfere with
              its functionality or security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Changes to Terms
            </h2>
            <p>
              Cake & Bake may update these Terms & Conditions at any time.
              Continued use of the website means you accept any updated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}