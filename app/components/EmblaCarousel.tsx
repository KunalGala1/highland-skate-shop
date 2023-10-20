'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MainText from './MainText';

import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from 'embla-carousel-autoplay';

type EmblaImageCarouselType = {
  options?: EmblaOptionsType;
  slides: ImageSlidesType[];
};

type ImageSlidesType = {
  src: string;
  alt: string;
};

type EmblaTestemonialCarouselType = {
  options?: EmblaOptionsType;
  slides: TestemonailSlidesType[];
};

type TestemonailSlidesType = {
  quote: string;
  author: string;
};

export const EmblaImageCarousel = (props: EmblaImageCarouselType) => {
  const { options, slides } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className='embla overflow-hidden z-0' ref={emblaRef}>
      <div className='embla__container flex'>
        {slides.map((slide, index) => (
          <div
            className='embla__slide flex-none flex-shrink-0 flex-grow-0 w-full min-w-0'
            key={index}
          >
            <Image
              src={slide.src}
              width={500}
              height={500}
              alt={slide.alt}
              unoptimized={true}
              className='w-full h-full object-cover object-center scale-105'
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
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({
      delay: 8000,
    }),
  ]);

  return (
    <div
      className='embla overflow-hidden bg-splash min-h-[400px]'
      ref={emblaRef}
    >
      <div className='embla__container flex'>
        {slides.map((slide, index) => (
          <div
            className='embla__slide flex-none flex-shrink-0 flex-grow-0 w-full min-w-0'
            key={index}
          >
            <div className='bg-splash text-center p-8 flex flex-col justify-center items-center h-full'>
              <div className='text-slate-300 space-y-4'>
                <blockquote className='italic text-justify'>
                  <p className='text-xl leading-8'>{slide.quote}</p>
                </blockquote>
                <p className='text-lg'>{slide.author}</p>
              </div>
              <div className='text-yellow-300 text-2xl'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
