"use client";

import { useMemo, useState } from "react";
import { services } from "@/lib/site";

/**
 * Interactive ballpark estimator. Rates are deliberately broad, indicative
 * day-rate maths only — the output always says "guide price".
 */
const RATES: Record<
  string,
  { unit: string; unitPlural: string; min: number; max: number; base: number }
> = {
  excavation: { unit: "day on site", unitPlural: "days on site", min: 1, max: 10, base: 380 },
  "site-preparation": { unit: "m² of paving/prep", unitPlural: "m² of paving/prep", min: 5, max: 200, base: 85 },
  fencing: { unit: "metre of fencing", unitPlural: "metres of fencing", min: 5, max: 120, base: 55 },
  "tree-removal": { unit: "tree / large shrub", unitPlural: "trees / large shrubs", min: 1, max: 12, base: 320 },
};

export default function QuoteEstimator({
  onUseEstimate,
}: {
  onUseEstimate: (message: string) => void;
}) {
  const [service, setService] = useState(services[0].slug);
  const rate = RATES[service];
  const [qty, setQty] = useState(rate.min);

  const { low, high } = useMemo(() => {
    const mid = qty * rate.base;
    return { low: Math.round((mid * 0.8) / 10) * 10, high: Math.round((mid * 1.3) / 10) * 10 };
  }, [qty, rate]);

  const serviceTitle = services.find((s) => s.slug === service)?.title ?? service;

  const changeService = (slug: string) => {
    setService(slug);
    setQty(RATES[slug].min);
  };

  return (
    <div className="estimator">
      <h3>Instant Ballpark Estimate</h3>
      <p className="estimator__hint">
        Slide to size up your job and get a rough guide price in seconds.
      </p>
      <div className="estimator__services" role="tablist" aria-label="Choose a service">
        {services.map((s) => (
          <button
            key={s.slug}
            role="tab"
            aria-selected={service === s.slug}
            className={service === s.slug ? "active" : ""}
            onClick={() => changeService(s.slug)}
          >
            {s.title.split(" & ")[0]}
          </button>
        ))}
      </div>
      <label className="estimator__slider">
        <span>
          <strong>{qty}</strong> {qty === 1 ? rate.unit : rate.unitPlural}
        </span>
        <input
          type="range"
          min={rate.min}
          max={rate.max}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          aria-label={`Number of ${rate.unit}s`}
        />
      </label>
      <div className="estimator__result" aria-live="polite">
        <span className="estimator__label">Guide price</span>
        <span className="estimator__price">
          £{low.toLocaleString()} – £{high.toLocaleString()}
        </span>
        <span className="estimator__disclaimer">
          Indicative only — every job is quoted properly before work starts.
        </span>
      </div>
      <button
        type="button"
        className="btn btn--primary"
        onClick={() =>
          onUseEstimate(
            `Hi, I'd like a quote for ${serviceTitle.toLowerCase()} — roughly ${qty} ${
              qty === 1 ? rate.unit : rate.unitPlural
            }. The online estimator suggested £${low.toLocaleString()}–£${high.toLocaleString()}. Please could you confirm?`
          )
        }
      >
        Send This With My Enquiry ↓
      </button>
    </div>
  );
}
