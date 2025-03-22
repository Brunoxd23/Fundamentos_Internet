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
        className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 
        hover:shadow-xl transition-all duration-300 cursor-pointer
        border border-gray-800 hover:border-rose-500/50
        hover:bg-gray-800/50 hover:scale-105 group
        hover:shadow-rose-500/10 text-white"
      >
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform text-rose-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-rose-100 group-hover:text-rose-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

export default TopicCard;
