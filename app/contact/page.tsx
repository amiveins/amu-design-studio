import { ContactForm } from "@/components/features/ContactForm";
import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | AMU Design Studio",
  description: "Get in touch with us to start your interior design project.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-ivory)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-display text-5xl lg:text-7xl text-[var(--color-carbon)] mb-8 leading-tight">
            Let's create <br/><span className="italic text-[var(--color-terracotta)]">something beautiful.</span>
          </h1>
          <p className="text-lg text-[var(--color-slate)] mb-12">
            Fill out the form to schedule a free design consultation. Our team typically responds within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--color-blush)] text-[var(--color-terracotta)] rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-carbon)] mb-1">Studio Address</h4>
                <p className="text-[var(--color-slate)]">Sector 62, Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--color-blush)] text-[var(--color-terracotta)] rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-carbon)] mb-1">Call Us</h4>
                <p className="text-[var(--color-slate)]">+91 99999 99999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--color-blush)] text-[var(--color-terracotta)] rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-carbon)] mb-1">Email</h4>
                <p className="text-[var(--color-slate)]">hello@amudesignstudio.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
