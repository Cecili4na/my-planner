// pages/index.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import { 
  CreditCard, 
  ShieldCheck, 
  Wallet, 
  School, 
  QrCode, 
  Smartphone 
} from 'lucide-react';

// Interface para recursos
interface Recurso {
  icone: React.ElementType;
  titulo: string;
  descricao: string;
}

export default function Inicio() {
  // Dados dos recursos do sistema
  const recursos: Recurso[] = [
    {
      icone: ShieldCheck,
      titulo: "Segurança Total",
      descricao: "Sistema de pagamento 100% seguro com monitoramento em tempo real"
    },
    {
      icone: CreditCard,
      titulo: "Controle Parental",
      descricao: "Defina limites de gastos e acompanhe as compras do seu filho"
    },
    {
      icone: Wallet,
      titulo: "Recarga Fácil",
      descricao: "Adicione créditos rapidamente pelo seu smartphone"
    }
  ];

  // Estado para cadastro de email
  const [email, setEmail] = useState('');

  // Função para submeter email
  const handleSubmeterEmail = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado por se cadastrar com ${email}!`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Head>
        <title>Cartão Escolar - Solução Inteligente</title>
        <meta name="description" content="Revolucionando pagamentos escolares com cartão digital" />
      </Head>

      {/* Navegação */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <School className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-blue-600">Cartão Escolar</span>
          </div>
          <div className="space-x-4">
            <a href="#recursos" className="hover:text-blue-600 transition">Recursos</a>
            <a href="#como-funciona" className="hover:text-blue-600 transition">Como Funciona</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Cadastrar
            </button>
          </div>
        </div>
      </nav>

      {/* Seção Principal */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Cartão Escolar Inteligente
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Transforme a alimentação escolar com nosso sistema de pagamento digital seguro
        </p>
        
        {/* Cadastro de Email */}
        <form 
          onSubmit={handleSubmeterEmail} 
          className="max-w-md mx-auto flex space-x-2"
        >
          <input 
            type="email" 
            placeholder="Digite seu e-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700 transition"
          >
            Começar
          </button>
        </form>
      </header>

      {/* Seção de Recursos */}
      <section id="recursos" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {recursos.map((recurso, index) => {
            const Icone = recurso.icone;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg text-center 
                           transform transition hover:scale-105 hover:shadow-xl"
              >
                <Icone className="h-16 w-16 mx-auto text-blue-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{recurso.titulo}</h2>
                <p className="text-gray-600">{recurso.descricao}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section id="como-funciona" className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Como Funciona o Cartão Escolar
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <QrCode className="h-16 w-16 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cadastre o Cartão</h3>
            <p>Pais cadastram o cartão digital do filho no nosso aplicativo</p>
          </div>
          <div className="text-center">
            <Smartphone className="h-16 w-16 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adicione Créditos</h3>
            <p>Recarregue o saldo com facilidade através de pagamento online</p>
          </div>
          <div className="text-center">
            <CreditCard className="h-16 w-16 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pague na Cantina</h3>
            <p>Alunos usam o cartão para comprar lanches na escola</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-blue-200">Política de Privacidade</a>
            <a href="#" className="hover:text-blue-200">Termos de Uso</a>
            <a href="#" className="hover:text-blue-200">Contato</a>
          </div>
          <p>&copy; 2024 Cartão Escolar. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}