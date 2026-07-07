export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Checkout
          </h1>

          <p className="mt-2 text-muted-foreground">
            Complete your order by providing your shipping details.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Shipping */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-md">

            <h2 className="mb-6 text-2xl font-semibold">
              Shipping Information
            </h2>

          </div>

          {/* Summary */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-md">

            <h2 className="mb-6 text-2xl font-semibold">
              Order Summary
            </h2>

          </div>

        </div>

      </div>
    </main>
  );
}