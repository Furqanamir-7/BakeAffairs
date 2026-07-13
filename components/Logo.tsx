import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "header" | "lg" | "footer" | "hero";
  /** Use the header/footer wordmark asset when true (default). */
  brand?: boolean;
};

const sizeClasses = {
  sm: "h-11 w-auto",
  md: "h-14 w-auto",
  // Fills the fixed header bar visually without changing nav height
  header:
    "h-[4.75rem] w-auto sm:h-[5.75rem] md:h-[6.5rem] -my-3 sm:-my-4 md:-my-5 scale-110 sm:scale-125 origin-left",
  lg: "h-[72px] w-auto",
  footer: "h-16 w-auto sm:h-[4.75rem]",
  hero: "h-32 w-auto sm:h-40 md:h-44",
};

export default function Logo({
  className = "",
  priority = false,
  size = "md",
  brand = true,
}: Props) {
  return (
    <Image
      src={brand ? "/brand/header-logo.png" : "/logo.png"}
      alt="Bake Affairs by Ayesha"
      width={500}
      height={500}
      priority={priority}
      className={`object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}
