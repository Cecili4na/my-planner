'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logoImage from '@/assets/images/logo.webp';

const navigation = [
  { name: 'Disciplinas', href: '/disciplinas' },
  { name: 'Horário Individual', href: '/horario' },
  { name: 'Agenda/Planner', href: '/agenda' },
  { name: 'Metas Semanais', href: '/metas' },
  { name: 'Fórum de Dúvidas', href: '/forum' },
];

const metas = [
  {
    id: 1,
    materia: 'Matemática',
    meta: 'Resolver 50 exercícios de funções',
    progresso: 70,
    cor: 'blue',
    dataLimite: '21/01/2024'
  },
  {
    id: 2,
    materia: 'Português',
    meta: 'Ler 2 livros da literatura obrigatória',
    progresso: 45,
    cor: 'green',
    dataLimite: '23/01/2024'
  },
  {
    id: 3,
    materia: 'História',
    meta: 'Revisar conteúdo do século XIX',
    progresso: 90,
    cor: 'purple',
    dataLimite: '20/01/2024'
  },
  {
    id: 4,
    materia: 'Física',
    meta: 'Completar módulo de Mecânica',
    progresso: 30,
    cor: 'red',
    dataLimite: '24/01/2024'
  }
];

export default function Metas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={logoImage}
                alt="Henrique Lobel Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Henrique Lobel
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  Você merece florescer
                </div>
              </div>
            </div>
            
            {/* Profile and Notification */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Profile Menu */}
              <div className="relative">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-gray-100">
                    <Link
                      href="/perfil"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Perfil
                    </Link>
                    <hr className="my-1 border-gray-200" />
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sair
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Tabs */}
      <div className="bg-white/50 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-center space-x-16" aria-label="Tabs">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="border-b-2 border-transparent hover:border-indigo-500 py-3 px-3 text-base font-medium text-gray-500 hover:text-gray-700 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Cabeçalho */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Metas Semanais</h1>
                <p className="text-gray-600 mt-1">Acompanhe seu progresso e mantenha o foco</p>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Nova Meta
              </button>
            </div>

            {/* Progresso Geral */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold">Média de Progresso</h3>
                <p className="text-3xl font-bold mt-2">58%</p>
                <p className="text-sm mt-1">Todas as metas</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900">Metas Concluídas</h3>
                <p className="text-3xl font-bold mt-2 text-gray-900">2/8</p>
                <p className="text-sm mt-1 text-gray-500">Esta semana</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900">Próximo Prazo</h3>
                <p className="text-3xl font-bold mt-2 text-gray-900">2 dias</p>
                <p className="text-sm mt-1 text-gray-500">Matemática</p>
              </div>
            </div>
          </div>

          {/* Lista de Metas */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <div className="space-y-4">
              {metas.map((meta) => (
                <div key={meta.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium text-${meta.cor}-600 bg-${meta.cor}-50`}>
                          {meta.materia}
                        </span>
                        <span className="text-sm text-gray-500">
                          Prazo: {meta.dataLimite}
                        </span>
                      </div>
                      <p className="text-gray-900 font-medium">{meta.meta}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`bg-${meta.cor}-600 h-2.5 rounded-full transition-all duration-500`}
                          style={{ width: `${meta.progresso}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-lg font-semibold text-gray-900">{meta.progresso}%</p>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}