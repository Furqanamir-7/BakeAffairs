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
  header: "h-[5.5rem] w-auto sm:h-24 md:h-[6.25rem] -my-3 sm:-my-4",
  lg: "h-[72px] w-auto",
  footer: "h-36 w-auto sm:h-40 md:h-44",
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
