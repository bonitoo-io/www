import * as React from "react";
import { AuthorCard } from "./AuthorCard";
import { RelatedPost } from "./RelatedPost";
import { ArticleHeader } from "./ArticleHeader";
import { BlogPostMetadata } from "./types";

import face from "@images/leadership/ivan-kudibal.png";

const metadata: BlogPostMetadata = {
  author: "jane doe",
  date: "august 15, 2024",
  category: "iot",
};

const relatedPosts = [
  {
    date: "august 15, 2024",
    title: "Influxdata Client Libraries August Release",
    description:
      "Best articles about InfluxDB 2.0 client libraries in 2021 Python Client Library...",
    imageUrl: "/blog/1.png",
  },
  {
    date: "august 15, 2024",
    title: "Influxdata Client Libraries August Release",
    description:
      "Best articles about InfluxDB 2.0 client libraries in 2021 Python Client Library...",
    imageUrl: "/blog/2.png",
  },
];

export const BlogPost: React.FC = () => {
  const handleShare = React.useCallback(() => {
    if (navigator.share) {
      navigator
        .share({
          title: "IoT Gateway Article",
          text: "Check out this article about Programmable Monitoring IoT Gateway",
          url: window.location.href,
        })
        .catch(console.error);
    }
  }, []);

  return (
    <main
      className="flex flex-col self-center mt-60 w-full max-w-[1150px] max-md:mt-10 max-md:max-w-full"
      role="main"
    >
      <ArticleHeader metadata={metadata} onShare={handleShare} />

      <article className="self-center mt-10 text-base font-bold text-neutral-800 w-[914px] max-md:max-w-full">
        <h1 className="text-2xl font-bold mb-6">
          Programmable Monitoring IoT Gateway
        </h1>

        <p>
          Programmable Monitoring IoT Gateway provided by Bonitoo.io is a
          multi-purpose monitoring hardware device programmable from your phone
          or computer over Wi-Fi connection.
        </p>

        <p className="self-start mt-6 ml-28 text-base text-neutral-800 max-md:max-w-full">
          The product is in the phase of a working functional prototype.
        </p>

        <h2 className="self-start mt-8 ml-28 text-3xl font-bold leading-none text-neutral-800 max-md:max-w-full">
          1. Connect the Gateway to Wi-Fi
        </h2>

        <p className="self-center mt-6 text-base text-neutral-800 w-[914px] max-md:max-w-full">
          Use browser or app to connect to the device Wi-Fi first, then
          configure the Wi-Fi the IoT Gateway should connect to. Multiple Wi-Fi
          support.
        </p>

        <h2 className="self-start mt-8 ml-28 text-3xl font-bold leading-none text-neutral-800 max-md:max-w-full">
          2. Add Devices, Sensors and Define Metrics
        </h2>

        <p className="self-center mt-6 text-base text-neutral-800 w-[914px] max-md:max-w-full">
          Use pins to connect external devices, whether they are on local
          network, Bluetooth or hardware pins. The box includes basic built-in
          environmental sensors.
        </p>
      </article>

      <AuthorCard
        name="Jane Doe"
        description="Having obtained the official & formal training in IT technology and technical fields, our staffs know best how to deliver large software products."
        imageUrl={face}
      />

      <section
        className="mt-32 max-md:mt-10"
        aria-labelledby="related-posts-heading"
      >
        <h2
          id="related-posts-heading"
          className="self-start text-lg tracking-widest uppercase text-neutral-800"
        >
          related posts
        </h2>
        <div className="flex gap-5 mt-8 max-md:flex-col">
          {relatedPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
            >
              <RelatedPost {...post} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
