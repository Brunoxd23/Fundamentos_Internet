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
      description: "Descubra as diferenças entre protocolos e segurança.",
      icon: "🛡️",
      href: "/protocols",
    },
    {
      title: "História da Internet",
      description: "Da ARPANET aos dias atuais: a evolução da rede mundial.",
      icon: "📅",
      href: "/history",
    },
    {
      title: "Desenvolvimento Web",
      description: "HTML, CSS e JavaScript: os pilares da web moderna.",
      icon: "⚡",
      href: "/development",
    },
  ];

  return (
    <div className="py-4 sm:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {topics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
