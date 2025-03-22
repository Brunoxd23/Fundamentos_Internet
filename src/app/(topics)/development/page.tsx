import React from "react";
import TopicLayout from "@/components/TopicLayout";

export default function DevelopmentPage() {
  return (
    <TopicLayout currentPath="/development">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-rose-100">
          Desenvolvimento Web
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cards with enhanced hover effects */}
          <div
            className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
              hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
              transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200">
              HTML
            </h2>
            <p className="text-gray-300 group-hover:text-purple-100 transition-colors">
              Estrutura e conteúdo da página web. Define elementos como títulos,
              parágrafos, imagens e links.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
              hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
              transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200">
              CSS
            </h2>
            <p className="text-gray-300 group-hover:text-purple-100 transition-colors">
              Estilização e layout. Controla cores, fontes, espaçamentos e
              posicionamento dos elementos.
            </p>
          </div>

          <div
            className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
              hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
              transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200">
              JavaScript
            </h2>
            <p className="text-gray-300 group-hover:text-purple-100 transition-colors">
              Interatividade e dinamismo. Permite criar funcionalidades como
              animações, validações e requisições.
            </p>
          </div>
        </div>
      </div>
    </TopicLayout>
  );
}
