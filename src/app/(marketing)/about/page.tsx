export const metadata = {
  title: 'About Us',
  description: 'Learn about TraderLight and our mission to provide professional trading tools.',
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            About TraderLight
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Professional trading tools to help you make informed decisions
          </p>
        </div>
        <div className="flex w-full flex-col gap-8">
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold leading-[1.1] tracking-tighter sm:text-3xl">
              Our Mission
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              At TraderLight, we believe that successful trading is built on a foundation of proper
              analysis, risk management, and disciplined decision-making. Our mission is to provide
              traders with professional-grade tools that are both powerful and easy to use.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold leading-[1.1] tracking-tighter sm:text-3xl">
              What We Offer
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Position Size Calculator</h3>
                <p className="text-muted-foreground">
                  Calculate optimal position sizes based on your account size, risk tolerance,
                  and market conditions.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Pip Calculator</h3>
                <p className="text-muted-foreground">
                  Convert pip values to your account currency across different pairs and
                  lot sizes.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Risk Management</h3>
                <p className="text-muted-foreground">
                  Tools to help you manage your risk and protect your trading capital.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Access guides and tutorials to help you make the most of our tools.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold leading-[1.1] tracking-tighter sm:text-3xl">
              Our Values
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Accuracy</h3>
                <p className="text-muted-foreground">
                  We prioritize precision in our calculations to ensure you can trade with confidence.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Transparency</h3>
                <p className="text-muted-foreground">
                  Our tools are open source, and we're committed to being transparent about how they work.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">User-Centric</h3>
                <p className="text-muted-foreground">
                  We design our tools based on real trader needs and feedback.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
