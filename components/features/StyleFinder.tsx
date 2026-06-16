"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const questions = [
  {
    id: "vibe",
    title: "What's your ideal living room vibe?",
    options: [
      { id: "minimal", label: "Clean & Uncluttered", image: "minimal.jpg" },
      { id: "warm", label: "Cozy & Textured", image: "warm.jpg" },
      { id: "heritage", label: "Classic & Heritage", image: "heritage.jpg" },
      { id: "bold", label: "Bold & Dramatic", image: "bold.jpg" }
    ]
  },
  {
    id: "colors",
    title: "Which color palette speaks to you?",
    options: [
      { id: "neutrals", label: "Soft Neutrals (Beige, Ivory, Sand)" },
      { id: "earth", label: "Earthy Tones (Terracotta, Sage, Ochre)" },
      { id: "dark", label: "Moody & Dark (Charcoal, Navy, Forest)" },
      { id: "pastels", label: "Airy Pastels (Blush, Mint, Sky)" }
    ]
  },
  {
    id: "room",
    title: "Which room is your biggest priority?",
    options: [
      { id: "living", label: "Living Room" },
      { id: "kitchen", label: "Kitchen" },
      { id: "bedroom", label: "Master Bedroom" },
      { id: "full", label: "Full Home" }
    ]
  }
];

export function StyleFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers({ ...answers, [questionId]: optionId });
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const getResult = () => {
    if (answers.vibe === "minimal" || answers.colors === "neutrals") return "Warm Minimalist";
    if (answers.vibe === "heritage" || answers.colors === "earth") return "Modern Heritage";
    if (answers.vibe === "bold" || answers.colors === "dark") return "Dramatic Contemporary";
    return "Coastal Calm";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass-card max-w-4xl mx-auto overflow-hidden relative min-h-[500px] flex flex-col shadow-xl">
      <div className="h-2 bg-[var(--color-blush)] w-full absolute top-0 left-0">
        <motion.div 
          className="h-full bg-[var(--color-terracotta)]"
          initial={{ width: "0%" }}
          animate={{ width: `${(step / questions.length) * 100}%` }}
        />
      </div>

      <div className="flex-grow p-8 md:p-12 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step < questions.length && (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-3xl md:text-5xl text-center mb-12 text-[var(--color-carbon)]">{questions[step].title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(questions[step].id, opt.id)}
                    className={`relative rounded-xl overflow-hidden group border-2 transition-all duration-[var(--duration-base)] aspect-[3/1] sm:aspect-[4/3] bg-white/50 ${answers[questions[step].id] === opt.id ? 'border-[var(--color-terracotta)] scale-[0.98]' : 'border-[var(--color-crystal)] hover:border-[var(--color-terracotta)]'}`}
                  >
                    <div className="absolute inset-0 bg-[var(--color-blush)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="text-center z-10">
                        <span className="block font-medium text-lg text-[var(--color-carbon)] group-hover:text-[var(--color-terracotta)] transition-colors">{opt.label}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === questions.length && !submitted && (
            <motion.div
              key="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-md mx-auto"
            >
              <h3 className="font-display text-4xl mb-4 text-[var(--color-carbon)]">We found your style!</h3>
              <p className="text-[var(--color-slate)] mb-8">
                You are a <strong className="text-[var(--color-terracotta)] text-xl block mt-2">{getResult()}</strong> 
                <br />Enter your email to see a personalized moodboard and 3 AMU projects that match your vibe.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="hello@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="w-full">Get My Moodboard</Button>
              </form>
            </motion.div>
          )}

          {step === questions.length && submitted && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center max-w-md mx-auto"
            >
              <div className="w-20 h-20 bg-[var(--color-success)] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="font-display text-4xl mb-2 text-[var(--color-carbon)]">Check your inbox!</h3>
              <p className="text-[var(--color-slate)] mb-8">
                We've sent your <strong className="text-[var(--color-terracotta)]">{getResult()}</strong> moodboard to {email}.
              </p>
              <Button onClick={() => { setStep(0); setAnswers({}); setSubmitted(false); setEmail(""); }} variant="secondary">
                Retake Quiz
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
