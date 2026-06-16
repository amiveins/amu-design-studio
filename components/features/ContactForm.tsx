"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

type ContactFormData = {
  name: string;
  phone: string;
  projectType: string;
  message: string;
};

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Construct the mailto link
    const subject = encodeURIComponent(`New Inquiry from ${data.name} - ${data.projectType}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nProject Type: ${data.projectType}\n\nMessage:\n${data.message}`
    );
    
    // Open default mail client
    window.location.href = `mailto:hello@amudesignstudio.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="glass-card p-8 md:p-10 border-[var(--color-crystal)] shadow-xl">
      <h3 className="font-display text-3xl mb-8 text-[var(--color-carbon)]">Request a Quote</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-[var(--color-slate)] mb-2">Name</label>
          <Input 
            {...register("name", { required: true })} 
            placeholder="John Doe" 
            className={errors.name ? "border-red-500" : ""}
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-[var(--color-slate)] mb-2">Phone</label>
          <Input 
            {...register("phone", { required: true })} 
            type="tel" 
            placeholder="+91 98765 43210" 
            className={errors.phone ? "border-red-500" : ""}
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-[var(--color-slate)] mb-2">Project Type</label>
          <select 
            {...register("projectType", { required: true })}
            className={`flex h-12 w-full rounded-md border border-[var(--color-crystal)] bg-[var(--glass-tier3-bg)] px-4 py-2 text-sm text-[var(--color-carbon)] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(192,144,112,0.25)] focus-visible:border-[var(--color-terracotta)] ${errors.projectType ? "border-red-500" : ""}`}
          >
            <option value="">Select an option</option>
            <option value="Residential (Apartment)">Residential (Apartment)</option>
            <option value="Residential (Villa)">Residential (Villa)</option>
            <option value="Commercial / Office">Commercial / Office</option>
            <option value="Renovation">Renovation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-[var(--color-slate)] mb-2">Tell us about your space</label>
          <Textarea 
            {...register("message", { required: true })} 
            placeholder="I am looking for an end-to-end interior design for my new 3BHK..."
            className={errors.message ? "border-red-500" : ""}
          />
        </div>

        <Button type="submit" variant="primary" className="w-full py-4 text-lg mt-4">
          Send Inquiry
        </Button>
        <p className="text-xs text-center text-[var(--color-slate)] mt-4">
          This will open your default email app to send us the details directly.
        </p>
      </form>
    </div>
  );
}
