import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-[var(--color-ivory)] min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] pointer-events-none" />
      <div className="text-center relative z-10">
        <h1 className="font-display text-8xl md:text-9xl text-[var(--color-terracotta)] opacity-20 mb-4 select-none">404</h1>
        <h2 className="font-display text-3xl md:text-4xl text-[var(--color-carbon)] mb-6">Space not found</h2>
        <p className="text-[var(--color-slate)] mb-10 max-w-md mx-auto">
          We couldn't find the room you're looking for. It might be under renovation.
        </p>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
