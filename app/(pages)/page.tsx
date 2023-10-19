import Button from '../components/Button';
import Link from 'next/link';
import { EmblaCarousel } from '../components/EmblaCarousel';
import Image from 'next/image';
import SmallHeader from '../components/SmallHeader';

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className='p-8 flex flex-col sm:flex-row gap-4'>
        <div className='space-y-4'>
          <h1 className='font-extrabold text-4xl font-serif'>
            Welcome to Highland Skate Shop
          </h1>
          <h2 className='text-2xl'>
            Knowledge of all things skating is found here. This is your one stop
            shop!
          </h2>
          <Button>
            <Link href='/about' className='text-white'>
              Find out more
            </Link>
          </Button>
        </div>
        <div>
          <EmblaCarousel
            options={{ loop: true }}
            slides={['slide 1', 'slide 2', 'slide 3']}
          ></EmblaCarousel>
        </div>
      </section>

      {/* Testemonial */}
      <section>
        <Image
          src={'/testemonial-wave-top.svg'}
          width={500}
          height={100}
          alt={'Slanted Shape Graphic Top'}
          className='translate-y-1 scale-105 w-full'
        ></Image>
        <div className='bg-splash p-8 text-white'>
          <p className='text-center'>Testemonials...</p>
        </div>
        <Image
          src={'/testemonial-wave-bottom.svg'}
          width={500}
          height={100}
          alt={'Slanted Shape Graphic Bottom'}
          className='-translate-y-1 scale-105 w-full'
        ></Image>
      </section>

      {/* Profiles */}
      <section className='p-8 space-y-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div>
            <Image
              src={'/rick-profile.jpg'}
              width={500}
              height={500}
              alt={`Rick's profile picture`}
              className='rounded shadow'
            ></Image>
          </div>
          <div className='space-y-4'>
            <SmallHeader>Rick Stephans</SmallHeader>
            <div className='space-y-4'>
              <p>
                Hi, I&apos;m Rick, and I have over 60 years of experience in the
                ice skating industry, including skate fitting, sharpening, and
                repairs. I have worked with skaters throughout the Pacific
                Northwest with skaters coming from as far away as Montana,
                Arizona, and Alaska for stock, semi-custom, and custom boots. My
                specialty has been helping skaters with boot, blade, and/or foot
                issues. Over the years, I have worked closely with boot and
                blade manufacturers, giving feedback on designs and materials,
                and have frequently attended vendor seminars.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse gap-8'>
          <div>
            <Image
              src={'/diana-profile.jpg'}
              width={500}
              height={500}
              alt={`Diana's profile picture`}
              className='rounded shadow'
            ></Image>
          </div>
          <div className='space-y-4'>
            <SmallHeader>Diana Stephans</SmallHeader>
            <div className='space-y-4'>
              <p>
                Hello, I&apos;m Diana, I have over 37 years of experience in
                skate fitting and repairs, learning by watching Rick. I have
                worked with skaters from beginner through competitive level,
                including designing semi-custom and custom boots. I have joined
                Rick in attending numerous vendor seminars, and I look forward
                to doing so again.
              </p>
              <p>
                It was in the early 1990&apos;s that we were introduced to
                Superfeet Insoles. We have been able to incorporate the custom
                and trim-to-fit insoles as foot correction for ice skates, ski
                boots, work shoes, and workout shoes, reducing the need for
                costly orthotics.
              </p>
              <p>We look forward to helping you with your ice skating needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
