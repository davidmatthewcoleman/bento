import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";

const Video = ({ item }: { item: GridItemInterface }) => {
    return (
        <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl">
            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90 opacity-90"/>
            {/* Image */}
            <video
                id="background"
                className="absolute inset-0 z-0 object-cover object-center w-full h-full block"
                autoPlay
                loop
                muted
                playsInline
                preload="none" // This helps with lazy loading
            >
                <source src={item.video} type="video/webm"/>
            </video>
            {/* Content */}
            <div className={`relative z-20 w-full p-4 space-y-3 md:p-8`}>
                <div
                    className="map-title flex flex-row items-center gap-1 text-sm font-medium text-white bg-black/50 border border-black max-w-max backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                    {item.title}
                </div>
            </div>
        </div>
    );
};

export default Video;
