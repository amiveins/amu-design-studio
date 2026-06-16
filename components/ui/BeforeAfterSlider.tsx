"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before", 
  afterAlt = "After",
  className 
}: BeforeAfterSliderProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-[var(--color-crystal)] shadow-lg ${className || ''}`}>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeImage} alt={beforeAlt} />}
        itemTwo={<ReactCompareSliderImage src={afterImage} alt={afterAlt} />}
        handle={
          <div className="h-full w-1 bg-white relative flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <div className="absolute h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-md border border-[var(--color-crystal)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-terracotta)]"><path d="m9 18 6-6-6-6"/><path d="m15 18-6-6 6-6"/></svg>
            </div>
          </div>
        }
      />
    </div>
  );
}
