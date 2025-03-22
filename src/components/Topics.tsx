import React from "react";
import TopicCard from "./TopicCard";

const Topics = () => {
  const topics = [
    {
      title: "DNS e Navegação",
      description:
        "Entenda como o DNS traduz nomes de domínio em endereços IP.",
      icon: "🌐",
      href: "/dns",
    },
    {
      title: "HTTP vs HTTPS",
      description:
        "Descubra as diferenças entre protocolos e a importância da segurança.",
      icon: "🔒",
      href: "/protocols",
    },
    {
      title: "História da Internet",
      description: "Da ARPANET aos dias atuais: a evolução da rede mundial.",
      icon: "📚",
      href: "/history",
    },
    {
      title: "Desenvolvimento Web",
      description: "HTML, CSS e JavaScript: os pilares da web moderna.",
      icon: "💻",
      href: "/development",
    },
  ];

  return (
    <div className="py-8 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/50 to-white/0 opacity-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {topics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
