import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Send } from "lucide-react";
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
        title: "🙏 Inquiry Submitted",
        description: "We will contact you shortly. Har Har Mahadev!",
      });
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
    <section id="contact" className="py-20 bg-card">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Contact Us</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Book a Puja
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill the form below or call us directly to book your puja.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
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
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Required</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific requirements..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                {loading ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </Form>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Call Us Directly</h3>
              <div className="space-y-3">
                <a
                  href="tel:8897319822"
                  className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-secondary"
                >
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-foreground">88973 19822</span>
                </a>
                <a
                  href="tel:9676956436"
                  className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-secondary"
                >
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-foreground">96769 56436</span>
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-secondary/20 bg-secondary/5 p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                🙏 <strong className="text-foreground">Available for home visits</strong> across the region.
                We perform all types of Vedic rituals with authenticity and devotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
