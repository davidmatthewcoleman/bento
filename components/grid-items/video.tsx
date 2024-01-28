import { GridItemInterface } from "@/config/site-config";
import React, { useRef } from 'react';

const Video = ({ item }: { item: GridItemInterface }) => {
    const videoRef = useRef(null) as any;

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div
            className="cardpad flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90 opacity-90"/>
            {/* Image */}
            <video
                ref={videoRef}
                className="absolute inset-0 z-0 object-cover object-center w-full h-full block"
                loop
                muted
                playsInline
                preload="none" // This helps with lazy loading
                poster={item.video.poster}
            >
                <source src={item.video.webm} type="video/webm"/>
                <source src={item.video.mp4} type="video/mp4"/>
            </video>
            {/* Content */}
            <div className={`absolute inset-0 top-auto z-20 w-full p-4 space-y-3 md:p-8`}>
                <div
                    className="map-title flex flex-row items-center gap-1 text-sm font-medium text-white bg-black/50 border border-black max-w-max backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                    {item.title}
                </div>
            </div>
        </div>
    );
};

export default Video;
