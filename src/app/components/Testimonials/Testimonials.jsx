import ClientReview from "../ClientReview/ClientReview";

const reviews = [
  {
    id: 1,
  },
];

const Testimonials = () => {
  return (
    <section className="py-40">
      <div className="max-w-5xl mx-auto px-4">
        <p className="font-semibold text-center text-xl tracking-widest text-secondary">
          CLIENT REVIEWS
        </p>
        <h3 className="font-bold text-4xl text-center  my-5">
          Our Proud Clients
        </h3>

        <div className="grid grid-cols-3 gap-5 mt-12">
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
          <ClientReview />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
