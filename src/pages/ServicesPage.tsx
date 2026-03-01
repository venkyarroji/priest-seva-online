import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <main>
      <section className="py-12 bg-background">
        <div className="container">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl text-center">
            Our Services
          </h1>
        </div>
      </section>
      <Services />
    </main>
  );
};

export default ServicesPage;
