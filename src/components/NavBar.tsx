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
    <div className="min-h-screen w-full">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#090d1f]/95 backdrop-blur-sm z-[100] h-14 sm:h-16 border-b border-transparent">
        <div className="relative w-full">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
          <div className="container mx-auto flex justify-between items-center h-14 sm:h-16 px-3 sm:px-4">
            <div className="flex-1 flex justify-start">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="block md:hidden p-2"
                aria-label="Menu"
              >
                <svg
                  className="w-5 h-5 text-purple-300"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-base sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-rose-400 to-purple-300 truncate">
                Fundamentos da Internet
              </h1>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <nav
          className={`fixed top-[3.5rem] sm:top-16 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)]
            ${isExpanded ? "w-64" : "w-20"} 
            ${
              isMobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
            bg-[#090d1f]/95 backdrop-blur-sm border-r border-transparent
            transition-transform duration-300 z-[90] md:z-50
            shadow-lg md:shadow-none`}
        >
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-purple-500 via-rose-500 to-purple-500" />
          <div className="flex flex-col h-full">
            {/* Toggle Button with Logo */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
              <button
                onClick={handleLogoClick}
                className="flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-rose-400 to-purple-300 hover:opacity-80 transition-opacity"
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
                className="hidden md:flex p-2 focus:outline-none group"
              >
                <svg
                  className="w-6 h-6"
                  stroke="url(#navButtonGradient)"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient
                      id="navButtonGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#d8b4fe" />
                      <stop offset="50%" stopColor="#fb7185" />
                      <stop offset="100%" stopColor="#d8b4fe" />
                    </linearGradient>
                  </defs>
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
            <div className="flex-1 overflow-y-auto py-4 sm:py-6 px-2 sm:px-4">
              <div className="space-y-1 sm:space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base
                    ${
                      currentPath === item.href
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xl sm:text-2xl">{item.icon}</span>
                    {isExpanded && (
                      <div className="transition-opacity duration-300">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs sm:text-sm text-gray-500">
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
            pt-14 sm:pt-16 w-full`}
        >
          <div className="w-full">{children}</div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[80] md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default NavBar;
