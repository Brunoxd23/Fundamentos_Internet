import React from "react";
import Link from "next/link";

const topics = [
  { path: "/dns", title: "DNS e Navegação", icon: "🌐" },
  { path: "/protocols", title: "HTTP vs HTTPS", icon: "🔒" },
  { path: "/history", title: "História da Internet", icon: "📚" },
  { path: "/development", title: "Desenvolvimento Web", icon: "💻" },
];

interface TopicLayoutProps {
  children: React.ReactNode;
  currentPath: string;
}

const TopicLayout = ({ children, currentPath }: TopicLayoutProps) => {
  const currentIndex = topics.findIndex((topic) => topic.path === currentPath);
  const previousTopic = topics[currentIndex - 1];
  const nextTopic = topics[currentIndex + 1];

  return (
    <div className="min-h-screen w-full">
      <div className="bg-gray-900/90 backdrop-blur-sm shadow-md py-3 sm:py-4 sticky top-0 z-10 border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {previousTopic ? (
              <Link
                href={previousTopic.path}
                className="flex items-center space-x-1 sm:space-x-2 text-rose-400 hover:text-rose-300"
              >
                <span className="text-lg sm:text-xl">←</span>
                <div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Anterior
                  </div>
                  <div className="text-sm sm:text-base font-medium">
                    {previousTopic.icon} {previousTopic.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextTopic && (
              <Link
                href={nextTopic.path}
                className="flex items-center space-x-1 sm:space-x-2 text-rose-400 hover:text-rose-300"
              >
                <div className="text-right">
                  <div className="text-xs sm:text-sm text-gray-400">
                    Próximo
                  </div>
                  <div className="text-sm sm:text-base font-medium">
                    {nextTopic.icon} {nextTopic.title}
                  </div>
                </div>
                <span className="text-lg sm:text-xl">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8 max-w-screen-2xl">
        <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-800/50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TopicLayout;
