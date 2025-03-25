import React from "react";
import TopicLayout from "@/components/TopicLayout";
import PageScrollIndicator from "@/components/PageScrollIndicator";

export default function HistoryPage() {
  const historyItems = [
    {
      icon: "🌐",
      title: "ARPANET (1969)",
      description:
        "A primeira rede de computadores, desenvolvida pelo Departamento de Defesa dos EUA. Foi o primeiro passo para a internet que conhecemos hoje.",
    },
    {
      icon: "🔄",
      title: "TCP/IP (1983)",
      description:
        "Criação dos protocolos TCP/IP, que permitiram a comunicação entre diferentes redes e se tornaram a base da internet moderna.",
    },
    {
      icon: "🌍",
      title: "World Wide Web (1989)",
      description:
        "Tim Berners-Lee cria a World Wide Web no CERN, introduzindo o conceito de páginas web interligadas por hiperlinks, revolucionando o acesso à informação.",
    },
  ];

  return (
    <TopicLayout currentPath="/history">
      <div className="space-y-8 max-w-5xl mx-auto pb-20">
        <h1 className="text-4xl font-bold mb-8 text-rose-100">
          História da Internet
        </h1>

        <div className="space-y-8">
          {historyItems.map((item, index) => (
            <section
              key={index}
              className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
                hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
                transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <h2 className="text-2xl font-semibold text-purple-300 group-hover:text-purple-200">
                  {item.title}
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-purple-100">
                {item.description}
              </p>
            </section>
          ))}
        </div>
        <PageScrollIndicator />
      </div>
    </TopicLayout>
  );
}
