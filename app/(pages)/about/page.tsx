"use client";
import Image from "next/image";
import MainText from "@/app/components/MainText";
import { getAbout } from "@/sanity/sanity.query";
import { getTimeline } from "@/sanity/sanity.query";
import { AboutType } from "@/types";
import { TimelineType } from "@/types";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";

import "../../Chrono.css";

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
      setTimeline(timeline);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const fullMonthFormat = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
    });
    const shortMonthFormat = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
    });

    return { fullMonthFormat, shortMonthFormat };
  };

  const constructTimelineItems = () => {
    return (
      timeline?.map((item) => {
        const { fullMonthFormat, shortMonthFormat } = formatDate(item.title);
        return {
          title: (
            <>
              <span className="full-month">{fullMonthFormat}</span>
              <span className="short-month">{shortMonthFormat}</span>
            </>
          ),
        };
      }) || []
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Use the constructTimelineItems function to generate items for the Chrono component
  const items = constructTimelineItems();
  console.log(items);

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
      <section className="sm:p-8 p-4">
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <Chrono
              items={items}
              hideControls={true}
              mode="VERTICAL_ALTERNATING"
              theme={{
                primary: "#ba31c2",
                secondary: "transparent",
                cardBgColor: "rgb(247,247,247)",
                cardForeColor: "red",
                titleColor: "#ba31c2",
                titleColorActive: "#ba31c2",
                color: "red",
              }}
              classNames={{
                card: "chrono-card",
                cardMedia: "chrono-card-media",
                cardSubTitle: "chrono-card-subtitle",
                cardText: "chrono-card-text",
                cardDescription: "chrono-card-description",
                cardTitle: "chrono-card-title",
                controls: "chrono-controls",
                title: "chrono-title",
              }}
            >
              {timeline &&
                timeline.map((item) => (
                  <>
                    <div className="w-full h-full space-y-4">
                      <h1 className="font-bold text-[#ba31c2]">
                        {item.cardTitle}
                      </h1>
                      {item.cardSubtitle && <h2>{item.cardSubtitle}</h2>}
                      {item.cardDetailedText && <p>{item.cardDetailedText}</p>}
                      {item.media && (
                        <Image
                          src={item.media.source.url}
                          width={500}
                          height={500}
                          alt={item.media.caption || ""}
                          unoptimized={true}
                          className="object-cover rounded shadow max-h-[300px] object-center w-full"
                        ></Image>
                      )}
                    </div>
                  </>
                ))}
            </Chrono>
          </div>
        )}

        {timeline && (
          <div className="max-w-6xl mx-auto">
            {/* <Chrono
              items={timeline}
              mode="VERTICAL_ALTERNATING"
              hideControls={true}
              borderLessCard={true}
              disableInteraction={true}
              theme={{
                primary: "#ba31c2",
                secondary: "transparent",
                cardBgColor: "rgb(247,247,247)",
                cardForeColor: "red",
                titleColor: "#ba31c2",
                titleColorActive: "#ba31c2",
                color: "red",
              }}
              fontSizes={{
                cardSubtitle: "0.85rem",
                cardText: "0.8rem",
                cardTitle: "1rem",
                title: "1rem",
              }}
              classNames={{
                card: "chrono-card",
                cardMedia: "chrono-card-media",
                cardSubTitle: "chrono-card-subtitle",
                cardText: "chrono-card-text",
                cardDescription: "chrono-card-description",
                cardTitle: "chrono-card-title",
                controls: "chrono-controls",
                title: "chrono-title",
              }}
              mediaHeight={300}
            /> */}
          </div>
        )}
      </section>
    </>
  );
};
export default AboutPage;
