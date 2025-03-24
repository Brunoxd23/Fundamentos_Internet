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
    <div className="py-12 w-full">
      {" "}
      {/* Increased padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
        {topics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
