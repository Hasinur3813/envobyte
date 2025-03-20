import Reviews from "../Reviews/Reviews";

const Testimonials = () => {
  return (
    <section className="py-40">
      <div className="max-w-5xl mx-auto px-4">
        <p className="font-semibold text-center text-lg md:text-xl tracking-widest text-secondary">
          CLIENT REVIEWS
        </p>
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-2 lg:my-5">
          Our Proud Clients
        </h3>

        <Reviews />
      </div>
    </section>
  );
};

export default Testimonials;
