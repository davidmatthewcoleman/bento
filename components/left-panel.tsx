"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col self-start justify-between py-6 xl:max-w-sm xl:py-10 xl:sticky top-0 z-20"
    >
      {/* Top Container */}
      <div className={`drop-shadow-xl`}>
        <div className={`relative mask-squircle max-w-max`}>
          <Image
              priority
              loading="eager"
              alt="avatar"
              placeholder="blur"
              src="/profile.jpg"
              width={120}
              height={120}
              blurDataURL="/profile.jpg"
              className={`block`}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className={`absolute inset-0 fill-transparent stroke-[1px] stroke-neutral-500 mix-blend-color-dodge pointer-events-none`} viewBox="0 0 90 90">
            <path d="M45 0C9 0 0 9 0 45s9 45 45 45 45-9 45-45S81 0 45 0Z"/>
          </svg>
        </div>

        {/* Text Container */}
        <div className="mt-6">
          <div className="text-xl font-medium text-primary">
            {siteConfig.title}
          </div>
          <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
          <p className="text-2xl font-light text-neutral-500">
            {siteConfig.bio}
          </p>
        </div>
        {/* Buttons Container */}
        <div className="flex items-center gap-3 mt-6">
          <a
            href={`${siteConfig.locationLink}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <Mail size="14" />
            Contact Me
          </a>
        </div>
        {/* Footer */}
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
