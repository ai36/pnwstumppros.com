// ── Business info ────────────────────────────────────────────────────────────

export const COMPANY_NAME = "PNW Stump Pros";
export const PHONE = "(503) 555-0100";
export const PHONE_HREF = "tel:+15035550100";
export const SERVICE_AREA = "Portland, OR · Vancouver, WA";

export const BUSINESS_HOURS = [
  { days: "Mon–Sat", hours: "7:00 AM – 6:00 PM" },
  { days: "Sunday", hours: "Closed" },
] as const;

// ── Navigation ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Service Area", href: "#service-area" },
  { label: "Reviews", href: "#testimonials" },
] as const;

// ── Trust bar ─────────────────────────────────────────────────────────────────

export const TRUST_STATS = [
  { value: "500+", label: "Stumps Removed" },
  { value: "5★", label: "Google Rated" },
  { value: "Free", label: "Estimates" },
  { value: "Same-Week", label: "Service Available" },
] as const;

// ── How it works ──────────────────────────────────────────────────────────────

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "We Come Out & Measure",
    desc: "A crew member stops by — usually same day or next day. We measure the stump, check access, and hand you a written quote on the spot. No obligation.",
  },
  {
    step: "02",
    title: "We Grind It Down",
    desc: "Our commercial grinder takes the stump 6–12 inches below grade. Roots are cut, wood is chipped in place, and the surface is left level and clean.",
  },
  {
    step: "03",
    title: "We Clean Up & Go",
    desc: "We rake the chips back into the hole or haul them away — your choice. We blow off the driveway and sidewalk. Your yard is ready to plant or sod.",
  },
] as const;

// ── Why us ────────────────────────────────────────────────────────────────────

export const WHY_US_REASONS = [
  {
    iconName: "star",
    title: "Top-Rated in Portland",
    desc: "Our customers rate us 5 stars on Google. Over 90% of our new clients come from referrals and repeat business.",
  },
  {
    iconName: "mapPin",
    title: "Local, Family-Owned",
    desc: "We live and work in the Portland-Vancouver metro. Our reputation is built on word-of-mouth, so we treat every yard like our own.",
  },
  {
    iconName: "banknotes",
    title: "Upfront, Flat Pricing",
    desc: "No hourly billing, no surprise charges. You get a written quote before we start — what we quote is what you pay.",
  },
  {
    iconName: "calendar",
    title: "Same-Week Scheduling",
    desc: "We're usually booked out only 3–5 days. We'll confirm your appointment by text or call before we show up.",
  },
  {
    iconName: "sparkles",
    title: "Yard Left Clean",
    desc: "We blow debris off your driveway and sidewalk every single time. Chips get raked back in or hauled away — your call.",
  },
  {
    iconName: "wrench",
    title: "Any Size Stump",
    desc: "Got a massive old fir or a dozen small stumps? Our equipment handles anything from 4\" to 60\"+ in diameter.",
  },
] as const;

// ── Gallery ───────────────────────────────────────────────────────────────────

export const GALLERY_PHOTOS = [
  {
    src: "/images/gallery-before.jpg",
    alt: "Tree stumps left in a yard after tree removal",
    caption: "The Problem",
    desc: "Stumps left after tree removal take up space and look bad",
  },
  {
    src: "/images/gallery-work.jpg",
    alt: "Tree service worker operating chainsaw in the forest",
    caption: "The Work",
    desc: "Experienced crew with commercial equipment — any stump, any size",
  },
  {
    src: "/images/gallery-after.jpg",
    alt: "Clean green backyard of a cottage house",
    caption: "The Result",
    desc: "Your yard left clean and ready to plant, sod, or simply enjoy",
  },
] as const;

// ── Testimonials ──────────────────────────────────────────────────────────────

export const STARS = "★★★★★";

export const TESTIMONIALS = [
  {
    name: "Karen M.",
    location: "Beaverton, OR",
    text: "Had three large oak stumps in my backyard that I'd been putting off for years. These guys came out within two days, ground everything down, and cleaned up so well I could barely tell they'd been there. Fair price, super professional.",
  },
  {
    name: "Dave & Sharon R.",
    location: "Vancouver, WA",
    text: `A big fir came down in the windstorm last November and left an ugly stump right in the front yard. ${COMPANY_NAME} had it gone by the weekend. They even swept the sidewalk when they were done. Highly recommend.`,
  },
  {
    name: "Tom B.",
    location: "NE Portland, OR",
    text: "Needed four old stumps cleared before redoing the front landscaping. Got a written quote within an hour of calling, work was done the next day. Exactly what was quoted — no surprises. Great local business.",
  },
] as const;

// ── Service area ──────────────────────────────────────────────────────────────

export const OREGON_CITIES = [
  "Portland",
  "Beaverton",
  "Hillsboro",
  "Gresham",
  "Lake Oswego",
  "Tigard",
  "Tualatin",
  "West Linn",
  "Oregon City",
  "Milwaukie",
  "Clackamas",
  "Happy Valley",
  "Gladstone",
  "Troutdale",
  "Sandy",
] as const;

export const WASHINGTON_CITIES = [
  "Vancouver",
  "Camas",
  "Washougal",
  "Battle Ground",
  "Ridgefield",
  "La Center",
  "Hazel Dell",
  "Salmon Creek",
  "Felida",
  "Orchards",
] as const;

// ── Footer ────────────────────────────────────────────────────────────────────

export const FOOTER_SERVICES = [
  "Stump Grinding",
  "Multi-Stump Discounts",
  "Chip Cleanup & Hauling",
] as const;
