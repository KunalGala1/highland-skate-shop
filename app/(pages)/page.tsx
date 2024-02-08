"use client";
import Button from "../components/Button";
import Link from "next/link";
import { EmblaImageCarousel } from "../components/EmblaCarousel";
import { EmblaTestemonialCarousel } from "../components/EmblaCarousel";
import Image from "next/image";
import SmallHeader from "../components/SmallHeader";
import MainText from "../components/MainText";
import { getTestimonials } from "@/sanity/sanity.query";
import { TestimonialType } from "@/types";
import { useState, useEffect } from "react";
import testemonial from "@/schemas/testimonial";
import { getProfiles } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { getRetroImages } from "@/sanity/sanity.query";
import { CarouselType } from "@/types";

const HomePage = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [retroImages, setRetroImages] = useState<CarouselType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testimonialsData, profilesData, RetroImagesData] =
          await Promise.all([
            getTestimonials(),
            getProfiles(),
            getRetroImages(),
          ]);

        setTestimonials(testimonialsData);
        setProfiles(profilesData);
        setRetroImages(RetroImagesData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="p-8 flex flex-col justify-center items-center sm:flex-row gap-16 max-w-6xl mx-auto min-h-[400px]">
        <div className="space-y-8 sm:w-1/2 text-center sm:text-left">
          <h1 className="text-4xl text-blue-950/80 font-serif">
            Welcome to
            <br />
            <span className="text-6xl font-bold">
              <span className="text-7xl">H</span>ighland{" "}
              <span className="text-7xl">S</span>kate{" "}
              <span className="text-7xl">S</span>hop
            </span>
          </h1>
          <h2 className="text-xl text-slate-900 bg-gray-300 p-4 rounded shadow">
            Knowledge of all things skating is found here. This is your one stop
            shop!
          </h2>
          <Button>
            <Link href="/services" className="text-white">
              Find out more
            </Link>
          </Button>
        </div>
        <div className="sm:w-1/2 space-y-4">
          {retroImages && retroImages.images ? (
            <EmblaImageCarousel
              slides={retroImages.images.map((image) => ({
                src: image.image,
                alt: image.alt,
              }))}
            ></EmblaImageCarousel>
          ) : (
            <div className="rounded shadow bg-slate-200 h-[350px]"></div>
          )}

          <div>
            {retroImages && retroImages.description ? (
              <MainText>{retroImages.description}</MainText>
            ) : (
              <div className="rounded shadow bg-slate-200 h-[100px]"></div>
            )}
          </div>
        </div>
      </section>

      {/* Testemonial */}
      <section className="my-16">
        <Image
          src={"/testemonial-wave-top.svg"}
          width={500}
          height={100}
          alt={"Slanted Shape Graphic Top"}
          className="translate-y-1 scale-105 w-full"
        ></Image>
        <div className="bg-splash relative">
          <div className="bg-fade-edges absolute z-10 w-full h-full top-0 left-0 pointer-events-none"></div>

          <div className="max-w-2xl mx-auto overflow-x-hidden">
            {testimonials ? (
              <EmblaTestemonialCarousel
                slides={testimonials.map((testimonial) => ({
                  quote: testimonial.quote,
                  author: testimonial.author,
                }))}
              />
            ) : (
              <div className="w-full h-[300px] rounded shadow bg-slate-200/25">
                loading...
              </div>
            )}
          </div>
        </div>
        <Image
          src={"/testemonial-wave-bottom.svg"}
          width={500}
          height={100}
          alt={"Slanted Shape Graphic Bottom"}
          className="-translate-y-1 scale-105 w-full"
        ></Image>
      </section>

      {/* Profiles */}
      <section className="p-8 space-y-16 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="sm:w-1/2 md:w-1/3 w-full">
            {profiles[0] ? (
              <Image
                src={profiles[0].image.image}
                width={500}
                height={500}
                alt={profiles[0].image.alt}
                unoptimized={true}
                className="rounded shadow w-full"
              ></Image>
            ) : (
              <div className="h-96 rounded shadow bg-slate-200"></div>
            )}
          </div>
          <div className="space-y-4 sm:w-1/2 md:w-2/3 w-full">
            {profiles[0] ? (
              <SmallHeader>{profiles[0].name}</SmallHeader>
            ) : (
              <div className="rounded shadow bg-slate-200 h-7 w-[150px]"></div>
            )}

            <div className="space-y-4 text-slate-800 text-[17px]">
              {profiles[0] ? (
                <PortableText value={profiles[0].about} />
              ) : (
                <div className="h-[500px] rounded shadow bg-slate-200"></div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-8">
          <div className="sm:w-1/2 md:w-1/3 w-full">
            {profiles[1] ? (
              <Image
                src={profiles[1].image.image}
                width={500}
                height={500}
                alt={profiles[1].image.alt}
                unoptimized={true}
                className="rounded shadow w-full"
              ></Image>
            ) : (
              <div className="h-96 rounded shadow bg-slate-200"></div>
            )}
          </div>
          <div className="space-y-4 sm:w-1/2 md:w-2/3 w-full">
            {profiles[1] ? (
              <SmallHeader>{profiles[1].name}</SmallHeader>
            ) : (
              <div className="rounded shadow bg-slate-200 h-7 w-[150px]"></div>
            )}

            <div className="space-y-4 text-slate-800 text-[17px]">
              {profiles[1] ? (
                <PortableText value={profiles[1].about} />
              ) : (
                <div className="h-[215px] rounded shadow bg-slate-200"></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
