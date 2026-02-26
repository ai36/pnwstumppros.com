import Image from "next/image";
import { GALLERY_PHOTOS } from "@/app/constants";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface-alt px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-3">
          {GALLERY_PHOTOS.map(({ src, alt, caption, desc }) => (
            <div key={src} className="group overflow-hidden rounded-2xl shadow-sm">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-dark/30" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-accent px-3 py-1 text-sm font-bold text-white">
                    {caption}
                  </span>
                </div>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
