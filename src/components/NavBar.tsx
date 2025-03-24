"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      href: "/dns",
      label: "DNS e Navegação",
      icon: "🌐",
      description: "Sistema de Nomes de Domínio",
    },
    {
      href: "/protocols",
      label: "HTTP vs HTTPS",
      icon: "🛡️",
      description: "Protocolos Web",
    },
    {
      href: "/history",
      label: "História",
      icon: "📅",
      description: "História da Internet",
    },
    {
      href: "/development",
      label: "Desenvolvimento",
      icon: "⚡",
      description: "Desenvolvimento Web",
    },
  ];

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto flex justify-between items-center h-16 px-4">
          <h1 className="text-2xl font-bold text-rose-500">
            Fundamentos da Internet
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-rose-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <nav
          className={`fixed top-16 h-[calc(100vh-4rem)]
            ${isExpanded ? "w-64" : "w-20"} 
            ${isMobileMenuOpen ? "left-0" : "-left-full md:left-0"}
            bg-gray-900/95 backdrop-blur-sm border-r border-gray-800 
            transition-all duration-300 z-40 md:z-30`}
        >
          <div className="flex flex-col h-full">
            {/* Toggle Button with Logo */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
              <button
                onClick={handleLogoClick}
                className="flex items-center text-rose-500 hover:text-rose-400 transition-colors"
              >
                {isExpanded ? (
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">⚡</span>
                    <span className="font-medium">Navegação</span>
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                )}
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden md:flex p-2 text-gray-300 hover:text-rose-400 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isExpanded ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all
                    ${
                      currentPath === item.href
                        ? "bg-rose-500/20 text-rose-400"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-rose-400"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    {isExpanded && (
                      <div className="transition-opacity duration-300">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300
            ${isExpanded ? "md:ml-64" : "md:ml-20"}
            p-6`}
        >
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default NavBar;