import React from "react";
import TopicLayout from "@/components/TopicLayout";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function DNSPage() {
  return (
    <TopicLayout currentPath="/dns">
      <div className="space-y-8 relative">
        <h1 className="text-4xl font-bold mb-8 text-rose-100">
          DNS e Navegação
        </h1>

        <div className="grid gap-8">
          <section
            className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
              hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
              transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-4 group-hover:text-purple-200">
              O que é DNS?
            </h2>
            <p className="text-gray-300 leading-relaxed group-hover:text-purple-100">
              O DNS (Domain Name System) é como uma agenda telefônica da
              internet, traduzindo nomes de domínios (como www.google.com) em
              endereços IP (como 142.250.190.78).
            </p>
          </section>

          <section
            className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
              hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
              transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-4 group-hover:text-purple-200">
              Como funciona?
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              {[
                "Quando você digita um endereço web, seu computador consulta um servidor DNS",
                "O servidor DNS procura o endereço IP correspondente",
                "O endereço IP é usado para conectar ao servidor correto",
                "O conteúdo do site é então enviado de volta para seu navegador",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group-hover:text-purple-100 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 rounded-lg border border-purple-500/20 
              hover:border-purple-500/40 hover:from-purple-800 hover:to-purple-900/80 
              transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-4 group-hover:text-purple-200">
              Benefícios do DNS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-purple-200 font-medium group-hover:text-purple-100">
                  Facilidade de Uso
                </h3>
                <p className="text-gray-300 group-hover:text-purple-100">
                  Permite usar nomes amigáveis em vez de números IP
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-purple-200 font-medium group-hover:text-purple-100">
                  Flexibilidade
                </h3>
                <p className="text-gray-300 group-hover:text-purple-100">
                  IPs podem mudar sem afetar o nome do domínio
                </p>
              </div>
            </div>
          </section>
        </div>
        <ScrollIndicator />
      </div>
    </TopicLayout>
  );
}
