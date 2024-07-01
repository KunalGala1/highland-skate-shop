"use client";
import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getGallery } from "@/sanity/sanity.query";
import type { GalleryType } from "@/types";

const GalleryPage = () => {
  const [gallery, setGallery] = useState<GalleryType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGallery();
        setGallery(data);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        console.error("Error loading gallery:", error);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
    // initLightboxJS("6720-FA22-3857-27B3", "individual");
  }, []);

  return (
    <section className="p-2">
      {isLoading ? (
        <>
          <p className="text-center">Loading gallery...</p>
          <div className="flex sm:flex-wrap p-4 gap-4 justify-center">
            <div className="bg-slate-200/90 rounded shadow flex-1 h-[500px] p-4"></div>
            <div className="bg-slate-200/90 rounded shadow flex-1 h-[500px] p-4 hidden sm:block"></div>
            <div className="bg-slate-200/90 rounded shadow flex-1 h-[500px] p-4 hidden md:block"></div>
            <div className="bg-slate-200/90 rounded shadow flex-1 h-[500px] p-4 hidden lg:block"></div>
            <div className="bg-slate-200/90 rounded shadow flex-1 h-[500px] p-4 hidden xl:block"></div>
          </div>
        </>
      ) : (
        <>
          <SlideshowLightbox
            lightboxIdentifier="lightbox1"
            framework="next"
            images={gallery?.images}
            showThumbnails={true}
          >
            <div className="mx-auto flex flex-wrap bg-slate-100 p-2 rounded shadow">
              {gallery?.images.map((image) => (
                <div
                  className="sm:w-1/2 xl:w-1/3 2xl:w-1/4 p-2 rounded"
                  key={image.alt}
                >
                  <div className="overflow-hidden rounded">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      height={500}
                      width={500}
                      data-lightboxjs="lightbox1"
                      quality={80}
                      className="w-full rounded shadow object-cover object-center aspect-video filter transition duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SlideshowLightbox>
        </>
      )}
    </section>
  );
};

export default GalleryPage;
