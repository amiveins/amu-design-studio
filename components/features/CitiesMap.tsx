"use client";
// @ts-ignore
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import React, { useState } from "react";

const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

// Approximate coordinates for the cities: [longitude, latitude]
const cities = [
  { name: "Delhi", coordinates: [77.2090, 28.6139], projects: 45 },
  { name: "Noida", coordinates: [77.3910, 28.5355], projects: 82 },
  { name: "Faridabad", coordinates: [77.3178, 28.4089], projects: 12 },
  { name: "Gurugram", coordinates: [77.0266, 28.4595], projects: 34 },
  { name: "Haridwar", coordinates: [78.1642, 29.9457], projects: 5 },
  { name: "Dehradun", coordinates: [78.0322, 30.3165], projects: 8 },
  { name: "Mumbai", coordinates: [72.8777, 19.0760], projects: 18 },
  { name: "Goa", coordinates: [73.9682, 15.2993], projects: 7 },
  { name: "Guwahati", coordinates: [91.7362, 26.1445], projects: 3 },
  { name: "Mukteshwar", coordinates: [79.6467, 29.4727], projects: 2 },
  { name: "Hyderabad", coordinates: [78.4867, 17.3850], projects: 14 },
  { name: "Ahmedabad", coordinates: [72.5714, 23.0225], projects: 9 },
];

export function CitiesMap() {
  const [tooltip, setTooltip] = useState<{name: string, projects: number} | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto glass-card p-4 relative bg-white/50">
      {tooltip && (
        <div className="absolute top-8 left-8 glass-card !bg-[var(--glass-tier1-bg)] p-4 rounded-xl shadow-lg z-10 pointer-events-none">
          <h4 className="font-display text-xl text-[var(--color-carbon)] mb-1">{tooltip.name}</h4>
          <p className="text-sm text-[var(--color-slate)]">{tooltip.projects} Projects Delivered</p>
        </div>
      )}
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [82.0, 23.0] // Center of India
        }}
        className="w-full h-auto"
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="var(--color-ivory)"
                stroke="var(--color-crystal)"
                strokeWidth={0.5}
                className="transition-colors hover:fill-[var(--color-blush)] outline-none"
              />
            ))
          }
        </Geographies>

        {cities.map(({ name, coordinates, projects }) => (
          <Marker 
            key={name} 
            coordinates={coordinates as [number, number]}
            onMouseEnter={() => setTooltip({ name, projects })}
            onMouseLeave={() => setTooltip(null)}
          >
            <circle r={5} fill="var(--color-terracotta)" stroke="#fff" strokeWidth={1.5} className="cursor-pointer hover:scale-150 transition-transform origin-center duration-[var(--duration-base)] ease-[var(--ease-snap)]" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
