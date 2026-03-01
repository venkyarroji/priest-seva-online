import { useState } from "react";
import whatsappQr from "@/assets/whatsapp-qr.jpeg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Send, MapPin, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  service: z.string().optional(),
  message: z.string().trim().max(1000).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const services = [
  "Navagraha Pooja",
  "Sarpa Dosha Shanti",
  "Kundali Reading",
  "Marriage Pujas",
  "Santan Pujas",
  "Graha Dosha Remedies",
  "Other Pujas",
];

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    try {
      const { error } = await supabase.from("inquiries").insert({
        name: data.name,
        phone: data.phone,
        service: data.service || null,
        message: data.message || null,
      });

      if (error) throw error;

      toast({
        title: "🙏 Booking Registered Successfully!",
        description: "Your entry is filed. Priest Seva will connect with you soon!",
      });
      setSubmitted(true);
      form.reset();
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Contact Us</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Book a Puja
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-6 text-muted-foreground text-base max-w-lg mx-auto">
            Fill the form below or call us directly to book your puja. We respond within 2 hours.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-background p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-8 space-y-5">
                  <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-3xl">🙏</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">Booking Registered!</h3>
                  <p className="text-muted-foreground text-base max-w-md mx-auto">
                    Your entry has been filed successfully. <strong className="text-foreground">Priest Seva</strong> will connect with you soon.
                  </p>
                  <p className="text-sm text-secondary font-semibold">Har Har Mahadev! 🙏</p>

                  {/* WhatsApp Community QR */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-muted-foreground text-sm mb-1">✨ Join our spiritual community ✨</p>
                    <p className="font-heading text-lg font-bold text-foreground mb-4">
                      "Together we walk the path of devotion"
                    </p>
                    <div className="mx-auto w-48 h-48 rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-lg shadow-secondary/10">
                      <img src={whatsappQr} alt="Join Priest Seva WhatsApp Group" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">Scan to join our WhatsApp community</p>
                  </div>

                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4 rounded-xl"
                  >
                    Book Another Puja
                  </Button>
                </div>
              ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Your Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" className="h-12 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter phone number" type="tel" className="h-12 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-xl">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any specific requirements or preferred dates..." className="rounded-xl min-h-[100px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-12 rounded-xl shadow-lg shadow-secondary/20 transition-all hover:shadow-xl hover:shadow-secondary/30"
                    size="lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {loading ? "Submitting..." : "Book Now"}
                  </Button>
                </form>
              </Form>
              )}
            </div>
          </div>

          {/* Contact info — takes 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-5">Call Us Directly</h3>
              <div className="space-y-3">
                <a
                  href="tel:8897319822"
                  className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-secondary hover:shadow-md group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg">88973 19822</span>
                    <p className="text-xs text-muted-foreground">Primary Number</p>
                  </div>
                </a>
                <a
                  href="tel:9676956436"
                  className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-secondary hover:shadow-md group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg">96769 56436</span>
                    <p className="text-xs text-muted-foreground">Alternative Number</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-secondary/20 bg-secondary/5 p-5">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Available for Home Visits</p>
                  <p className="text-xs text-muted-foreground mt-1">We perform all Vedic rituals at your home across the region.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-secondary/20 bg-secondary/5 p-5">
                <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Quick Response</p>
                  <p className="text-xs text-muted-foreground mt-1">We respond within 2 hours of your inquiry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
