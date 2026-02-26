"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { COMPANY_NAME, PHONE, PHONE_HREF, NAV_LINKS } from "@/app/constants";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt={COMPANY_NAME}
                width={206}
                height={28}
                className="h-auto w-44 min-[1024px]:w-56"
                priority
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden text-sm font-semibold text-white hover:opacity-75 transition-opacity sm:block"
            >
              {PHONE}
            </a>
            <a
              href="#quote"
              className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 backdrop-blur-sm" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Left drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-90 px-4 bg-primary shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-primary-dark px-4 py-3">
          <Image
            src="/logo.svg"
            alt={COMPANY_NAME}
            width={160}
            height={22}
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-1 text-white/75 hover:text-white transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="border-b border-primary-dark/60 py-4 text-base font-medium text-white/80 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#quote"
            className="mt-6 rounded-full bg-accent px-6 py-3 text-center font-bold text-white transition-opacity hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </a>
          <a
            href={PHONE_HREF}
            className="mt-3 text-center text-sm font-semibold text-white/75 hover:text-white transition-colors"
          >
            {PHONE}
          </a>
        </nav>
      </div>
    </>
  );
}
