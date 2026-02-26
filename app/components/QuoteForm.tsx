"use client";

import { useActionState } from "react";
import { sendQuote, type FormState } from "@/app/actions/contact";
import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const inputClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

const selectClass =
  "w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 pr-10 font-sans text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

const initialState: FormState = null;

export default function QuoteForm() {
  const [state, formAction, isPending] = useActionState(
    sendQuote,
    initialState,
  );

  if (state?.success) {
    return (
      <div className="rounded-2xl bg-primary p-12 text-center text-white">
        <div className="mb-4 flex justify-center">
          <CheckCircleIcon className="size-16" />
        </div>
        <h3 className="mb-2 text-2xl font-bold">Request Received!</h3>
        <p className="text-primary-light">
          We'll reach out within a few hours to schedule your free estimate.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(503) 555-1234"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Email{" "}
            <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Service Address or ZIP *
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            placeholder="4521 NE Alberta St, Portland OR"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="stumps"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Number of Stumps *
          </label>
          <div className="relative">
            <select
              id="stumps"
              name="stumps"
              required
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Select...
              </option>
              <option value="1">1 stump</option>
              <option value="2–3">2–3 stumps</option>
              <option value="4–6">4–6 stumps</option>
              <option value="7 or more">7 or more</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <label
            htmlFor="size"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Approximate Stump Size *
          </label>
          <div className="relative">
            <select
              id="size"
              name="size"
              required
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Select...
              </option>
              <option value="Small (under 12 inches)">
                Small — under 12&quot;
              </option>
              <option value="Medium (12–24 inches)">Medium — 12–24&quot;</option>
              <option value="Large (24+ inches)">Large — 24&quot;+</option>
              <option value="Mixed sizes">Mixed sizes</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-semibold text-gray-700"
        >
          Additional Notes{" "}
          <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Anything we should know — fence access, soft ground, etc."
          className={inputClass}
        />
      </div>

      {state?.error ? (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-primary py-4 text-lg font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Request Free Estimate"}
      </button>

      <p className="text-center text-xs text-gray-400">
        No obligation. We'll respond within a few hours during business hours.
      </p>
    </form>
  );
}
