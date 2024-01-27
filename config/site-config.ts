import {MapPin} from "lucide-react";

export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project" | "map" | "video";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  imageLight?: string;
  imageDark?: string;
  /* Video */
  video?: any;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "YouTube",
    icon: "youtube",
    username: "@crossrambles",
    description:
      "Meet CROSS: Adventurer of Pixels, Architect of Code, Dreamer. Autistic, Brony & Furry. From \"Inheritance\" to \"LOTR\" and \"Nightwish\", I paint digital realms on Cross Rambles. Helluva Boss Loona fan, gaming in Skyrim/Fallout. Dreaming of a Syncro nomad life. Welcome to my vivid journey. 🌌✨ #DigitalDreamer",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@crossrambles",
    buttonSecondaryText: '',
  },
  {
    layout: "1x2",
    type: "social",
    title: "Bluesky",
    icon: "bluesky",
    username: "@davidmc.io",
    buttonTitle: "Follow",
    buttonLink: "https://bsky.app/profile/davidmc.io",
    buttonSecondaryText: "",
    color: "#1185fe",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Facebook",
    icon: "facebook",
    username: "@crossrambles",
    buttonTitle: "Like",
    buttonSecondaryText: "",
    buttonLink: "https://facebook.com/crossrambles",
    color: "#1877f2",
  },
  {
    layout: "2x4",
    type: "video",
    title: "RIP Trudy, 2010 – 2024",
    video: {
      webm: "/trudy.webm",
      mp4: "/trudy.mp4"
    },
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twentyseven Degrees North",
    icon: "blog",
    username: "",
    buttonTitle: "Visit",
    buttonLink: "https://blog.davidmc.io",
    buttonSecondaryText: "",
    color: "#F9D236",
    description:
      'Adventurer of Pixels, Architect of Code, Dreamer. Autistic, Brony & Furry. From \"Inheritance\" to \"LOTR\" and \"Nightwish\", I paint digital realms on Cross Rambles. Helluva Boss Loona fan, gaming in Skyrim/Fallout. Dreaming of a Syncro nomad life.',
  },
  {
    layout: "2x2",
    type: "social",
    title: "Buy me a coffee",
    username: "@davidmc.io",
    description:
        "Help support me in my endeavors.",
    icon: "coffee",
    buttonTitle: "Support",
    buttonSecondaryText: "",
    buttonLink:
        "https://buymeacoffee.com/davidmc.io",
    color: '#EC6738',
  },
  {
    layout: "1x2",
    type: "social",
    title: "FanFiction",
    icon: "fanfiction",
    username: "@crossrambles",
    buttonTitle: "Favorite",
    buttonLink: "https://fanfiction.net",
    buttonSecondaryText: "",
    color: "#4152B4",
  },
  {
    layout: "1x2",
    type: "social",
    title: "DeviantART",
    icon: "deviantart",
    username: "@crossrambles",
    buttonTitle: "Watch",
    buttonLink: "https://deviantart.com/crossrambles",
    buttonSecondaryText: "",
    color: "#05cc47",
  },
  {
    layout: "2x4",
    type: "map",
    title: "Austin, TX, USA",
    imageLight: "/map_light.png",
    imageDark: "/map_dark.png",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Flickr",
    username: "@crossrambles",
    description:
        "I shoot photos. Sometimes.",
    icon: "flickr",
    buttonTitle: "Follow",
    buttonSecondaryText: "",
    buttonLink:
        "https://www.flickr.com/people/wolfheadtv/",
    color: '#ff0084',
  },
];

export const siteConfig = {
  creator: "David M. Coleman",
  title: "Writer & Blogger",
  bio: "I am the adventurer of pixels, the architect of code, and the dreamer behind the keyboard. This is my story...",
  location: "Austin, TX, USA",
  locationLink:
    "https://www.google.com/maps/place/Austin, TX",
  email: "mail@davidmc.io",
  items: GridItems,
} as const;
