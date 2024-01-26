"use client";
import Image from "next/image";
import MainText from "@/app/components/MainText";
import { getAbout } from "@/sanity/sanity.query";
import { getTimeline } from "@/sanity/sanity.query";
import { AboutType } from "@/types";
import { TimelineType } from "@/types";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";

// Timeline
import { Chrono } from "react-chrono";

const AboutPage = () => {
  const [about, setAbout] = useState<AboutType | null>(null);
  const [timeline, setTimeline] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const [about, timeline] = await Promise.all([getAbout(), getTimeline()]);
      setAbout(about);
      setTimeline(timeline);
      console.log(timeline);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      _id: "2",
      title: "2023-01-01",
      cardTitle: "Dunkirk",
      url: "#",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];

  return (
    <>
      <section className="p-8 max-w-6xl mx-auto">
        <div>
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {about ? null : (
              <div className="w-[500px] h-[431px] rounded shadow bg-slate-200"></div>
            )}

            {about && (
              <Image
                src={about.image.image}
                width={500}
                height={500}
                alt={about.image.alt}
                unoptimized={true}
                className="object-cover rounded shadow"
              ></Image>
            )}

            {about ? null : (
              <div className="w-1/2 h-screen rounded shadow bg-slate-200"></div>
            )}

            {about && (
              <div className="space-y-8 text-slate-800 text-[17px]">
                <PortableText value={about.about}></PortableText>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="p-8">
        {timeline && (
          <div className="max-w-6xl mx-auto">
            <Chrono
              items={timeline}
              mode="VERTICAL_ALTERNATING"
              hideControls={true}
              theme={{
                primary: "rgb(63, 81, 181)",
                secondary: "white",
                cardBgColor: "white",
                cardForeColor: "black",
                titleColor: "rgb(63, 81, 181)",
              }}
            />
          </div>
        )}
      </section>
    </>
  );
};
export default AboutPage;
