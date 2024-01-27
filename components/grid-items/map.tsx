import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import {MapPin} from "lucide-react";

const Map = ({ item }: { item: GridItemInterface }) => {
    return (
        <div className="flex flex-col items-end justify-end w-full h-full overflow-hidden rounded-3xl">
            {/* Image */}
            <Image
                className="z-0 object-cover object-center w-full h-full block dark:hidden"
                src={item.imageLight ?? ""}
                alt="map"
                fill
            />
            <Image
                className="z-0 object-cover object-center w-full h-full dark:block hidden"
                src={item.imageDark ?? ""}
                alt="map"
                fill
            />
            {/* Content */}
            <div className={`relative z-20 w-full p-4 space-y-3 md:p-8`}>
                <div className="map-title flex flex-row items-center gap-1 text-sm font-medium text-black dark:text-white bg-white/50 dark:bg-black/50 border border-neutral-200 dark:border-black max-w-max backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                    <MapPin size="14" />
                    {item.title}
                </div>
            </div>
        </div>
    );
};

export default Map;
