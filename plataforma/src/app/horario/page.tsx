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

const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const horarios = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

const materias = [
  { id: 1, nome: 'Matemática', cor: 'bg-blue-500' },
  { id: 2, nome: 'Português', cor: 'bg-green-500' },
  { id: 3, nome: 'História', cor: 'bg-purple-500' },
  { id: 4, nome: 'Geografia', cor: 'bg-yellow-500' },
  { id: 5, nome: 'Física', cor: 'bg-red-500' },
  { id: 6, nome: 'Química', cor: 'bg-pink-500' },
];

// Exemplo de grade horária
const gradeHoraria = {
  'Segunda-08:00': { materia: 'Matemática', tipo: 'Aula ao vivo' },
  'Segunda-10:00': { materia: 'Português', tipo: 'Videoaula' },
  'Terça-09:00': { materia: 'História', tipo: 'Exercícios' },
  'Quarta-14:00': { materia: 'Física', tipo: 'Aula ao vivo' },
  // ... outros horários
};

export default function Horario() {
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
          {/* Grade Horária */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Horário Individual</h1>
            
            {/* Grade */}
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead>
                  <tr>
                    <th className="w-20"></th>
                    {diasSemana.map((dia) => (
                      <th key={dia} className="px-4 py-2 text-sm font-medium text-gray-500 w-1/6">
                        {dia}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((horario) => (
                    <tr key={horario}>
                      <td className="px-4 py-2 text-sm text-gray-500 font-medium">
                        {horario}
                      </td>
                      {diasSemana.map((dia) => {
                        const aula = gradeHoraria[`${dia}-${horario}`];
                        return (
                          <td key={`${dia}-${horario}`} className="p-2">
                            {aula ? (
                              <div className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow cursor-pointer h-24">
                                <div className={`h-1 w-16 rounded-full mb-2 ${
                                  materias.find(m => m.nome === aula.materia)?.cor || 'bg-gray-500'
                                }`}></div>
                                <p className="font-medium text-gray-900">{aula.materia}</p>
                                <p className="text-sm text-gray-500">{aula.tipo}</p>
                              </div>
                            ) : (
                              <div className="h-24 border-2 border-dashed border-gray-200 rounded-lg"></div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legenda */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Legenda</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {materias.map((materia) => (
                  <div key={materia.id} className="flex items-center space-x-2">
                    <div className={`h-3 w-3 rounded-full ${materia.cor}`}></div>
                    <span className="text-sm text-gray-600">{materia.nome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Próximas Aulas */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Próximas Aulas</h2>
            <div className="space-y-3">
              {[
                { materia: 'Matemática', horario: 'Hoje, 14:00', tipo: 'Aula ao vivo' },
                { materia: 'Português', horario: 'Hoje, 16:00', tipo: 'Videoaula' },
                { materia: 'História', horario: 'Amanhã, 09:00', tipo: 'Exercícios' },
              ].map((aula, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                      materias.find(m => m.nome === aula.materia)?.cor || 'bg-gray-500'
                    } bg-opacity-20`}>
                      <span className="text-sm font-medium">{aula.materia.substring(0, 2)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{aula.materia}</p>
                      <p className="text-sm text-gray-500">{aula.horario}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-indigo-600">{aula.tipo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}