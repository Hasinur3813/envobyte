import PricingCard from "./PricingCard";

const pricingPlans = [
  {
    name: "Premium",
    price: "$499",
    oldPrice: "$999.00",
    description: "Get a strong foundation with essential services.",
    features: [
      { text: "Professional Logo Design", included: true },
      { text: "4-Page WordPress Website", included: true },
      { text: "Content Writing", included: true },
      { text: "Custom Graphics", included: true },
      { text: "Brand Guideline", included: false },
      { text: "SEO Services", included: false },
      { text: "3-Month Maintenance", included: true },
    ],
    buttonText: "Get Premium",
  },
  {
    name: "Premium Plus",
    price: "$799",
    oldPrice: "$1299.00",
    description: "Take your brand to the next level with advanced features.",
    features: [
      { text: "Everything in Premium", included: true },
      { text: "Full Brand Guideline", included: true },
      { text: "Advanced SEO Services", included: true },
      { text: "Social Media Kit & Posts", included: true },
      { text: "Animated Video", included: false },
      { text: "6-Month Maintenance", included: true },
    ],
    buttonText: "Get Premium Plus",
  },
  {
    name: "Custom Plan",
    price: "Contact Us",
    description: "Need something unique? Get a custom plan tailored for you.",
    features: [
      { text: "Custom Logo Design", included: true },
      { text: "Website with Custom Features", included: true },
      { text: "Custom Content & Graphics", included: true },
      { text: "Custom Marketing Plan", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "12-Month Maintenance", included: true },
    ],
    buttonText: "Request Custom Plan",
  },
];

const page = () => {
  return (
    <section className="bg-[url('/images/salesPricing1.jpg')] min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-center text-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Friendly Pricing Plans
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
