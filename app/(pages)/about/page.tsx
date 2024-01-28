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
  const [timeline, setTimeline] = useState<TimelineType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const [about, timeline] = await Promise.all([getAbout(), getTimeline()]);
      setAbout(about);
      console.log(timeline);
      const formattedTimeline = timeline.map((item: TimelineType) => ({
        ...item,
        title: formatDate(item.title),
      }));
      console.log(formattedTimeline);
      setTimeline(formattedTimeline);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string): string => {
    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      throw new Error("Invalid date format. Expected YYYY-MM-DD.");
    }

    // Extract year, month, and day from dateString
    const [year, month, day] = dateString
      .split("-")
      .map((num) => parseInt(num, 10));

    // Create a new date object using UTC values
    const date = new Date(Date.UTC(year, month - 1, day));

    // Format the date to "Month Year"
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              borderLessCard={true}
              disableInteraction={true}
              theme={{
                primary: "#ba31c2",
                secondary: "transparent",
                cardBgColor: "rgb(247,247,247)",
                titleColor: "#ba31c2",
                titleColorActive: "#ba31c2",
              }}
            />
          </div>
        )}
      </section>
    </>
  );
};
export default AboutPage;
