"use client";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MainText from "./MainText";

import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from "embla-carousel-autoplay";

type EmblaImageCarouselType = {
  options?: EmblaCarouselType;
  slides: ImageSlidesType[];
};

type ImageSlidesType = {
  src: string;
  alt: string;
};

type EmblaTestemonialCarouselType = {
  options?: EmblaCarouselType;
  slides: TestemonailSlidesType[];
};

type TestemonailSlidesType = {
  quote: string;
  author: string;
};

export const EmblaImageCarousel = (props: EmblaImageCarouselType) => {
  const { options, slides } = props;
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla overflow-hidden z-0" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((slide, index) => (
          <div
            className="embla__slide flex-none flex-shrink-0 flex-grow-0 w-full min-w-0"
            key={index}
          >
            <Image
              src={slide.src}
              width={500}
              height={500}
              alt={slide.alt}
              unoptimized={true}
              className="w-full h-full object-cover object-center scale-105"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export const EmblaTestemonialCarousel = (
  props: EmblaTestemonialCarouselType
) => {
  const { options, slides } = props;
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 8000,
    }),
  ]);

  return (
    <div className="embla bg-splash relative" ref={emblaRef}>
      <div className="embla__container flex relative">
        {slides.map((slide, index) => (
          <div
            className="embla__slide flex-none flex-shrink-0 flex-grow-0 w-full min-w-0"
            key={index}
          >
            <div className="bg-splash text-center text-slate-300 p-8 flex flex-col justify-start items-center h-[66vh] sm:h-[300px] md:h-[400px] transition overflow-y-auto no-scrollbar gap-2">
              <p className="text-lg">{slide.author}</p>

              <div className="text-yellow-300 text-2xl">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>
                <blockquote className="italic text-justify">
                  <p className="text-xl leading-8">{slide.quote}</p>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
