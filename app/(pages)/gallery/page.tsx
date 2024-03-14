"use client";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getGallery } from "@/sanity/sanity.query";
import type { GalleryType } from "@/types";

// FIXME: fix types!

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGallery();
        setGallery(data.images);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        console.error("Error loading gallery:", error);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    initLightboxJS("6720-FA22-3857-27B3", "individual");
  }, []);

  const images = [
    {
      src: "https://source.unsplash.com/sQZ_A17cufs/549x711",
      alt: "Mechanical keyboard with white keycaps.",
    },
    {
      src: "https://source.unsplash.com/rsAeSMzOX9Y/768x512",
      alt: "Mechanical keyboard with white, pastel green and red keycaps.",
    },
    {
      src: "https://source.unsplash.com/Z6SXt1v5tP8/768x512",
      alt: "Mechanical keyboard with white, pastel pink, yellow and red keycaps.",
    },
  ];

  return (
    <section className="p-8">
      {isLoading ? (
        <p>Loading gallery...</p>
      ) : (
        <SlideshowLightbox
          lightboxIdentifier="lightbox1"
          framework="next"
          images={gallery}
          showThumbnails={true}
          className="flex gap-8 flex-wrap justify-center"
        >
          {gallery.map((image, index) => (
            <div>
              <div className="overflow-hidden rounded">
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={500}
                  width={500}
                  data-lightboxjs="lightbox1"
                  quality={80}
                  className="rounded shadow max-w-[400px] object-cover object-center aspect-square filter brightness-95 hover:brightness-100 transition hover:scale-105"
                />
              </div>
              {image.alt && (
                <p className="text-slate-700 pt-0.5 text-sm">{image.alt}</p>
              )}
            </div>
          ))}
        </SlideshowLightbox>
      )}
    </section>
  );
};

export default GalleryPage;
