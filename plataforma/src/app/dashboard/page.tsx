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

export default function Dashboard() {
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
          {/* Welcome Section */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <h1 className="text-2xl font-bold text-gray-900">Bem-vindo(a) de volta!</h1>
            <p className="mt-2 text-gray-600">Continue de onde parou nos seus estudos.</p>
            
            {/* Progress Overview */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="font-semibold">Progresso Geral</h3>
                <p className="text-3xl font-bold mt-2">75%</p>
                <p className="text-sm mt-1">Meta semanal</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900">Tempo de Estudo</h3>
                <p className="text-3xl font-bold mt-2 text-gray-900">12h 30min</p>
                <p className="text-sm mt-1 text-gray-500">Esta semana</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900">Exercícios</h3>
                <p className="text-3xl font-bold mt-2 text-gray-900">85</p>
                <p className="text-sm mt-1 text-gray-500">Resolvidos</p>
              </div>
            </div>
          </div>

          {/* Recent Activities and Upcoming Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900">Atividades Recentes</h2>
              <div className="mt-4 space-y-4">
                {[
                  { title: 'Matemática - Capítulo 3 concluído', date: 'Hoje, 14:30' },
                  { title: 'Nova meta semanal adicionada', date: 'Hoje, 10:15' },
                  { title: 'Dúvida respondida no fórum', date: 'Ontem, 18:20' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500"></div>
                    <div>
                      <p className="text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900">Próximos Eventos</h2>
              <div className="mt-4 space-y-4">
                {[
                  { title: 'Aula ao vivo de Português', date: 'Amanhã, 15:00' },
                  { title: 'Prazo final - Lista de exercícios', date: '23/01, 23:59' },
                  { title: 'Revisão de História', date: '24/01, 14:00' }
                ].map((event, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
                    <div>
                      <p className="text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
}