import Image from "next/image";
import Link from "next/link";
interface CardProps {
  id: string;
  header: string;
  description: string;
  tag: string;
}

export default function Card({ id, header, description, tag }: CardProps) {
  return (
    <Link
      href={`/projects/${id}`}
      className="relative h-64 w-96 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
    >
      <Image
        src={
          tag.toLowerCase() === "software"
            ? "/bitstream.jpg"
            : tag.toLowerCase() === "hardware"
            ? "/asic.jpg"
            : "/arcane.jpeg"
        }
        alt={header}
        fill={true}
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      <div className="relative z-10 p-4 h-full flex flex-col justify-end">
        <h2 className="text-xl font-bold text-white mb-2">{header}</h2>
        <p className="text-white/90">{description}</p>
      </div>
    </Link>
  );
}
