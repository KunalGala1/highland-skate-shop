'use client';
import Image from 'next/image';
import MainText from '@/app/components/MainText';
import { getAbout } from '@/sanity/sanity.query';
import { AboutType } from '@/types';
import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

const AboutPage = () => {
  const [about, setAbout] = useState<AboutType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const about = await getAbout();
        setAbout(about);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  return (
    <>
      <section className='p-8 max-w-6xl mx-auto'>
        <div>
          <div className='flex flex-col md:flex-row md:items-start gap-8'>
            {about ? null : (
              <div className='w-[500px] h-[431px] rounded shadow bg-slate-200'></div>
            )}

            {about && (
              <Image
                src={about.image.image}
                width={500}
                height={500}
                alt={about.image.alt}
                unoptimized={true}
                className='object-cover rounded shadow'
              ></Image>
            )}

            {about ? null : (
              <div className='w-1/2 h-screen rounded shadow bg-slate-200'></div>
            )}

            {about && (
              <div className='space-y-8 text-slate-800 text-[17px]'>
                <PortableText value={about.about}></PortableText>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className='p-8'>Timeline...</section> */}
    </>
  );
};
export default AboutPage;
