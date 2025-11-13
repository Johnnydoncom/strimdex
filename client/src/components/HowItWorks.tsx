import registerImageUrl from "@assets/generated_images/User_registration_illustration_8f5a3c6a.png";
import transactionImageUrl from "@assets/generated_images/Complete_transaction_illustration_73a1bc4b.png";
import cashbackImageUrl from "@assets/generated_images/Earn_cashback_illustration_9090942b.png";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up in seconds with your email or phone number. Choose between User or SME account.",
      image: registerImageUrl,
    },
    {
      number: "02",
      title: "Make Transactions",
      description: "Buy airtime, data, pay bills, shop in our marketplace, or complete micro-tasks.",
      image: transactionImageUrl,
    },
    {
      number: "03",
      title: "Earn Cashback",
      description: "Get instant cashback credited to your wallet on every transaction. Refer friends for more rewards.",
      image: cashbackImageUrl,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">How Strimdex Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start earning cashback in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative" data-testid={`step-${step.number}`}>
              <div className="bg-background rounded-xl p-6 space-y-4 h-full border">
                <div className="flex justify-center">
                  <img src={step.image} alt={step.title} className="h-32 w-32 object-contain" />
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
