"use client";

import Link from "next/link";

interface NavButtonProps {
  text: string;
  href: string;
}

export default function NavButton({ text, href }: NavButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If href starts with #, handle smooth scrolling
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    // For regular links, let Link handle the navigation normally
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="text-lg text-black dark:text-white border-2 border-black dark:border-white px-4 py-2 rounded-md hover:border-blue-500 hover:text-blue-500 transition duration-200"
    >
      {text}
    </Link>
  );
}
