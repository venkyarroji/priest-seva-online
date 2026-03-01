import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <main>
      <section className="py-12 bg-background">
        <div className="container">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl text-center">
            Contact Us
          </h1>
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
