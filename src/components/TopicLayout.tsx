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
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gray-900/80 backdrop-blur-sm shadow-md py-4 sticky top-0 z-10 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {previousTopic ? (
              <Link
                href={previousTopic.path}
                className="flex items-center space-x-2 text-rose-400 hover:text-rose-300"
              >
                <span className="text-xl">←</span>s
                <div>
                  <div className="text-sm text-gray-400">Anterior</div>
                  <div className="font-medium">
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
                className="flex items-center space-x-2 text-rose-400 hover:text-rose-300"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-400">Próximo</div>
                  <div className="font-medium">
                    {nextTopic.icon} {nextTopic.title}
                  </div>
                </div>
                <span className="text-xl">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TopicLayout;
