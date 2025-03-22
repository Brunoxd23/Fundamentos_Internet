import React from "react";
import TopicLayout from "@/components/TopicLayout";

export default function ProtocolsPage() {
  return (
    <TopicLayout currentPath="/protocols">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-rose-100">HTTP vs HTTPS</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
              hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
              transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200">
              HTTP
            </h2>
            <p className="text-gray-300 mb-4 group-hover:text-purple-100">
              Protocolo de transferência de hipertexto básico, sem criptografia.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li className="group-hover:text-purple-100 transition-colors">
                Dados enviados em texto simples
              </li>
              <li className="group-hover:text-purple-100 transition-colors">
                Sem certificado de segurança
              </li>
              <li className="group-hover:text-purple-100 transition-colors">
                Porta padrão 80
              </li>
            </ul>
          </div>

          <div
            className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
              hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
              transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300 group-hover:text-purple-200">
              HTTPS
            </h2>
            <p className="text-gray-300 mb-4 group-hover:text-purple-100">
              Versão segura do HTTP, com criptografia SSL/TLS.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li className="group-hover:text-purple-100 transition-colors">
                Dados criptografados
              </li>
              <li className="group-hover:text-purple-100 transition-colors">
                Certificado SSL/TLS
              </li>
              <li className="group-hover:text-purple-100 transition-colors">
                Porta padrão 443
              </li>
            </ul>
          </div>
        </div>
      </div>
    </TopicLayout>
  );
}
