import Image from "next/image";

interface CardProps {
  header: string;
  description: string;
  imageUrl: string;
}

export default function Card({ header, description, imageUrl }: CardProps) {
  return (
    <div className="relative h-64 w-96 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <Image src={imageUrl} alt={header} fill={true} className="object-cover" />
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      <div className="relative z-10 p-4 h-full flex flex-col justify-end">
        <h2 className="text-xl font-bold text-white mb-2">{header}</h2>
        <p className="text-white/90">{description}</p>
      </div>
    </div>
  );
}
