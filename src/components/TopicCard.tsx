import React from "react";
import Link from "next/link";

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const TopicCard = ({ title, description, icon, href }: TopicCardProps) => {
  return (
    <Link href={href}>
      <div
        className="bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-900/80 backdrop-blur-sm rounded-lg p-4 sm:p-5 lg:p-6 
        hover:shadow-xl transition-all duration-300 cursor-pointer
        border border-purple-500/10 hover:border-rose-500/50
        hover:bg-gradient-to-br hover:from-purple-900/30 hover:via-rose-900/20 hover:to-purple-900/30 hover:scale-102 group
        hover:shadow-purple-500/10 text-white"
      >
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-purple-200 via-rose-200 to-purple-200 bg-clip-text text-transparent group-hover:from-rose-200 group-hover:via-purple-200 group-hover:to-rose-200">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default TopicCard;
