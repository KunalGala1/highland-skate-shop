'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from 'embla-carousel-autoplay';

type PropType = {
  options?: EmblaOptionsType;
  slides: React.ReactNode[];
};

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {slides.map((slide, index) => (
          <div className='embla__slide' key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
