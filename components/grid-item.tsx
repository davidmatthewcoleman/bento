"use client";
import { cn } from "@/utils/cn";
import getLuma from "@/utils/luma";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const variants = cva(
  "shadow-xl shadow-black/15 rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:[&_.cardpad]:p-8 [&_.cardpad]:p-4",
        "2x1": "md:col-span-2 col-span-full row-span-1 [&_.cardpad]:py-4 md:[&_.cardpad]:px-8 [&_.cardpad]:px-4",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:[&_.cardpad]:p-8 [&_.cardpad]:p-4",
        "2x4":
          "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = {
    children: React.ReactNode,
    color: string
} & VariantProps<typeof variants>;

const GridItem = ({ size, children, color }: GridItemProps) => {
  const luma = getLuma(color ? color : '#000000');
  const style = { "--accent": color ? color : 'transparent' } as React.CSSProperties;
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className:
            `card duration-75 transition-colors ease-in-out [&_.txt]:transition-colors ${luma ? '[&_.txt]:hover:text-white' : '[&_.txt]:hover:text-black'}`,
        })
      )}
      style={style}
    >
        <div className={`block card-inner dark:bg-neutral-900 bg-neutral-50`}>
            {children}
        </div>
    </motion.div>
  );
};

export default GridItem;
